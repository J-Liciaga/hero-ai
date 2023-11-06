package models

type Reminder struct {
	ID      string `gorm:"primaryKey"`
	EventID string `gorm:"foreignKey:ID"`
	Time    string
}
