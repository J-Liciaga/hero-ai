// api/internal/db/redis.go

package db

import (
	"context"
	"fmt"

	"github.com/go-redis/redis/v8"
)

var Ctx = context.Background()

func InitRedis() (*redis.Client, error) {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "redis:6379", // Redis server address
		Password: "",           // no password set
		DB:       0,            // use default DB
	})

	pong, err := rdb.Ping(Ctx).Result()
	if err != nil {
		return nil, fmt.Errorf("could not establish Redis connection: %v", err)
	}

	fmt.Println("Redis ping:", pong)
	return rdb, nil
}
