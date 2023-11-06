package models

type KanbanBoard struct {
	ID     string `gorm:"primaryKey"`
	UserID string `gorm:"foreignKey:ID"`
	Name   string
}
