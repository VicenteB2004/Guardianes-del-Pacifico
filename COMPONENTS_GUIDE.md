# 📚 Guía de Componentes - Salvavidas UI

## Cómo usar los componentes creados

### 1. Card Component

El componente `CardComponent` es reutilizable y muestra métricas de forma profesional.

**Uso:**
```html
<app-card 
  icon="📊"
  title="Incidentes Hoy"
  value="5"
  subtitle="En las últimas 24 horas"
  accentColor="danger"
  badge="crítico">
  <!-- Contenido adicional opcional -->
  <p>Información extra</p>
</app-card>
```

**Propiedades:**
- `icon` (string): Emoji o icono a mostrar
- `title` (string): Título de la tarjeta
- `value` (string | number): Valor prominente
- `subtitle` (string): Texto descriptivo
- `accentColor` (string): 'primary' | 'success' | 'warning' | 'danger'
- `badge` (string): Badge opcional con estilo automático

**Ejemplos de colores:**
```typescript
// Verde para estados positivos
[accentColor]="'success'"

// Rojo para alertas
[accentColor]="'danger'"

// Amarillo para advertencias
[accentColor]="'warning'"

// Azul para información
[accentColor]="'primary'"
```

---

### 2. Layout Component

Contenedor principal de toda la aplicación. Maneja el estado del sidebar.

**Uso:**
```typescript
// En app.routes.ts (ya configurado)
{
  path: '',
  component: LayoutComponent,
  children: [
    // Tus rutas aquí
  ],
}
```

**No es necesario importar en otras partes**, se usa automáticamente como layout principal.

---

### 3. Header Component

Barra superior con logo, usuario y controles.

**Características:**
- Botón de menú (toggle sidebar)
- Avatar del usuario
- Información del usuario
- Botón de logout

**Para cambiar la información del usuario:**
```typescript
// En header.component.ts, actualizar:
onLogout(): void {
  // Tu lógica de logout
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  // Redirigir a login
}
```

---

### 4. Sidebar Component

Menú de navegación lateral.

**Rutas configuradas:**
- `/dashboard` - Dashboard principal
- `/reuniones` - Gestión de reuniones
- `/calendario` - Calendario de eventos
- `/reportes` - Reportes
- `/galeria` - Galería de fotos
- `/estadisticas` - Estadísticas
- `/usuarios` - Gestión de usuarios
- `/configuracion` - Configuración

**Para agregar más rutas:**
1. Agregar en `sidebar.component.ts` (array `menuItems`)
2. Crear el componente correspondiente
3. Agregar la ruta en `app.routes.ts`

---

### 5. Home Component (Dashboard)

Página principal con métricas y estadísticas.

**Secciones:**
1. **Welcome Section** - Bienvenida y botones de acción rápida
2. **Metrics Grid** - 6 tarjetas con métricas principales
3. **Incidents Table** - Tabla de incidentes recientes

**Para actualizar métricas dinámicamente:**
```typescript
// En home.component.ts
metrics = signal<DashboardMetric[]>([
  // Reemplazar con datos del backend
]);

recentIncidents = signal([
  // Reemplazar con datos del backend
]);
```

---

## 🎨 Tokens CSS Disponibles

Todas las variables CSS están definidas en `src/styles.css`:

```css
--primary-dark: #0A1F44;
--primary-ocean: #0077B6;
--white: #FFFFFF;
--gray-light: #F1F5F9;
--gray-medium: #E2E8F0;
--gray-dark: #64748B;
--alert-orange: #F77F00;
--success-green: #27AE60;
--warning-yellow: #F39C12;

--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;

--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🎯 Clases Utilitarias

Clases base disponibles en `styles.css` para usar en HTML:

```html
<!-- Flexbox -->
<div class="flex">...</div>
<div class="flex-center">...</div>
<div class="flex-between">...</div>

<!-- Gaps -->
<div class="gap-1">...</div> <!-- 0.5rem -->
<div class="gap-2">...</div> <!-- 1rem -->
<div class="gap-3">...</div> <!-- 1.5rem -->
<div class="gap-4">...</div> <!-- 2rem -->

<!-- Margins -->
<div class="mt-1">...</div>  <!-- margin-top: 0.5rem -->
<div class="mt-2">...</div>  <!-- margin-top: 1rem -->
<div class="mb-2">...</div>  <!-- margin-bottom: 1rem -->

<!-- Text -->
<p class="text-muted">...</p>
<p class="text-small">...</p>

<!-- Botones -->
<button class="btn btn-primary">Primario</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-danger">Peligro</button>
<button class="btn btn-sm">Pequeño</button>
<button class="btn btn-lg">Grande</button>
```

---

## 📱 Media Queries por Breakpoint

- **Mobile:** `max-width: 480px`
- **Tablet:** `max-width: 768px`
- **Desktop:** `max-width: 1024px`

Todos los componentes tienen estilos responsive incluidos.

---

## ✅ Checklist para nuevas páginas

Cuando crees una nueva página/componente:

1. ✅ Crear carpeta en `src/app/{modulo}/{pagina}/`
2. ✅ Crear `.ts`, `.html`, y `.css`
3. ✅ Usar `standalone: true` con `imports: [CommonModule, ...]`
4. ✅ Importar componentes compartidos (`CardComponent`, etc.)
5. ✅ Agregar ruta en `app.routes.ts`
6. ✅ Agregar opción en `sidebar.component.ts` si es necesario
7. ✅ Usar clases y variables CSS existentes
8. ✅ Probar responsive en mobile

---

## 🔗 Conexión Backend

Los servicios de backend ya están configurados:

- `BaseService` - Cliente HTTP base con todas las operaciones CRUD
- `AuthService` - Autenticación y gestión de sesión
- JWT interceptor - Agrega tokens automáticamente
- `environment.ts` - URL de API configurable

Para conectar una nueva página al backend:

```typescript
import { BaseService } from '../../core/services/base';

constructor(private apiService: BaseService) {}

// GET
this.apiService.get<Datos>('/endpoint').subscribe(data => {
  // Usar datos
});

// POST
this.apiService.post<Response>('/endpoint', datos).subscribe();

// PUT
this.apiService.put<Response>('/endpoint/id', datos).subscribe();

// DELETE
this.apiService.delete<Response>('/endpoint/id').subscribe();
```

---

**Última actualización:** 21 de Febrero 2026
