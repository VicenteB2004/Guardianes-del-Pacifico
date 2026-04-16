# API Endpoints - Salvavidas

Estructura de endpoints planeados para la API REST del proyecto Salvavidas.

## Base URL
```
http://localhost:3000
```

## Autenticación
Todos los endpoints (excepto /auth/login y /auth/register) requieren:
```
Authorization: Bearer <access_token>
```

---

## 🔐 Auth Module

### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response (200):
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "lifeguard",
    "createdAt": "2024-02-20T10:30:00Z",
    "updatedAt": "2024-02-20T10:30:00Z"
  }
}
```

### Register
```
POST /auth/register
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "password123",
  "firstName": "Jane",
  "lastName": "Smith"
}

Response (201):
{
  "accessToken": "...",
  "refreshToken": "...",
  "user": { ... }
}
```

### Refresh Token
```
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Response (200):
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 👥 Users Module (TODO)

### Get All Users
```
GET /users
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "message": "Users retrieved successfully",
  "data": [
    {
      "id": "...",
      "email": "...",
      "firstName": "...",
      "lastName": "...",
      "role": "lifeguard",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ],
  "timestamp": "2024-02-20T10:30:00Z"
}
```

### Get User by ID
```
GET /users/:id
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "message": "User retrieved successfully",
  "data": { ... },
  "timestamp": "2024-02-20T10:30:00Z"
}
```

### Create User
```
POST /users
Authorization: Bearer <token>
Content-Type: application/json
Roles: [admin, supervisor]

{
  "email": "newuser@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "lifeguard"
}

Response (201):
{ ... }
```

### Update User
```
PUT /users/:id
Authorization: Bearer <token>
Content-Type: application/json
Roles: [admin, supervisor] or own user

{
  "firstName": "Jane",
  "lastName": "Smith",
  "role": "supervisor"
}

Response (200):
{ ... }
```

### Delete User
```
DELETE /users/:id
Authorization: Bearer <token>
Roles: [admin]

Response (200):
{
  "statusCode": 200,
  "message": "User deleted successfully",
  "timestamp": "2024-02-20T10:30:00Z"
}
```

---

## 📅 Reuniones Module (TODO)

### Get All Reuniones
```
GET /reuniones
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "message": "Reuniones retrieved successfully",
  "data": [ ... ],
  "timestamp": "..."
}
```

### Create Reunión
```
POST /reuniones
Authorization: Bearer <token>

{
  "title": "Reunión de Seguridad",
  "description": "Discusión sobre protocolos de seguridad",
  "date": "2024-03-01T10:00:00Z",
  "location": "Playa Central",
  "attendees": ["user1-id", "user2-id"]
}

Response (201):
{ ... }
```

### Get Reunión by ID
```
GET /reuniones/:id
Authorization: Bearer <token>

Response (200):
{ ... }
```

### Update Reunión
```
PUT /reuniones/:id
Authorization: Bearer <token>

{ ... }

Response (200):
{ ... }
```

### Delete Reunión
```
DELETE /reuniones/:id
Authorization: Bearer <token>
Roles: [admin, creator]

Response (200):
{ ... }
```

---

## 🎉 Eventos Module (TODO)

### Get All Eventos
```
GET /eventos
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "message": "Eventos retrieved successfully",
  "data": [ ... ],
  "timestamp": "..."
}
```

### Create Evento
```
POST /eventos
Authorization: Bearer <token>

{
  "title": "Evento de Salvavidas",
  "description": "Competencia de natación",
  "date": "2024-03-15T09:00:00Z",
  "location": "Playa Central",
  "status": "pending",
  "participants": ["user1-id"],
  "responsible": "user2-id"
}

Response (201):
{ ... }
```

### Get Evento by ID
```
GET /eventos/:id
Authorization: Bearer <token>

Response (200):
{ ... }
```

### Update Evento
```
PUT /eventos/:id
Authorization: Bearer <token>

{ ... }

Response (200):
{ ... }
```

### Delete Evento
```
DELETE /eventos/:id
Authorization: Bearer <token>

Response (200):
{ ... }
```

---

## 📊 Reportes Module (TODO)

### Get All Reportes
```
GET /reportes
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "data": [ ... ],
  "timestamp": "..."
}
```

### Create Reporte
```
POST /reportes
Authorization: Bearer <token>

{
  "title": "Reporte de Actividad",
  "content": "Descripción del reporte",
  "type": "incident|activity|summary",
  "date": "2024-02-20T10:00:00Z",
  "assignedTo": "user-id",
  "status": "draft"
}

Response (201):
{ ... }
```

### Get Reporte by ID
```
GET /reportes/:id
Authorization: Bearer <token>

Response (200):
{ ... }
```

### Update Reporte
```
PUT /reportes/:id
Authorization: Bearer <token>

{ ... }

Response (200):
{ ... }
```

### Submit Reporte
```
PATCH /reportes/:id/submit
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "message": "Report submitted successfully",
  "data": { "status": "submitted" },
  "timestamp": "..."
}
```

### Delete Reporte
```
DELETE /reportes/:id
Authorization: Bearer <token>

Response (200):
{ ... }
```

---

## 🎬 Multimedia Module (TODO)

### Upload File
```
POST /multimedia/upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

Form Data:
- file: <file>
- description: "Descripción"
- type: "image|video|document"

Response (201):
{
  "statusCode": 201,
  "message": "File uploaded successfully",
  "data": {
    "id": "...",
    "filename": "...",
    "url": "/files/...",
    "type": "image",
    "uploadedBy": "user-id",
    "uploadedAt": "..."
  },
  "timestamp": "..."
}
```

### Get All Files
```
GET /multimedia
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "data": [ ... ],
  "timestamp": "..."
}
```

### Get File by ID
```
GET /multimedia/:id
Authorization: Bearer <token>

Response (200):
{ ... }
```

### Delete File
```
DELETE /multimedia/:id
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "message": "File deleted successfully",
  "timestamp": "..."
}
```

### Download File
```
GET /multimedia/:id/download
Authorization: Bearer <token>

Response (200):
<binary file data>
```

---

## Galería Module (TODO)

### Get All Images
```
GET /galeria
Authorization: Bearer <token>

Response (200):
{
  "statusCode": 200,
  "data": [ ... ],
  "timestamp": "..."
}
```

### Upload Image
```
POST /galeria/upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

Response (201):
{ ... }
```

---

## Error Responses

### 400 Bad Request
```json
{
  "statusCode": 400,
  "timestamp": "2024-02-20T10:30:00Z",
  "path": "/auth/login",
  "error": "Bad Request",
  "message": "Validation failed"
}
```

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "timestamp": "2024-02-20T10:30:00Z",
  "path": "/users",
  "error": "Unauthorized",
  "message": "No token provided"
}
```

### 403 Forbidden
```json
{
  "statusCode": 403,
  "timestamp": "2024-02-20T10:30:00Z",
  "path": "/users/delete",
  "error": "Forbidden",
  "message": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "timestamp": "2024-02-20T10:30:00Z",
  "path": "/users/invalid-id",
  "error": "Not Found",
  "message": "User not found"
}
```

### 500 Internal Server Error
```json
{
  "statusCode": 500,
  "timestamp": "2024-02-20T10:30:00Z",
  "path": "/users",
  "error": "Internal Server Error",
  "message": "An unexpected error occurred"
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Solicitud exitosa |
| 201 | Created - Recurso creado |
| 204 | No Content - Sin contenido |
| 400 | Bad Request - Solicitud inválida |
| 401 | Unauthorized - No autenticado |
| 403 | Forbidden - Sin permisos |
| 404 | Not Found - No encontrado |
| 409 | Conflict - Conflicto (ej: email duplicado) |
| 500 | Server Error - Error del servidor |

---

## User Roles

- **ADMIN** - Acceso total a todo
- **SUPERVISOR** - Puede gestionar usuarios y reportes
- **LIFEGUARD** - Acceso básico a su información
- **USER** - Acceso limitado (visitantes)

---

## Ejemplos con cURL

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Get Users
```bash
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Create User
```bash
curl -X POST http://localhost:3000/users \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"email":"new@example.com","firstName":"John","lastName":"Doe","role":"lifeguard"}'
```

---

## Variables de Entorno para Testing

```bash
# .env.test
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=salvavidas_test
JWT_SECRET=test-secret-key
NODE_ENV=test
```

---

Más endpoints serán agregados conforme se desarrollen los módulos restantes.
