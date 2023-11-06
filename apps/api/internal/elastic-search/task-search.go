// apps/api/internal/elastic-search/task-search.go

package elasticsearch

import (
	"fmt"

	"github.com/J-Liciaga/athena-ai/apps/api/internal/models"
	"github.com/olivere/elastic/v7"
)

func SearchTasks(client *elastic.Client, query string) ([]models.Task, error) {
	panic(fmt.Errorf("not implemented: SearchTasks"))
}
