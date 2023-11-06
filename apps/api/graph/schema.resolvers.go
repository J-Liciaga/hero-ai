package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.36

import (
	"context"
	"fmt"
	"log"

	"github.com/J-Liciaga/athena-ai/apps/api/config"
	"github.com/J-Liciaga/athena-ai/apps/api/graph/model"
	"github.com/J-Liciaga/athena-ai/apps/api/internal/auth"
	"github.com/J-Liciaga/athena-ai/apps/api/internal/models"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input *model.CreateUserInput) (*models.User, error) {
	user := &models.User{
		ClerkID:     input.ClerkID,
		Fullname:    input.Fullname,
		Username:    input.Username,
		Email:       input.Email,
		PhoneNumber: input.PhoneNumber,
	}

	user.ID = uuid.NewString()

	if db, ok := ctx.Value(config.DbKey).(*gorm.DB); ok {
		newUser, err := auth.CreateUser(db, user)
		if err != nil {
			return nil, err
		}
		return newUser, nil
	} else {
		log.Println("Could not retrieve db from context")
		return nil, fmt.Errorf("Could not retrieve db from context")
	}
}

// GetUser is the resolver for the getUser field.
func (r *queryResolver) GetUser(ctx context.Context, id string) (*models.User, error) {
	db, _ := ctx.Value("db").(*gorm.DB)
	var user models.User
	if err := db.Where("clerk_id = ?", id).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
