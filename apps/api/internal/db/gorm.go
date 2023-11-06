// api/internal/db/gorm.go

package db

import (
	"database/sql"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func InitGORM(db *sql.DB) (*gorm.DB, error) {
	gormDB, err := gorm.Open(mysql.New(mysql.Config{Conn: db}), &gorm.Config{})

	if err != nil {
		return nil, err
	}

	log.Printf("successfully initialized to GORM")

	return gormDB, nil
}
