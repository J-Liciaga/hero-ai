package config

type contextKey string

const (
	DbKey          contextKey = "dbKey"
	RedisClientKey contextKey = "redisClientKey"
	UserKey        contextKey = "userKey"
)
