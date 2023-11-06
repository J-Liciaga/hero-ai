package models

type Task struct {
	ID            string `gorm:"primaryKey"`
	UserID        string `gorm:"foreignKey:ID"`
	KanbanBoardID string `gorm:"foreignKey:ID"`
	ProjectID     string `gorm:"foreignKey:ID"`
	Description   string
}
