package models

type Event struct {
	ID          string `gorm:"primaryKey"`
	CalendarID  string `gorm:"foreignKey:ID"`
	Description string
}
