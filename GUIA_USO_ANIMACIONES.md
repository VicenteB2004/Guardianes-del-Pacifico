# 🎨 Guía de Uso - Sistema de Animaciones y Notificaciones

## 📋 Tabla de Contenidos
1. [Notificaciones](#notificaciones)
2. [Animaciones](#animaciones)
3. [Efectos Visuales](#efectos-visuales)
4. [Ejemplos Prácticos](#ejemplos-prácticos)

---

## 📢 Notificaciones

### Inyectar el servicio:
```typescript
import { NotificationService } from '../core/services/notification.service';

@Component({...})
export class MiComponente {
  constructor(private notificationService: NotificationService) {}
}

// O usando inject:
private notificationService = inject(NotificationService);
```

### Mostrar Notificaciones:

#### ✅ Éxito
```typescript
this.notificationService.success('Usuario guardado correctamente');
this.notificationService.success('Operación completada', 4000); // Duración custom
```

#### ❌ Error
```typescript
this.notificationService.error('Error al guardar el usuario');
this.notificationService.error('Falló la conexión', 5000);
```

#### ⚠️ Advertencia
```typescript
this.notificationService.warning('Por favor revise los datos');
this.notificationService.warning('Esta acción no se puede deshacer', 6000);
```

#### ℹ️ Información
```typescript
this.notificationService.info('Se actualizó la información');
this.notificationService.info('Sincronizando...', 3000);
```

### Notificaciones Automáticas en CRUD:

**Crédito fácil en actualización:**
```typescript
guardarUsuario() {
  const id = this.editandoId();
  if (id) {
    this.usuarios.set(usuariosActualizados);
    this.notificationService.success('Usuario actualizado correctamente');
  } else {
    this.usuarios.set([...this.usuarios(), nuevoUsuario]);
    this.notificationService.success('Usuario creado exitosamente');
  }
  this.modalAbierto.set(false);
}

eliminarUsuario(id: number) {
  if (confirm('¿Estás seguro?')) {
    this.usuarios.set(this.usuarios().filter(u => u.id !== id));
    this.notificationService.success('Usuario eliminado correctamente');
  }
}
```

---

## 🎬 Animaciones

### Importar Utilidades:
```typescript
import { AnimationUtils } from '../core/animations/animations';
import { VisualEffects } from '../core/animations/visual-effects';
```

### AnimationUtils - Utilidades Básicas:

#### 1. Animar entrada de elemento
```typescript
const elemento = document.getElementById('mi-elemento');
AnimationUtils.animateSlideIn(elemento, 500);  // 500ms
```

#### 2. Agregar efecto de pulso
```typescript
const elemento = document.querySelector('.stat-card');
AnimationUtils.addPulseEffect(elemento);
```

#### 3. Agregar efecto de bounce
```typescript
const botón = document.querySelector('.btn-importante');
AnimationUtils.addBounceEffect(botón);
```

#### 4. Esperar a que termine una animación
```typescript
AnimationUtils.onAnimationEnd(elemento, () => {
  console.log('Animación completada');
  // Ejecutar código después
});
```

#### 5. Crear efecto ripple (Material Design)
```typescript
elemento.addEventListener('click', (e) => {
  AnimationUtils.createRippleEffect(e, elemento);
});
```

#### 6. Animar contador
```typescript
const contador = document.querySelector('.numero');
AnimationUtils.animateCounter(contador, 100, 2000);  // De 0 a 100 en 2s
```

#### 7. Scroll suave
```typescript
AnimationUtils.smoothScroll('seccion-objetivo');
```

#### 8. Transición de color
```typescript
AnimationUtils.transitionColor(
  elemento,
  '#0077B6',  // Color inicial
  '#27AE60',  // Color final
  500         // Duración
);
```

#### 9. Mostrar notificación con animación
```typescript
AnimationUtils.showNotification(
  'Cambios guardados',
  'success',
  3000
);
```

---

## 🌟 Efectos Visuales

### VisualEffects - Efectos Avanzados:

#### 1. Crear confeti (celebración)
```typescript
// En el centro de la pantalla
VisualEffects.createConfetti();

// En posición específica
VisualEffects.createConfetti(x, y);

// Usar en evento
elemento.addEventListener('click', () => {
  const rect = elemento.getBoundingClientRect();
  VisualEffects.createConfetti(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
  );
});
```

#### 2. Animar gradiente
```typescript
const elemento = document.querySelector('.header');
VisualEffects.animateGradient(elemento);
// Elemento debe tener background-image con gradiente
```

#### 3. Efecto glow (brillo)
```typescript
const card = document.querySelector('.importante');
VisualEffects.addGlowEffect(card);

// Con color personalizado
VisualEffects.addGlowEffect(card, '#27AE60');

// Remover después
setTimeout(() => {
  card.style.boxShadow = '';
}, 3000);
```

#### 4. Efecto shimmer (centelleo)
```typescript
const logo = document.querySelector('.logo');
VisualEffects.addShimmerEffect(logo);
```

#### 5. Efecto 3D hover
```typescript
const card = document.querySelector('.stat-card');
VisualEffects.add3DHoverEffect(card);
// El elemento se inclina al pasar el mouse
```

#### 6. Fade-in escalonado
```typescript
const elementos = document.querySelectorAll('.activity-item');
VisualEffects.staggeredFadeIn(
  Array.from(elementos),
  100  // Delay entre elementos en ms
);
```

#### 7. Crear ripple al click
```typescript
const boton = document.querySelector('.btn-ripple');
VisualEffects.createRippleOnClick(boton);
```

#### 8. Efecto parallax en scroll
```typescript
const elemento = document.querySelector('.parallax');
VisualEffects.addParallaxEffect(elemento, 0.5);  // Factor de velocidad
```

#### 9. Animar contador
```typescript
const numero = document.querySelector('.numero-grande');
VisualEffects.animateCounter(numero, 1000, 2000);  // Hasta 1000 en 2s
```

#### 10. Efecto de entrada con rotación
```typescript
const elemento = document.querySelector('.logo');
VisualEffects.rotateInEffect(elemento);
```

#### 11. Efecto zoom in
```typescript
const imagen = document.querySelector('img');
VisualEffects.zoomInEffect(imagen);
```

#### 12. Agregar clase con animación
```typescript
VisualEffects.addClassWithAnimation(
  elemento,
  'clase-importante',
  400
);
```

---

## 🎯 Observador de Intersección

Animar elementos cuando aparecen en viewport:

```typescript
import { IntersectionAnimationObserver } from '../core/animations/visual-effects';

export class MiComponente {
  ngAfterViewInit() {
    const observer = new IntersectionAnimationObserver('fade-in', 0.1);
    
    const elementos = document.querySelectorAll('.card');
    observer.observe(Array.from(elementos) as HTMLElement[]);
  }
}
```

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Dashboard con animaciones
```typescript
import { Component, AfterViewInit } from '@angular/core';
import { VisualEffects } from '../core/animations/visual-effects';

@Component({...})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Animar cards al entrar la página
    const cards = document.querySelectorAll('.stat-card');
    VisualEffects.staggeredFadeIn(
      Array.from(cards) as HTMLElement[],
      150
    );

    // Agregar 3D hover a cards
    cards.forEach(card => {
      VisualEffects.add3DHoverEffect(card as HTMLElement);
    });

    // Animar números
    const numeros = document.querySelectorAll('.stat-number');
    numeros.forEach(num => {
      const valor = parseInt((num as HTMLElement).textContent || '0');
      VisualEffects.animateCounter(num as HTMLElement, valor, 2000);
    });
  }
}
```

### Ejemplo 2: Lista de usuarios con animaciones
```typescript
guardarUsuario() {
  try {
    if (this.validarFormulario()) {
      // Lógica de guardado
      this.usuarios.set([...]);
      
      // Mostrar notificación
      this.notificationService.success('Usuario guardado');
      
      // Crear confeti
      VisualEffects.createConfetti(100, 100);
      
      this.modalAbierto.set(false);
    }
  } catch (error) {
    this.notificationService.error('Error al guardar');
  }
}
```

### Ejemplo 3: Botón con feedback visual
```typescript
<button (click)="procesarDatos()">
  <span class="material-icons-outlined">cloud_upload</span>
  Sincronizar
</button>

procesarDatos() {
  const boton = event.target as HTMLElement;
  
  // Efecto ripple
  VisualEffects.createRippleOnClick(event as any, boton);
  
  // Deshabilitar mientras procesa
  boton.disabled = true;
  
  // Simular procesamiento
  setTimeout(() => {
    boton.disabled = false;
    this.notificationService.success('Datos sincronizados');
  }, 2000);
}
```

### Ejemplo 4: Tabla con animaciones
```typescript
ngAfterViewInit() {
  const filas = document.querySelectorAll('table tbody tr');
  
  // Fade-in escalonado
  VisualEffects.staggeredFadeIn(
    Array.from(filas) as HTMLElement[],
    50
  );
  
  // Agregar hovers
  filas.forEach(fila => {
    fila.addEventListener('mouseenter', () => {
      (fila as HTMLElement).style.backgroundColor = 'rgba(0, 119, 182, 0.05)';
    });
    
    fila.addEventListener('mouseleave', () => {
      (fila as HTMLElement).style.backgroundColor = '';
    });
  });
}
```

### Ejemplo 5: Modal con animación
El modal ya tiene animaciones integradas en el CSS:
```css
app-modal::part(overlay) {
  animation: fadeIn 0.3s ease-out;
}

app-modal::part(modal) {
  animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 🎨 Animaciones CSS Disponibles

Puedes usar estas en cualquier elemento:

```css
.mi-elemento {
  animation: slideInUp 0.5s ease-out;    /* Entrada desde abajo */
  animation: fadeIn 0.3s ease-out;       /* Desvanecimiento */
  animation: scaleIn 0.4s ease-out;      /* Zoom entrada */
  animation: pulse 2s ease-in-out infinite;  /* Pulso continuo */
  animation: bounce 0.6s ease-in-out;    /* Rebote elegante */
  animation: iconRotate 2s linear infinite;  /* Rotación infinita */
  animation: slideInLeft 0.5s ease-out;  /* Entrada desde izquierda */
  animation: slideInRight 0.5s ease-out; /* Entrada desde derecha */
  animation: flip 0.6s ease-out;         /* Giro 360 grados */
  animation: shake 0.5s ease-in-out;     /* Vibración */
}
```

---

## 🚀 Tips de Rendimiento

1. **No animes demasiados elementos a la vez** - Limita a 5-10 simultáneamente
2. **Usa `will-change` para elementos animados**:
```css
.elemento-animado {
  will-change: transform, opacity;
}
```

3. **Desactiva animaciones en dispositivos de bajo rendimiento**:
```typescript
const prefiersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!prefiersReduced.matches) {
  // Aplicar animaciones
}
```

4. **Limpia animaciones cuando terminen**:
```typescript
elemento.addEventListener('animationend', () => {
  elemento.style.animation = '';
});
```

---

## 📱 Responsive

Las animaciones se adaptan automáticamente:

```css
@media (max-width: 768px) {
  /* Animaciones más sutiles en móvil */
  .card:hover {
    transform: translateY(-2px);  /* Menos elevación */
  }
}
```

---

## 🔗 Referencias

- [Material Icons](https://fonts.google.com/icons)
- [MDN Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Angular Animations](https://angular.io/guide/animations)

---

¡Tu aplicación ahora tiene capacidades de animación profesionales! 🎉
