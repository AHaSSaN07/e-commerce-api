# Customers

# get

**URL** : `/api/Customers/` to get all users

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :

```json
{
        "_id": "5cb658c402f4801468c996fe",
        "name": "ahmed",
        "email": "enga.hassan60@gmail.com",
        "phone" 01097149806,
        "address": "mahalla",
        "__v": 0
    }
```


## Notes

* if only one custoemer is requested ,add "/:id" to the url



# POST 

**URL** : `/api/Customers/add` to add a new user

**Method** : `POST`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :
the created customer.

```json
{
        "_id": "5cb658c402f4801468c996fe",
        "name": "ahmed",
        "email": "enga.hassan60@gmail.com",
        "phone" 01097149806,
        "address": "mahalla",
        "__v": 0
    }
```
# PUT 

**URL** : `/api/Customers/:id` to edit a user

**Method** : `PUT`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :
the edited customer.

```json
{
        "_id": "5cb658c402f4801468c996fe",
        "name": "ahmed",
        "email": "enga.hassan66@gmail.com",
        "phone" 01097149806,
        "address": "mahalla",
        "__v": 0
    }
```

# DELETE 

**URL** : `/api/Customers/:id` to delete a user

**Method** : `DELETE`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :
the deleted customer.

```json
{
        "_id": "5cb658c402f4801468c996fe",
        "name": "ahmed",
        "email": "enga.hassan66@gmail.com",
        "phone" 01097149806,
        "address": "mahalla",
        "__v": 0
    }
```










