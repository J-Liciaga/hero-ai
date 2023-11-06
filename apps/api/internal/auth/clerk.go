// api/internal/auth/clerk.go

package auth

import (
	"context"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/clerkinc/clerk-sdk-go/clerk"
)

func ClerkMiddleware() func(http.Handler) http.Handler {
	key := os.Getenv("CLERK_SECRET_KEY")
	client, err := clerk.NewClient(key)

	if err != nil {
		log.Fatalf("[ERROR] could not connect to Clerk: %v", err)
	}

	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// get session token from Authorization header
			sessionToken := r.Header.Get("Authorization")
			sessionToken = strings.TrimPrefix(sessionToken, "Bearer ")
			// verify the session
			session, err := clerk.Client.VerifyToken(client, sessionToken)

			if err != nil {
				w.WriteHeader(http.StatusUnauthorized)
				w.Write([]byte("Unauthorized"))

				return
			}

			user, err := clerk.Client.Users(client).Read(session.Claims.Subject)

			ctx := context.WithValue(r.Context(), "user", user)
			next.ServeHTTP(w, r.WithContext((ctx)))
		})
	}
}
