package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/J-Liciaga/athena-ai/apps/api/config"
	"github.com/J-Liciaga/athena-ai/apps/api/graph"
	"github.com/J-Liciaga/athena-ai/apps/api/internal/db"
	"github.com/go-redis/redis/v8"
	"gorm.io/gorm"
)

const defaultPort = "8080"

func main() {
	// Initialize PlanetScale
	psDB, err := db.InitPlanetScaleDB()
	if err != nil {
		log.Fatalf("Could not connect to PlanetScale: %v", err)
	}
	defer psDB.Close()

	// Initialize GORM
	gormDB, err := db.InitGORM(psDB)
	if err != nil {
		log.Fatalf("Could not initialize GORM: %v", err)
	}
	if gormDB == nil {
		log.Fatalf("gormDB is nil after initialization")
	}

	// Initialize Redis
	redisClient, err := db.InitRedis()
	if err != nil {
		log.Fatalf("failed to initialize Redis: %v", err)
	}
	log.Printf("successfully initialized to Redis client")

	// Initialize Clerk Client
	// client, err := clerk.NewClient(os.Getenv("CLERK_SECRET_KEY"))
	// if err != nil {
	// 	log.Fatalf("could not initialize Clerk client: %v", err)
	// }
	log.Printf("successfully connected to Clerk client")

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	// Main GraphQL handler with context-based dependency injection
	wrappedGraphqlHandler := contextMiddleware(srv, gormDB, redisClient)
	// Playground GraphQL handler with context-based dependency injection
	wrappedPlaygroundHandler := contextMiddleware(playground.Handler("GraphQL playground", "/query"), gormDB, redisClient)

	http.Handle("/query", wrappedGraphqlHandler)
	http.Handle("/", wrappedPlaygroundHandler)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

// context-based dependency injection resolver handler wrapper
func contextMiddleware(next http.Handler, gormDB *gorm.DB, redisClient *redis.Client) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Get session token from Authorization header
		// sessionToken := r.Header.Get("Authorization")
		// if !strings.HasPrefix(sessionToken, "Bearer ") {
		// 	http.Error(w, "Unauthorized", http.StatusUnauthorized)
		// 	return
		// }
		// sessionToken = strings.TrimPrefix(sessionToken, "Bearer ")
		// // Verify the session
		// sessClaims, err := client.VerifyToken(sessionToken)
		// if err != nil {
		// 	http.Error(w, "Unauthorized", http.StatusUnauthorized)
		// 	return
		// }
		// // Get the user
		// user, err := client.Users().Read(sessClaims.Claims.Subject)
		// if err != nil {
		// 	http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		// 	log.Printf("Failed to read user: %v", err)
		// 	return
		// }

		ctx := r.Context()
		ctx = context.WithValue(ctx, config.DbKey, gormDB)
		ctx = context.WithValue(ctx, config.RedisClientKey, redisClient)
		// ctx = context.WithValue(ctx, config.UserKey, user)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
