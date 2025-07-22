# /users/register Endpoint Documentation

## Description
The `/users/register` endpoint allows new users to register. It validates the provided data and, upon successful creation, returns an authentication token along with the user details.

## HTTP Method
POST

## URL
`/users/register`

## Request Body
The endpoint expects a JSON payload with the following properties:

- **email** (string, required): Must be a valid email address.
- **fullname** (object, required):
  - **firstname** (string, required): At least 3 characters long.
  - **lastname** (string, optional): At least 3 characters long if provided.
- **password** (string, required): Must be at least 6 characters long.



### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "secret123"
}
```


## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f1c2e5b6a3c2a1b8e7d9f0",
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "createdAt": "2024-06-10T12:34:56.789Z"
  }
}
```