/**
 * Utilidades para efectos visuales avanzados
 * Proporciona funciones para crear efectos de partículas, gradientes dinámicos, etc.
 */

export class VisualEffects {
  /**
   * Crea efecto de confeti
   */
  static createConfetti(x?: number, y?: number): void {
    const colors = ['#0077B6', '#27AE60', '#F39C12', '#E74C3C'];
    const confettiCount = 50;
    const startX = x || window.innerWidth / 2;
    const startY = y || window.innerHeight / 2;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.left = startX + 'px';
      confetti.style.top = startY + 'px';
      confetti.style.width = Math.random() * 10 + 5 + 'px';
      confetti.style.height = confetti.style.width;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '10000';

      document.body.appendChild(confetti);

      const duration = Math.random() * 2 + 2;
      const angle = (Math.PI * 2 * i) / confettiCount;
      const velocity = Math.random() * 3 + 2;

      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;

      let cx = startX;
      let cy = startY;
      let time = 0;

      const animate = () => {
        time += 0.016;
        cx += vx;
        cy += vy + time * 0.5; // Gravedad

        confetti.style.left = cx + 'px';
        confetti.style.top = cy + 'px';
        confetti.style.opacity = (1 - time / duration).toString();

        if (time < duration) {
          requestAnimationFrame(animate);
        } else {
          confetti.remove();
        }
      };

      animate();
    }
  }

  /**
   * Crea efecto de gradient animado
   */
  static animateGradient(element: HTMLElement): void {
    const style = document.createElement('style');
    const animationName = 'gradient-animation-' + Math.random().toString(36).substr(2, 9);

    style.textContent = `
      @keyframes ${animationName} {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;

    document.head.appendChild(style);

    element.style.backgroundSize = '200% 200%';
    element.style.animation = `${animationName} 8s ease infinite`;
  }

  /**
   * Efecto glow alrededor de un elemento
   */
  static addGlowEffect(element: HTMLElement, color: string = '#0077B6'): void {
    element.style.boxShadow = `
      0 0 10px ${color},
      0 0 20px ${color},
      0 0 30px ${color},
      0 0 40px ${color}
    `;
    element.style.transition = 'box-shadow 0.3s ease-in-out';
  }

  /**
   * Efecto shimmer (brillo)
   */
  static addShimmerEffect(element: HTMLElement): void {
    const style = document.createElement('style');
    const animationName = 'shimmer-' + Math.random().toString(36).substr(2, 9);

    style.textContent = `
      @keyframes ${animationName} {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
    `;

    document.head.appendChild(style);

    element.style.backgroundImage = `linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    )`;
    element.style.backgroundSize = '1000px 100%';
    element.style.animation = `${animationName} 2s infinite`;
  }

  /**
   * Efecto de hover 3D
   */
  static add3DHoverEffect(element: HTMLElement): void {
    element.style.perspective = '1000px';

    element.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = -(x - rect.width / 2) / 10;

      element.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
  }

  /**
   * Efecto de fade-in progresivo para múltiples elementos
   */
  static staggeredFadeIn(elements: HTMLElement[], delay: number = 100): void {
    elements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.animation = `fadeIn 0.6s ease-out forwards`;
      element.style.animationDelay = `${index * delay}ms`;
    });
  }

  /**
   * Crea un efecto de ripple en un elemento (como Material Design)
   */
  static createRippleOnClick(element: HTMLElement): void {
    element.addEventListener('click', (e: MouseEvent) => {
      const ripple = document.createElement('span');
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.position = 'absolute';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
      ripple.style.borderRadius = '50%';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'ripple-animation 0.6s ease-out';

      element.style.position = 'relative';
      element.style.overflow = 'hidden';
      element.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  }

  /**
   * Efecto parallax en scroll
   */
  static addParallaxEffect(element: HTMLElement, speed: number = 0.5): void {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      element.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }

  /**
   * Conteo animado de números
   */
  static animateCounter(
    element: HTMLElement,
    endValue: number,
    duration: number = 2000
  ): void {
    const startValue = parseInt(element.textContent || '0', 10);
    const range = endValue - startValue;
    const increment = range / (duration / 16);
    let current = startValue;

    const counter = setInterval(() => {
      current += increment;

      if ((increment > 0 && current >= endValue) ||
          (increment < 0 && current <= endValue)) {
        current = endValue;
        clearInterval(counter);
      }

      element.textContent = Math.floor(current).toString();
    }, 16);
  }

  /**
   * Efecto de entrada con rotación
   */
  static rotateInEffect(element: HTMLElement): void {
    element.style.animation = `rotateIn 0.6s ease-out`;
  }

  /**
   * Efecto de zoom in
   */
  static zoomInEffect(element: HTMLElement): void {
    element.style.animation = `zoomIn 0.4s ease-out`;
  }

  /**
   * Agrega clase dinámicamente con animación
   */
  static addClassWithAnimation(
    element: HTMLElement,
    className: string,
    duration: number = 500
  ): void {
    element.style.animation = `fadeIn ${duration}ms ease-out`;
    element.classList.add(className);
  }
}

/**
 * Observador de intersección para animaciones al scroll
 */
export class IntersectionAnimationObserver {
  private observer: IntersectionObserver;

  constructor(animationClass: string = 'fade-in', threshold: number = 0.1) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold });
  }

  observe(elements: HTMLElement[]): void {
    elements.forEach(element => this.observer.observe(element));
  }

  disconnect(): void {
    this.observer.disconnect();
  }
}
