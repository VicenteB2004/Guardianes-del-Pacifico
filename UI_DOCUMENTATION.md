# 🎨 Documentación de la Interfaz - Salvavidas San Clemente

## 📋 Estructura Creada

### Componentes Principales

#### 1. **Layout Component** (`shared/layout/`)
- Componente contenedor principal
- Maneja el estado del sidebar (abierto/cerrado)
- Contiene Header, Sidebar y router-outlet

#### 2. **Header Component** (`shared/header/`)
- Logo institucional y nombre del sistema
- Avatar del usuario con información
- Botón de menú para abrir/cerrar sidebar
- Botón de cerrar sesión

**Colores:**
- Fondo: `#0A1F44` (azul marino)
- Botones: Transparentes con rgba

#### 3. **Sidebar Component** (`shared/sidebar/`)
- Menú de navegación colapsable
- 8 opciones de navegación principales
- Badges para notificaciones
- Información de versión

**Menú incluido:**
- 📊 Dashboard
- 📅 Reuniones (con badge de notificaciones)
- 🗓️ Calendario
- 📈 Reportes
- 🖼️ Galería
- 📊 Estadísticas
- 👥 Usuarios
- ⚙️ Configuración

#### 4. **Card Component** (`shared/card/`)
Componente reutilizable para mostrar métricas con:
- Línea lateral de color (4px)
- Icono grande
- Valor destacado
- Subtítulo descriptivo
- Badge opcional
- Efectos hover

**Colores de acento disponibles:**
- `primary` - Azul océano
- `success` - Verde
- `warning` - Amarillo
- `danger` - Naranja alerta

#### 5. **Home Component** (`dashboard/home/`)
Dashboard principal con:
- Sección de bienvenida con botones de acción rápida
- Grid de 6 tarjetas de métricas
- Tabla de incidentes recientes
- Información en tiempo real

**Métricas mostradas:**
1. Incidentes hoy
2. Próxima reunión
3. Estado del mar
4. Salvavidas en guardia
5. Rescates del mes
6. Tiempo promedio de respuesta

---

## 🎨 Paleta de Colores

| Nombre | Código | Uso |
|--------|--------|-----|
| Azul Marino | `#0A1F44` | Sidebar, header, texto principal |
| Azul Océano | `#0077B6` | Botones, acentos, links |
| Blanco | `#FFFFFF` | Fondos principales |
| Gris Claro | `#F1F5F9` | Fondos secundarios |
| Gris Oscuro | `#64748B` | Texto secundario |
| Naranja Alerta | `#F77F00` | Incidentes críticos |
| Verde Éxito | `#27AE60` | Estados positivos |
| Amarillo Advertencia | `#F39C12` | Estados de advertencia |

---

## 📐 Tipografía

- **Familia:** Inter, Roboto
- **Títulos (h1):** 2rem, weight 600
- **Subtítulos (h2):** 1.5rem, weight 600
- **Párrafos:** 0.95rem, color gris oscuro
- **Métricas:** 2rem, weight 700

---

## 🎯 Características Responsive

### Desktop (>1024px)
- Sidebar visible permanentemente 260px
- Grid de 3 columnas para tarjetas
- Header con información completa del usuario

### Tablet (768px - 1024px)
- Grid adaptable a 2 columnas para tarjetas
- Sidebar con navegación completa
- Botones en tamaño optimizado

### Mobile (<768px)
- Sidebar se convierte en drawer deslizable
- Grid de 1 columna para tarjetas
- Header simplificado (sin nombre de usuario)
- Botones de acción a pantalla completa
- Menú hamburguesa activado

---

## 🔧 Interactividad

### Hover Effects
- **Tarjetas:** Elevan 4px con sombra aumentada
- **Botones:** Cambio de opacidad y sombra
- **Links del sidebar:** Cambio de fondo subtle

### Transiciones
- Todas las transiciones usan: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Animaciones suaves y profesionales

---

## 📁 Estructura de Archivos

```
src/app/
├── shared/
│   ├── layout/
│   │   ├── layout.component.ts
│   │   ├── layout.component.html
│   │   └── layout.component.css
│   ├── header/
│   │   ├── header.component.ts
│   │   ├── header.component.html
│   │   └── header.component.css
│   ├── sidebar/
│   │   ├── sidebar.component.ts
│   │   ├── sidebar.component.html
│   │   └── sidebar.component.css
│   └── card/
│       ├── card.component.ts
│       ├── card.component.html
│       └── card.component.css
├── dashboard/
│   └── home/
│       ├── home.component.ts
│       ├── home.component.html
│       └── home.component.css
├── app.ts
├── app.html
├── app.css
└── app.routes.ts
```

---

## 🚀 Próximos Pasos

1. **Agregar más páginas:**
   - Crear componentes para cada ruta del sidebar
   - Reemplazar los comentarios `TODO` en `app.routes.ts`

2. **Integración con backend:**
   - Conectar AuthService para obtener datos reales del usuario
   - Integrar llamadas API para métricas dinámicas

3. **PWA:**
   - Crear `manifest.json`
   - Agregar service worker
   - Optimizar assets para offline

4. **Mejoras UI:**
   - Agregar gráficos con Chart.js o ng-google-charts
   - Implementar notificaciones toast
   - Agregar modal dialogs

---

## 📝 Notas

- ✅ Diseño mobile-first implementado
- ✅ Accesibilidad (aria-labels en botones)
- ✅ Performance (standalone components)
- ✅ Código escalable y mantenible
- ✅ CSS moderno sin framework externo
- ✅ Variables CSS para fácil customización

---

**Versión:** 1.0.0  
**Última actualización:** 21 de Febrero 2026
