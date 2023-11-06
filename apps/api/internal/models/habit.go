package models

type Habit struct {
	ID            string `gorm:"primaryKey"`
	HabitBoardID  string `gorm:"foreignKey:ID"`
	Frequency     string
	Priority      string
	PreferredTime string
}
