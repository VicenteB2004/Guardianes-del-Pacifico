# 🚀 Quick Start - Salvavidas Project

Guía rápida para iniciar el desarrollo del proyecto Salvavidas.

## Requisitos Previos

- Node.js 18+ 
- NPM 9+
- PostgreSQL 12+ (instalado y corriendo)
- Git

## Instalación Rápida (5 minutos)

### 1️⃣ Backend Setup

```bash
# Navegar a la carpeta del backend
cd Backend/salvavidas

# Las variables de entorno ya están configuradas en .env
# Solo instala las dependencias (ya está hecho)
npm install

# Iniciar servidor en modo desarrollo
npm run start:dev
```

**Backend está listo en:** `http://localhost:3000`

### 2️⃣ Frontend Setup

En otra terminal:

```bash
# Navegar a la carpeta del frontend
cd frontend/salvavidas

# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo
npm start
```

**Frontend está listo en:** `http://localhost:4200`

## Primeros Pasos Después de Instalar

### 1. Probar Endpoints de Auth

Abre Postman o similar y prueba:

```bash
# Login (sin credencial pasa)
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

### 2. Ver Estructura

```bash
# Backend
Backend/salvavidas/src/
- /auth      → Controladores de autenticación
- /users     → Gestión de usuarios  
- /common    → Guards, decorators, filters, interceptors
- /config    → Configuración DB y JWT

# Frontend
frontend/salvavidas/src/app/
- /auth      → Componentes de login/registro
- /core      → AuthService, BaseService, Guards
- /shared    → Componentes reutilizables
```

### 3. Crear tu Primer Módulo Feature

```bash
# Backend
nest generate module nuevaFeature
nest generate controller nuevaFeature
nest generate service nuevaFeature

# Frontend  
ng generate module nuevaFeature --routing
ng generate component nuevaFeature/componentes/miComponente --module=nuevaFeature
```

## Estructura de Carpetas

```
Guardianes del Pacifico/
├── Backend/
│   └── salvavidas/
│       ├── src/
│       │   ├── auth/
│       │   ├── users/
│       │   ├── common/
│       │   │   ├── guards/jwt.guard.ts
│       │   │   ├── decorators/@Public()
│       │   │   ├── interceptors/logging
│       │   │   ├── filters/http-exception
│       │   │   └── enums/interfaces/entities
│       │   ├── config/
│       │   │   ├── typeorm.config.ts
│       │   │   └── jwt.config.ts
│       │   └── main.ts
│       ├── .env.example
│       └── package.json
│
├── frontend/
│   └── salvavidas/
│       ├── src/app/
│       │   ├── auth/
│       │   │   ├── login/
│       │   │   └── register/
│       │   ├── core/
│       │   │   ├── services/
│       │   │   ├── guards/
│       │   │   ├── interceptors/
│       │   │   └── models/
│       │   ├── shared/
│       │   │   ├── navbar/
│       │   │   ├── footer/
│       │   │   └── button/
│       │   └── [otros módulos]
│       ├── angular.json
│       └── package.json
│
├── SETUP.md (Guía completa)
└── CHECKLIST.md (Lista de lo que está listo)
```

## Comandos Útiles

### Backend (NestJS)

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod

# Tests
npm run test
npm run test:e2e

# Generar componentes
nest generate module nombre
nest generate controller nombre
nest generate service nombre
nest generate guard nombre
nest generate decorator nombre
```

### Frontend (Angular)

```bash
# Desarrollo
ng serve
ng serve --open  # Abre automáticamente

# Build
ng build
ng build --configuration production

# Tests
ng test
ng e2e

# Generar componentes
ng generate component nombre
ng generate service nombre  
ng generate guard nombre
ng generate module nombre
```

## Archivos Importantes

### Backend

| Archivo | Uso |
|---------|-----|
| `.env` | Variables de entorno (crear desde .env.example) |
| `src/main.ts` | Punto de entrada |
| `src/app.module.ts` | Módulo raíz |
| `src/common/` | Utilidades compartidas |
| `src/config/` | Configuración |
| `src/auth/` | Autenticación |

### Frontend

| Archivo | Uso |
|---------|-----|
| `src/main.ts` | Punto de entrada |
| `src/app/app.config.ts` | Configuración de la app |
| `src/app/app.routes.ts` | Rutas de la aplicación |
| `src/app/core/services/auth.ts` | AuthService |
| `src/app/core/models/index.ts` | Interfaces |

## Próximos Pasos

1. **Familiarizarse con la estructura**
   - Explorar `Backend/salvavidas/src/`
   - Explorar `frontend/salvavidas/src/app/`

2. **Completar autenticación**
   - Implementar User Entity
   - Agregar validaciones
   - Completar formularios

3. **Crear modelos de datos**
   - Crear entities para reuniones, eventos, reportes
   - Crear DTOs para validación

4. **Implementar módulos feature**
   - Crear lógica de negocio
   - Crear componentes UI
   - Conectar servicios

## Troubleshooting

### Error: "Cannot find module @nestjs/..."
```bash
cd Backend/salvavidas
npm install
```

### Error: "ng command not found"
```bash
npm install -g @angular/cli
cd frontend/salvavidas
npm install
```

### Puerto 3000 ya está en uso
```bash
# Cambiar puerto en .env del backend
PORT=3001
```

### Puerto 4200 ya está en uso
```bash
ng serve --port 4201
```

## Documentación

- **SETUP.md** - Guía detallada de configuración
- **CHECKLIST.md** - Estado de la estructura
- **Backend/salvavidas/README.md** - Documentación backend
- **frontend/salvavidas/README.md** - Documentación frontend

## Soporte y Recursos

- [NestJS Docs](https://docs.nestjs.com)
- [Angular Docs](https://angular.io/docs)
- [TypeORM Docs](https://typeorm.io)
- [JWT.io](https://jwt.io)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

---

¡Listo para empezar! Si tienes dudas, revisa los archivos README de cada proyecto. 🚀
