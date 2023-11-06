package auth

import (
	"fmt"
	"regexp"
	"time"

	"github.com/J-Liciaga/athena-ai/apps/api/internal/models"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

func validateEmail(email string) bool {
	const emailRegex = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
	re := regexp.MustCompile(emailRegex)
	return re.MatchString(email)
}

func CreateUser(db *gorm.DB, user *models.User) (*models.User, error) {
	// Validations
	if user.ClerkID == "" || user.Fullname == "" || user.Username == "" || user.Email == "" || user.PhoneNumber == "" {
		return nil, fmt.Errorf("all fields must be non-empty")
	}

	if !validateEmail(user.Email) {
		return nil, fmt.Errorf("invalid email format")
	}

	currentTime := time.Now().Format("2006-01-02 15:04:05")
	newUser := models.User{
		ID:          uuid.NewString(),
		ClerkID:     user.ClerkID,
		Username:    user.Username,
		Email:       user.Email,
		PhoneNumber: user.PhoneNumber,
		CreatedAt:   currentTime,
		UpdatedAt:   currentTime,
	}
	// Insert user into the database
	result := db.Create(&newUser)
	// Check for errors
	if result.Error != nil {
		return nil, result.Error
	}
	// // Create a base calendar for the user
	// baseCalendar := &models.Calendar{
	// 	UserID:      user.ID,
	// 	Name:        "Base Calendar",
	// 	Description: "Your default calendar",
	// }
	// err := db.Create(&baseCalendar).Error
	// if err != nil {
	// 	return nil, err
	// }

	// // Create a base Kanban board for the user
	// baseKanbanBoard := &models.KanbanBoard{
	// 	UserID: user.ID,
	// 	Name:   "Base Kanban Board",
	// }
	// kanban := db.Create(&baseKanbanBoard).Error
	// if err != nil {
	// 	return nil, kanban
	// }

	// // Create a base Habit board for the user
	// baseHabitBoard := &models.HabitBoard{
	// 	UserID: user.ID,
	// 	Name:   "Base Habit Board",
	// }
	// habits := db.Create(&baseHabitBoard).Error
	// if habits != nil {
	// 	return nil, habits
	// }

	return user, nil
}

func UpdateUser(db *gorm.DB, id, newPassword string) error {
	updatedTime := time.Now().Format("2006-01-02 15:04:05")
	updatedUser := models.User{
		ID:        id,
		UpdatedAt: updatedTime,
	}
	return db.Model(&models.User{}).Where("id = ?", id).Updates(&updatedUser).Error
}

func FetchUserByClerkID(db *gorm.DB, clerkID string) (*models.User, error) {
	var user models.User
	if err := db.Where("clerk_id = ?", clerkID).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}
