import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notifications-container">
      <div *ngFor="let notification of notificationService.notifications()" 
           class="notification" 
           [class]="'notification-' + notification.type"
           [@slideIn]>
        <div class="notification-content">
          <span class="material-icons-outlined notification-icon">{{ getIcon(notification.type) }}</span>
          <p>{{ notification.message }}</p>
        </div>
        <button class="notification-close" (click)="notificationService.remove(notification.id)">
          <span class="material-icons-outlined">close</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .notifications-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 400px;
    }

    .notification {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 14px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      animation: slideInRight 0.3s ease-out;
      background: white;
      color: white;
    }

    .notification-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex: 1;
    }

    .notification-icon {
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .notification-content p {
      margin: 0;
      font-weight: 500;
      color: inherit;
    }

    .notification-success {
      background: linear-gradient(135deg, #27AE60 0%, #229954 100%);
    }

    .notification-error {
      background: linear-gradient(135deg, #E74C3C 0%, #C0392B 100%);
    }

    .notification-warning {
      background: linear-gradient(135deg, #F39C12 0%, #D68910 100%);
    }

    .notification-info {
      background: linear-gradient(135deg, #0077B6 0%, #004B87 100%);
    }

    .notification-close {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: background-color 0.2s ease;
    }

    .notification-close:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    .notification-close .material-icons-outlined {
      font-size: 1.1rem;
    }

    @media (max-width: 600px) {
      .notifications-container {
        left: 10px;
        right: 10px;
        max-width: none;
      }
    }
  `]
})
export class NotificationsComponent {
  notificationService = inject(NotificationService);

  getIcon(type: string): string {
    const iconMap = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return iconMap[type as keyof typeof iconMap] || 'info';
  }
}
