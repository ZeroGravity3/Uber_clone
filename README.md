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

---

# /users/login Endpoint Documentation

## Description
The `/users/login` endpoint allows existing users to log in by providing their credentials. If authenticated successfully, it returns an authentication token along with the user details.

## HTTP Method
POST

## URL
`/users/login`

## Request Body
The endpoint expects a JSON payload with the following properties:

- **email** (string, required): Must be a valid email address.
- **password** (string, required): The user's password.

### Example Request
```json
{
  "email": "user@example.com",
  "password": "secret123"
}
```

## Example Response

### Success (200)
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

### Error (400 or 401)
```json
{
  "message": "Invalid email or password"
}
```

---

# /users/profile Endpoint Documentation

## Description
The `/users/profile` endpoint retrieves the authenticated user's profile information. This endpoint requires authentication via a valid JWT token.

## HTTP Method
GET

## URL
`/users/profile`

## Headers
- **Authorization**: Bearer token required
  ```
  Authorization: Bearer <your_jwt_token>
  ```

## Response

### Success (200)
```json
{
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

### Error (401)
```json
{
  "message": "Authentication required"
}
```

---

# /users/logout Endpoint Documentation

## Description
The `/users/logout` endpoint logs out the currently authenticated user by invalidating their token and clearing the authentication cookie.

## HTTP Method
GET

## URL
`/users/logout`

## Headers
- **Authorization**: Bearer token required
  ```
  Authorization: Bearer <your_jwt_token>
  ```

## Response

### Success (200)
```json
{
  "message": "User logged out successfully"
}
```

### Error (401)
```json
{
  "message": "Authentication required"
}
```

Note: Upon successful logout, the token will be blacklisted and the authentication cookie will be cleared.