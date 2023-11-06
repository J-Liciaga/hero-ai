// api/internal/db/planetscale.go

package db

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func InitPlanetScaleDB() (*sql.DB, error) {
	// Connect to Planetscale
	db, err := sql.Open("mysql", os.Getenv("PLANETSCALE_DEV_DSN"))

	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		log.Fatalf("failed to ping: %v", err)
	}

	log.Printf("successfully connected to PlanetScale")

	return db, nil
}
