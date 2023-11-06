package models

type Project struct {
	ID       string `gorm:"primaryKey"`
	UserID   string `gorm:"foreignKey:ID"`
	Name     string
	Calendar string `gorm:"foreignKey:ID"`
}
