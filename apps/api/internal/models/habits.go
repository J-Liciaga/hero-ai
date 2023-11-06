package models

type HabitBoard struct {
	ID     string `gorm:"primaryKey"`
	UserID string `gorm:"foreignKey:ID"`
	Name   string
}
