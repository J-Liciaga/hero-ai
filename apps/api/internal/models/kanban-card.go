package models

type KanbanCard struct {
	ID            string `gorm:"primaryKey"`
	TaskID        string `gorm:"foreignKey:ID"`
	KanbanBoardID string `gorm:"foreignKey:ID"`
	Status        string
}
