package models

type Journal struct {
	ID     string `gorm:"primaryKey"`
	UserID string `gorm:"foreignKey:ID"`
	Mood   string
	Note   string
}
