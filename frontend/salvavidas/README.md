# Frontend - Salvavidas PWA

Sistema PWA para gestión de salvavidas con Angular 19+

## Estructura del Módulo App

```
/src/app
├── /auth              - Módulo de autenticación
│   ├── login/         - Componente de login
│   └── register/      - Componente de registro
├── /core              - Servicios globales y utilidades
│   ├── /services
│   │   ├── auth.ts    - AuthService (login, logout, tokens)
│   │   └── base.ts    - BaseService (HTTP requests)
│   ├── /guards
│   │   └── auth.guard.ts - Guard para rutas protegidas
│   ├── /interceptors
│   │   └── jwt-interceptor.ts - Interceptor para JWT
│   └── /models
│       └── index.ts - Interfaces (IUser, IAuthResponse, etc)
├── /shared            - Componentes reutilizables
│   ├── navbar/        - Componente de navegación
│   ├── footer/        - Componente de pie de página
│   └── button/        - Botón reutilizable
├── /dashboard         - Dashboard principal
├── /reuniones         - Gestión de reuniones
├── /eventos          - Gestión de eventos
├── /reportes         - Gestión de reportes
├── /galeria          - Galería de medios
└── /usuarios         - Gestión de usuarios
```

## Servicios Principales

### AuthService
Maneja la autenticación y tokens JWT.

```typescript
// Login
this.authService.login(email, password).subscribe(response => {
  console.log('Login exitoso', response);
});

// Check si está autenticado
this.authService.isAuthenticated().subscribe(isAuth => {
  console.log('Autenticado:', isAuth);
});

// Obtener usuario actual
this.authService.currentUser$.subscribe(user => {
  console.log('Usuario:', user);
});

// Logout
this.authService.logout();
```

### BaseService
Servicio base para peticiones HTTP (hereda en otros servicios).

```typescript
export class UsersService extends BaseService {
  getUsers(): Observable<IUser[]> {
    return this.get<IUser[]>('/users');
  }

  getUserById(id: string): Observable<IUser> {
    return this.get<IUser>(`/users/${id}`);
  }

  createUser(data: any): Observable<IUser> {
    return this.post<IUser>('/users', data);
  }
}
```

## PWA Features

La aplicación está configurada como PWA. Características:
- ✅ Offline support (con service worker)
- ✅ App manifest
- ✅ Responsive design
- ✅ Installable en dispositivos

## Configuración de Rutas (TODO)

Las rutas deben ser configuradas en `app.routes.ts`:

```typescript
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // Más rutas...
];
```

## Uso del JWT Interceptor

El interceptor `jwtInterceptor` se debe registrar en `app.config.ts`:

```typescript
import { jwtInterceptor } from './core/interceptors/jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    ),
    // ... otros providers
  ]
};
```

## Módulos Feature

Cada módulo feature (auth, dashboard, reuniones, etc) debe:
- Tener su propio routing
- Importar SharedModule para componentes comunes
- Crear servicios específicos heredando de BaseService
- Crear componentes específicos

## Próximos Pasos

- [ ] Completar componentes de auth (login, register)
- [ ] Implementar formularios reactivos
- [ ] Crear servicios para cada módulo
- [ ] Implementar lazy loading de rutas
- [ ] Crear guards adicionales si es necesario
- [ ] Implementar manejo de errores global
- [ ] Agregar validaciones
- [ ] Implementar notificaciones

## Scripts Disponibles

```bash
# Desarrollo
ng serve

# Build para producción
ng build --configuration production

# Ejecutar tests
ng test

# Build PWA
ng build --configuration production
```

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
