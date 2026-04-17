/**
 * Script de Demostración de Animaciones
 * Para probar las capacidades de efectos visuales
 */

import { Injectable } from '@angular/core';
import { AnimationUtils } from './animations';
import { VisualEffects } from './visual-effects';

@Injectable({
  providedIn: 'root'
})
export class AnimationDemoService {
  
  /**
   * Demo: Mostrar todas las animaciones disponibles
   */
  demoAllAnimations(): void {
    console.log('%c🎬 Demostrando todas las animaciones...', 'font-size: 16px; color: #0077B6;');
    
    // Demo confeti
    this.demoConfetti();
    
    // Demo contador
    setTimeout(() => this.demoCounter(), 500);
    
    // Demo notificaciones
    setTimeout(() => this.demoNotifications(), 1000);
    
    // Demo glow
    setTimeout(() => this.demoGlow(), 1500);
  }

  /**
   * Demo: Efecto Confeti
   */
  private demoConfetti(): void {
    console.log('🎉 Creando efecto confeti...');
    if (typeof window !== 'undefined') {
      VisualEffects.createConfetti(window.innerWidth / 2, window.innerHeight / 2);
    }
  }

  /**
   * Demo: Contador Animado
   */
  private demoCounter(): void {
    console.log('📊 Animando contador...');
    const counter = document.createElement('div');
    counter.textContent = '0';
    counter.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      font-size: 48px;
      font-weight: bold;
      color: #0077B6;
      z-index: 10000;
      background: white;
      padding: 20px;
      border-radius: 100px;
      box-shadow: 0 4px 12px rgba(0, 119, 182, 0.3);
    `;
    document.body.appendChild(counter);
    
    VisualEffects.animateCounter(counter, 100, 2000);
    
    setTimeout(() => counter.remove(), 2500);
  }

  /**
   * Demo: Notificaciones
   */
  private demoNotifications(): void {
    console.log('💬 Demostrando notificaciones...');
    AnimationUtils.showNotification('¡Notificación de Éxito!', 'success', 3000);
    
    setTimeout(() => {
      AnimationUtils.showNotification('¡Aviso de Advertencia!', 'warning', 3000);
    }, 1000);
    
    setTimeout(() => {
      AnimationUtils.showNotification('✓ Información útil', 'info', 3000);
    }, 2000);
  }

  /**
   * Demo: Efecto Glow
   */
  private demoGlow(): void {
    console.log('✨ Applicando efecto glow...');
    const elements = document.querySelectorAll('.stat-card');
    elements.forEach((el, index) => {
      setTimeout(() => {
        VisualEffects.addGlowEffect(el as HTMLElement, '#0077B6');
        setTimeout(() => {
          (el as HTMLElement).style.boxShadow = '';
        }, 2000);
      }, index * 200);
    });
  }

  /**
   * Demo: Staggered Fade In
   */
  demoStaggeredFadeIn(): void {
    console.log('🌊 Efecto fade-in escalonado...');
    const elements = Array.from(document.querySelectorAll('table tbody tr')) as HTMLElement[];
    VisualEffects.staggeredFadeIn(elements, 50);
  }

  /**
   * Demo: 3D Hover
   */
  demoAdd3DHover(): void {
    console.log('🎮 Agregando efecto 3D hover...');
    const cards = Array.from(document.querySelectorAll('.stat-card')) as HTMLElement[];
    cards.forEach(card => {
      VisualEffects.add3DHoverEffect(card);
    });
  }

  /**
   * Demo: Parallax en scroll
   */
  demoParallax(): void {
    console.log('📜 Efecto parallax activo...');
    const header = document.querySelector('.dashboard-header') as HTMLElement;
    if (header) {
      VisualEffects.addParallaxEffect(header, 0.5);
    }
  }

  /**
   * Demo: Shimmer
   */
  demoShimmer(): void {
    console.log('✨ Aplicando efecto shimmer...');
    const cards = Array.from(document.querySelectorAll('.stat-card')) as HTMLElement[];
    cards.forEach((card, index) => {
      setTimeout(() => {
        VisualEffects.addShimmerEffect(card);
      }, index * 100);
    });
  }

  /**
   * Demo: Ripple en botones
   */
  demoRippleEffect(): void {
    console.log('🌊 Agregando efecto ripple...');
    const buttons = Array.from(document.querySelectorAll('.btn, .action-btn')) as HTMLElement[];
    buttons.forEach(btn => {
      VisualEffects.createRippleOnClick(btn);
    });
  }

  /**
   * Demo: Rotar elementos
   */
  demoRotateAnimation(): void {
    console.log('🔄 Rotación continua...');
    const icons = Array.from(document.querySelectorAll('.material-icons-outlined')) as HTMLElement[];
    icons.slice(0, 5).forEach(icon => {
      icon.style.animation = 'iconRotate 2s linear infinite';
    });
    
    setTimeout(() => {
      icons.forEach(icon => {
        icon.style.animation = '';
      });
    }, 3000);
  }

  /**
   * Demo: Todos los efectos simultáneamente
   */
  demoMegaAnimationShow(): void {
    console.log('%c🎪 ¡MEGA ESPECTÁCULO DE ANIMACIONES!', 'font-size: 20px; color: #0077B6; font-weight: bold;');
    
    // Confeti
    this.demoConfetti();
    
    // Rotar iconos
    setTimeout(() => this.demoRotateAnimation(), 100);
    
    // Shimmer en cards
    setTimeout(() => this.demoShimmer(), 200);
    
    // Notificaciones
    setTimeout(() => this.demoNotifications(), 400);
    
    // Glow
    setTimeout(() => this.demoGlow(), 600);
    
    // 3D Hover
    setTimeout(() => this.demoAdd3DHover(), 800);
    
    // Fade staggered
    setTimeout(() => {
      const elements = Array.from(document.querySelectorAll('.activity-item')) as HTMLElement[];
      VisualEffects.staggeredFadeIn(elements, 100);
    }, 1000);
  }

  /**
   * Limpia todas las animaciones
   */
  clearAllAnimations(): void {
    console.log('🛑 Limpiando animaciones...');
    const elements = document.querySelectorAll('[style*="animation"]');
    elements.forEach(el => {
      (el as HTMLElement).style.animation = '';
      (el as HTMLElement).style.boxShadow = '';
      (el as HTMLElement).style.transform = '';
    });
  }
}
