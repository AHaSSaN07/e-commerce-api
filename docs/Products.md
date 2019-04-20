    # Products

# get

**URL** : `/api/Products/` to get all products

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :

```json
{
        "_id": "5cb66a9374fcb2047c371b76",
        "name": "shirt",
        "owner": "town team",
        "quantity": 15,
        "price": 55,
        "discount": 15,
        "__v": 0
    }
```


## Notes

* if only one Product is requested ,add "/:id" to the url



# POST 

**URL** : `/api/Products/add` to add a new products

**Method** : `POST`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :
the created product.

```json
{
        "_id": "5cb66a9374fcb2047c371b76",
        "name": "shirt",
        "owner": "town team",
        "quantity": 15,
        "price": 55,
        "discount": 15,
        "__v": 0
    }
```
# PUT 

**URL** : `/api/Products/:id` to edit a product

**Method** : `PUT`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :
the edited product.

```json
{
        "_id": "5cb66a9374fcb2047c371b76",
        "name": "shirt",
        "owner": "town team",
        "quantity": 15,
        "price": 300,
        "discount": 15,
        "__v": 0
    }
```

# DELETE 

**URL** : `/api/products/:id` to delete a product

**Method** : `DELETE`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :
the deleted product.

```json
{
        "_id": "5cb66a9374fcb2047c371b76",
        "name": "shirt",
        "owner": "town team",
        "quantity": 15,
        "price": 300,
        "discount": 15,
        "__v": 0
    }
```










