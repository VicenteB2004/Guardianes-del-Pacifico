/**
 * Utilidades para animaciones dinámicas
 * Proporciona funciones para crear efectos suave y profesionales
 */

export class AnimationUtils {
  /**
   * Anima la entrada de un elemento con efecto slide
   */
  static animateSlideIn(element: HTMLElement, duration: number = 500): void {
    element.style.animation = `slideInUp ${duration}ms ease-out forwards`;
  }

  /**
   * Anima la salida de un elemento con efecto fade
   */
  static animateFadeOut(element: HTMLElement, duration: number = 300): void {
    element.style.animation = `fadeOut ${duration}ms ease-out forwards`;
  }

  /**
   * Agrega efecto de pulso a un elemento
   */
  static addPulseEffect(element: HTMLElement): void {
    element.style.animation = 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite';
  }

  /**
   * Agrega efecto de bounce a un elemento
   */
  static addBounceEffect(element: HTMLElement): void {
    element.style.animation = 'bounce 0.6s ease-in-out';
  }

  /**
   * Toggle clase de animación
   */
  static toggleAnimation(element: HTMLElement, animationName: string): void {
    element.classList.toggle(animationName);
  }

  /**
   * Espera a que termine una animación
   */
  static onAnimationEnd(
    element: HTMLElement,
    callback: () => void
  ): void {
    const handler = () => {
      callback();
      element.removeEventListener('animationend', handler);
    };
    element.addEventListener('animationend', handler);
  }

  /**
   * Crea un efecto ripple al hacer click
   */
  static createRippleEffect(event: MouseEvent, element: HTMLElement): void {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple-animation 0.6s ease-out';

    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }

  /**
   * Anima un contador numérico
   */
  static animateCounter(
    element: HTMLElement,
    targetValue: number,
    duration: number = 1000
  ): void {
    const start = parseInt(element.textContent || '0', 10);
    const range = targetValue - start;
    const increment = range / (duration / 16);
    let current = start;

    const interval = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= targetValue) ||
          (increment < 0 && current <= targetValue)) {
        current = targetValue;
        clearInterval(interval);
      }
      element.textContent = Math.floor(current).toString();
    }, 16);
  }

  /**
   * Suaviza el scroll
   */
  static smoothScroll(targetId: string): void {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Crea un efecto de transición de color
   */
  static transitionColor(
    element: HTMLElement,
    fromColor: string,
    toColor: string,
    duration: number = 500
  ): void {
    element.style.transition = `color ${duration}ms ease-in-out`;
    element.style.color = fromColor;
    setTimeout(() => {
      element.style.color = toColor;
    }, 10);
  }

  /**
   * Efecto de carga con spinner
   */
  static createLoadingSpinner(): HTMLElement {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinner.style.position = 'fixed';
    spinner.style.top = '50%';
    spinner.style.left = '50%';
    spinner.style.transform = 'translate(-50%, -50%)';
    spinner.style.zIndex = '9999';
    return spinner;
  }

  /**
   * Muestra notificación con animación
   */
  static showNotification(
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info',
    duration: number = 3000
  ): void {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = `notification notification-${type}`;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '16px 20px';
    notification.style.borderRadius = '8px';
    notification.style.zIndex = '9999';
    notification.style.animation = 'slideInUp 0.4s ease-out';
    notification.style.color = 'white';
    notification.style.fontWeight = '500';

    const colorMap = {
      success: '#27AE60',
      error: '#E74C3C',
      info: '#0077B6',
      warning: '#F39C12',
    };

    notification.style.backgroundColor = colorMap[type];
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }

  /**
   * Pausa la ejecución de forma asíncrona
   */
  static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/**
 * Decorador para agregar animación a métodos
 */
export function WithAnimation(duration: number = 500) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const element = args[0] as HTMLElement;
      if (element) {
        AnimationUtils.animateSlideIn(element, duration);
      }
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
