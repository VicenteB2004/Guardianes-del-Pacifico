# Salvavidas - Sistema de Gestión PWA

## Estructura del Proyecto

Sistema web fullstack para gestión de salvavidas con arquitectura modular y limpia.

### Frontend (Angular)
```
/src/app
├── /auth          - Módulo de autenticación (login, registro)
├── /dashboard     - Dashboard principal de la aplicación
├── /reuniones     - Gestión de reuniones
├── /eventos       - Gestión de eventos
├── /reportes      - Gestión de reportes
├── /galeria       - Galería de medios
├── /usuarios      - Gestión de usuarios
├── /core          - Servicios globales, guards, interceptors
└── /shared        - Componentes reutilizables
```

**Tecnologías:**
- Angular 19+
- PWA habilitado
- TypeScript
- RxJS

**Servicios Core:**
- `AuthService` - Gestión de autenticación
- `BaseService` - Servicio base para peticiones HTTP
- `AuthGuard` - Guard para proteger rutas
- `JwtInterceptor` - Interceptor para agregar JWT a peticiones

### Backend (NestJS)
```
/src
├── /auth         - Módulo de autenticación y autorización
├── /users        - Módulo de gestión de usuarios
├── /reuniones    - Módulo de reuniones
├── /eventos      - Módulo de eventos
├── /reportes     - Módulo de reportes
├── /multimedia   - Módulo de gestión de archivos
├── /common       - Utilidades compartidas
│   ├── /guards     - JWT Guard, otros guards
│   ├── /decorators - Decoradores personalizados (@Public, etc)
│   ├── /interceptors - Logging, otros interceptors
│   ├── /filters    - HTTP Exception Filter
│   ├── /enums      - Enumeraciones compartidas
│   ├── /interfaces - Interfaces y tipos
│   └── /entities   - BaseEntity para ORM
└── /config       - Configuración (TypeORM, JWT)
```

**Tecnologías:**
- NestJS 10+
- TypeORM
- PostgreSQL
- JWT (Passport Strategy)
- TypeScript

## Configuración Inicial

### Backend

1. **Duplicar archivo de configuración:**
```bash
cd Backend/salvavidas
cp .env.example .env
```

2. **Configurar variables de entorno (.env):**
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=salvavidas
JWT_SECRET=your-secret-key-here
```

3. **Instalar dependencias:**
```bash
npm install
```

4. **Ejecutar en desarrollo:**
```bash
npm run start:dev
```

El servidor estará disponible en `http://localhost:3000`

### Frontend

1. **Instalar dependencias:**
```bash
cd frontend/salvavidas
npm install
```

2. **Ejecutar en desarrollo:**
```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## Próximos Pasos de Desarrollo

### Backend
- [ ] Implementar User Entity y MigrationS
- [ ] Implementar estrategia JWT Passport
- [ ] Configurar CORS en main.ts
- [ ] Implementar validación con class-validator
- [ ] Especificar Swagger/OpenAPI
- [ ] Crear DTOs para cada módulo
- [ ] Implementar lógica de business de cada módulo

### Frontend
- [ ] Implementar AuthService completamente
- [ ] Crear formularios de login/registro
- [ ] Implementar rutas protegidas
- [ ] Crear layout base con navbar y footer
- [ ] Configurar interceptor JWT
- [ ] Crear servicios para cada módulo
- [ ] Implementar componentes de cada feature

## Estructura de Carpetas - Referencia Rápida

**backend/salvavidas/src:**
- `auth/` - Controllers, Services para autenticación
- `users/` - Entidades, servicios de usuarios
- `common/` - Guardianes, decoradores, filtros, interceptors
- `config/` - Configuración de conexión BD, JWT

**frontend/salvavidas/src/app:**
- `auth/` - Módulo con componentes de login/registro
- `core/` - Servicios singleton, guards, interceptors
- `shared/` - Componentes/pipes/directivas reutilizables
- Otros módulos - Feature modules independientes

## Convenciones de Código

### Backend (NestJS)
- Nombre de módulos: `feature.module.ts`
- Nombre de servicios: `feature.service.ts`
- Nombre de controladores: `feature.controller.ts`
- Nombre de DTOs: `create-feature.dto.ts`, `update-feature.dto.ts`
- Nombre de entidades: `feature.entity.ts`

### Frontend (Angular)
- Nombre de componentes: `component-name.ts`
- Nombre de servicios: `feature.service.ts`
- Nombre de guards: `feature.guard.ts`
- Nombre de interceptors: `feature.interceptor.ts`
- Nombre de módulos: `feature.module.ts`

## Notas Importantes

- ✅ La estructura PWA está habilitada en el frontend
- ✅ Dependencias de TypeORM y JWT están instaladas
- ✅ Estructura de guards, decoradores y filtros está lista
- ❌ Lógica de negocio pendiente de implementar
- ❌ Validaciones pendiente (necesita class-validator)
- ❌ Swagger/OpenAPI pendiente

## Recursos

- [Angular Docs](https://angular.io/docs)
- [NestJS Docs](https://docs.nestjs.com)
- [TypeORM Docs](https://typeorm.io)
- [JWT.io](https://jwt.io)
