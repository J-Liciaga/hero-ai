package models

type Calendar struct {
	ID          string `gorm:"primaryKey"`
	UserID      string `gorm:"foreignKey:ID"`
	Name        string
	Description string
}
