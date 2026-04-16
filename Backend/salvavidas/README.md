# Backend - Salvavidas API

API REST para sistema de gestión de salvavidas con NestJS 10+

## Estructura del Proyecto

```
/src
├── /auth                 - Módulo de autenticación
│   ├── auth.controller.ts    - Endpoints de auth
│   ├── auth.service.ts       - Lógica de autenticación
│   ├── auth.module.ts        - Módulo que importa JwtModule
│   └── auth.service.spec.ts  - Tests
├── /users               - Módulo de gestión de usuarios
│   ├── users.controller.ts   - Endpoints de usuarios
│   ├── users.service.ts      - Servicios de usuario
│   ├── users.module.ts       - Módulo
│   └── entities/users.entity.ts (TODO)
├── /reuniones           - Módulo de reuniones
├── /eventos            - Módulo de eventos
├── /reportes           - Módulo de reportes
├── /multimedia         - Módulo de multimedia
├── /common             - Utilidades compartidas
│   ├── /guards
│   │   └── jwt.guard.ts      - JWT authentication guard
│   ├── /decorators
│   │   └── public.decorator.ts - Marca rutas públicas
│   ├── /interceptors
│   │   └── logging.interceptor.ts - Request/response logging
│   ├── /filters
│   │   └── http-exception.filter.ts - Manejo de excepciones
│   ├── /enums
│   │   └── index.ts          - Enumeraciones (UserRole, EventStatus)
│   ├── /interfaces
│   │   └── index.ts          - Interfaces (IResponse, IUser, IJwtPayload)
│   └── /entities
│       └── base.entity.ts    - BaseEntity para TypeORM
├── /config              - Configuración
│   ├── typeorm.config.ts    - Configuración de base de datos
│   └── jwt.config.ts        - Configuración de JWT
├── app.module.ts        - Módulo principal
├── app.controller.ts    - Controlador raíz
├── app.service.ts       - Servicio raíz
├── main.ts              - Punto de entrada
└── .env.example         - Variables de entorno
```

## Configuración Inicial

### 1. Crear archivo .env

```bash
cp .env.example .env
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar en desarrollo

```bash
npm run start:dev
```

El servidor correrá en `http://localhost:3000`

## Módulos y Servicios

### Auth Module
Maneja la autenticación con JWT.

**Endpoints:**
- `POST /auth/login` - Login usuario
- `POST /auth/register` - Registrar nuevo usuario
- `POST /auth/refresh` - Refrescar access token

**Servicios:**
- `AuthService.login()` - Genera JWT tokens
- `AuthService.validateToken()` - Valida un token
- `AuthService.refreshToken()` - Refresca acceso

### Users Module
Gestión de usuarios.

**Endpoints (TODO):**
- `GET /users` - Listar usuarios
- `GET /users/:id` - Obtener usuario
- `POST /users` - Crear usuario
- `PUT /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

## Utilidades Compartidas (Common)

### Guards
- **JwtGuard**: Valida JWT en peticiones protegidas
  - Lee token del header `Authorization: Bearer <token>`
  - Respeta decorador `@Public()` para rutas públicas

### Decorators
- **@Public()**: Marca una ruta como pública (sin autenticación requerida)

```typescript
@Post('login')
@Public()
async login() { }
```

### Interceptors
- **LoggingInterceptor**: Registra todas las peticiones y respuestas

### Filters
- **HttpExceptionFilter**: Maneja excepciones HTTP con formato estándar

```json
{
  "statusCode": 401,
  "timestamp": "2024-02-20T10:30:00",
  "path": "/api/protected",
  "error": "Unauthorized",
  "message": "No token provided"
}
```

### Enums
- `UserRole` - ADMIN, LIFEGUARD, SUPERVISOR, USER
- `EventStatus` - PENDING, ACTIVE, COMPLETED, CANCELLED
- `ReportStatus` - DRAFT, SUBMITTED, REVIEWED, APPROVED, REJECTED

### Interfaces
- `IResponse<T>` - Response estándar
- `IUser` - Estructura de usuario
- `IJwtPayload` - Payload del JWT

### Entities
- `BaseEntity` - Entidad base con id, createdAt, updatedAt

## Cómo Implementar un Nuevo Módulo

### 1. Crear el módulo con NestJS CLI

```bash
nest generate module features
nest generate service features
nest generate controller features
```

### 2. Crear entidad (en `features/entities/feature.entity.ts`)

```typescript
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@Entity('features')
export class Feature extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
```

### 3. Crear DTO (en `features/dto/`)

```typescript
export class CreateFeatureDto {
  name: string;
  description: string;
}
```

### 4. Implementar servicio

```typescript
@Injectable()
export class FeaturesService {
  constructor(
    @InjectRepository(Feature)
    private featureRepository: Repository<Feature>
  ) {}

  async create(data: CreateFeatureDto) {
    return this.featureRepository.save(data);
  }

  async findAll() {
    return this.featureRepository.find();
  }
}
```

### 5. Implementar controlador

```typescript
@Controller('features')
export class FeaturesController {
  constructor(private readonly featureService: FeaturesService) {}

  @Get()
  findAll() {
    return this.featureService.findAll();
  }

  @Post()
  create(@Body() data: CreateFeatureDto) {
    return this.featureService.create(data);
  }
}
```

### 6. Registrar en app.module.ts

El módulo se importa automáticamente.

## Gestión de Base de Datos

### Configuración TypeORM
Está configurado en `src/config/typeorm.config.ts` con:
- PostgreSQL como BD
- Sincronización automática en desarrollo (`synchronize: true`)
- Logging de queries en desarrollo

### Crear Migraciones (TODO)

```bash
npm run typeorm migration:create src/migrations/CreateUsersTable
npm run typeorm migration:run
```

## Seguridad

- ✅ JWT Guard en rutas protegidas
- ✅ Decorador @Public() para rutas públicas
- ✅ Validación de tokens
- ✅ Refresh tokens
- ❌ Bcrypt para passwords (implementar)
- ❌ Rate limiting (implementar)
- ❌ CORS configurado (implementar)

## Scripts Disponibles

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod

# Tests
npm run test
npm run test:e2e
npm run test:cov

# TypeORM
npm run typeorm migration:create
npm run typeorm migration:run
npm run typeorm migration:revert
```

## Próximos Pasos

- [ ] Implementar User Entity y Repository
- [ ] Crear DTOs para validación
- [ ] Implementar Bcrypt para password hashing
- [ ] Implementar Swagger/OpenAPI
- [ ] Agregar class-validator para validaciones
- [ ] Crear migraciones de BD
- [ ] Implementar CORS en main.ts
- [ ] Agregar rate limiting
- [ ] Configurar logging global
- [ ] Implementar manejo de errores personalizado

## Recursos

- [NestJS Documentation](https://docs.nestjs.com)
- [TypeORM Documentation](https://typeorm.io)
- [JWT.io](https://jwt.io)
- [PostgreSQL](https://www.postgresql.org)
