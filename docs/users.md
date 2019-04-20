# Users

# get

**URL** : `/api/users/me` to get current users 

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :

```json
{
    "_id": "5cb7b70f40e50e300cb572e4",
    "name": "ahmed",
    "email": "enga.hassan60@gmail.com",
    "__v": 0
}
```


# POST 

**URL** : `/api/users` to add a new user

**Method** : `POST`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Response body** :
the name and email of created user without the enterd password
```json
{
    "_id": "5cbb97cfeb22c209746c4062",
    "name": "ahmedd",
    "email": "enga.hassan"
}
```










