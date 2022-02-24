# feathers-harperdb


# TODOs

### Apis that must exist

pagination
    default
    max
id
whitelist of nonstandard query parameters
multi boolean


find structure:
{
  "total": "<total number of records>",
  "limit": "<max number of items per page>",
  "skip": "<number of skipped items (offset)>",
  "data": [/* data */]
}

#### Methods
_create / create
    {
        "operation": "insert",
        "schema": "dev",
        "table": "dog",
        "records": [
            {
                "id": 1,
                "dog_name": "Penny",
                "owner_name": "Kyle",
                "breed_id": 154,
                "age": 7,
                "weight_lbs": 38
            }
        ]
    }


_update / update
    {
        "operation": "update",
        "schema": "dev",
        "table": "dog",
        "records": [
            {
                "id": 1,
                "dog_name": "Penny B"
            }
        ]
    }


_get / get
    {
        "operation": "sql",
        "sql": "SELECT * FROM dev.dog where id = 1"
    }


$select
    {
        "operation": "sql",
        "sql": "SELECT d.id, d.dog_name, d.owner_name, b.name, b.section FROM dev.dog AS d INNER JOIN dev.breed AS b ON d.breed_id = b.id WHERE d.owner_name IN ('Kyle', 'Zach', 'Stephen') AND b.section = 'Mutt' ORDER BY d.dog_name"
    }

_find / find
    raw

constructo


#### Sync
Create a schema
{
    "operation": "create_schema",
    "schema": "movies"
}
Create a table if not there
{
    "operation": "create_table",
    "schema": "movies", 
    "table": "movie",
    "hash_attribute": "id"
}
