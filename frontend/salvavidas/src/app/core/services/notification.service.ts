import { Injectable, signal, effect } from '@angular/core';

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications = signal<Notification[]>([]);
  private idCounter = 0;

  constructor() {
    // Auto-remover notificaciones después del tiempo especificado
    effect(() => {
      this.notifications().forEach(notification => {
        if (notification.duration) {
          setTimeout(() => {
            this.remove(notification.id);
          }, notification.duration);
        }
      });
    });
  }

  success(message: string, duration: number = 3000): string {
    return this.add(message, 'success', duration);
  }

  error(message: string, duration: number = 5000): string {
    return this.add(message, 'error', duration);
  }

  warning(message: string, duration: number = 4000): string {
    return this.add(message, 'warning', duration);
  }

  info(message: string, duration: number = 3000): string {
    return this.add(message, 'info', duration);
  }

  private add(message: string, type: Notification['type'], duration: number): string {
    const id = `notification-${++this.idCounter}`;
    const notification: Notification = { id, message, type, duration };

    this.notifications.set([...this.notifications(), notification]);

    return id;
  }

  remove(id: string): void {
    this.notifications.set(
      this.notifications().filter(n => n.id !== id)
    );
  }

  clear(): void {
    this.notifications.set([]);
  }
}
