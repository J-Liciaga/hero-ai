package models

type AvoidHabit struct {
	ID           string `gorm:"primaryKey"`
	HabitBoardID string `gorm:"foreignKey:ID"`
	Name         string
}
