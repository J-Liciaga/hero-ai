// apps/api/internal/elastic-search/event-search.go

package elasticsearch

import (
	"fmt"

	"github.com/J-Liciaga/athena-ai/apps/api/internal/models"
	"github.com/olivere/elastic/v7"
)

func SearchEvents(client *elastic.Client, query string) ([]models.Event, error) {
	panic(fmt.Errorf("not implemented: SearchEvents"))
}
