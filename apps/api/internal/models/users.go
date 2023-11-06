package models

type User struct {
	ID          string `gorm:"type:uuid;primary_key;default"`
	ClerkID     string `gorm:"unique;not null"`
	Fullname    string `gorm:"not null"`
	Username    string `gorm:"not null"`
	Email       string `gorm:"unique;not null"`
	PhoneNumber string `gorm:"unique;not null"`
	CreatedAt   string
	UpdatedAt   string
	// Calendars   []Calendar
	// Journals    []Journal
	// Boards      []Board
}
