// apps/api/internal/elastic-search/elastic-search.go

package elasticsearch

import (
	"github.com/olivere/elastic/v7"
)

func InitElasticSearchClient() (*elastic.Client, error) {
	client, err := elastic.NewClient(elastic.SetURL("http://elasticsearch:9200"))
	if err != nil {
		return nil, err
	}

	return client, nil
}
