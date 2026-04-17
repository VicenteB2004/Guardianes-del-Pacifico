import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private router = inject(Router);
  private notificationService = inject(NotificationService);

  private addDays(days: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }

  // Estadísticas del sistema
  stats = {
    totalActivities: 42,
    activeUsers: 18,
    pendingTasks: 7,
    completedToday: 12
  };

  // Actividades recientes
  recentActivities = [
    {
      id: 1,
      type: 'rescue',
      title: 'Rescate preventivo en Playa Norte',
      time: 'hace 25 min',
      icon: 'water',
      detail: 'Equipo Alfa atendio a 2 banistas en zona de corriente.'
    },
    {
      id: 2,
      type: 'meeting',
      title: 'Briefing de seguridad matutino',
      time: 'hace 1 hora',
      icon: 'groups',
      detail: 'Se actualizaron protocolos por bandera amarilla.'
    },
    {
      id: 3,
      type: 'report',
      title: 'Reporte de incidentes enviado',
      time: 'hace 3 horas',
      icon: 'assessment',
      detail: 'Bitacora consolidada con 7 registros del turno.'
    },
    {
      id: 4,
      type: 'training',
      title: 'Entrenamiento de RCP completado',
      time: 'hace 5 horas',
      icon: 'health_and_safety',
      detail: 'Participaron 12 salvavidas de primer ingreso.'
    }
  ];

  // Próximos eventos
  upcomingEvents = [
    {
      id: 1,
      title: 'Simulacro de rescate costero',
      date: this.addDays(1),
      time: '08:00',
      icon: 'event',
      location: 'Muelle Central',
      status: 'Manana',
      badgeClass: 'badge-soon'
    },
    {
      id: 2,
      title: 'Revisión de equipos y radios',
      date: this.addDays(3),
      time: '14:30',
      icon: 'construction',
      location: 'Base Operativa',
      status: 'Esta semana',
      badgeClass: 'badge-week'
    },
    {
      id: 3,
      title: 'Capacitación de primeros auxilios',
      date: this.addDays(6),
      time: '10:00',
      icon: 'medical_services',
      location: 'Sala de Formacion',
      status: 'Confirmado',
      badgeClass: 'badge-confirmed'
    }
  ];

  activeCount = computed(() => this.stats.activeUsers);

  // Métodos para botones
  nuevoReporte() {
    this.router.navigate(['/reportes']);
    this.notificationService.info('Abre el formulario para crear un nuevo reporte');
  }

  emergencia() {
    this.notificationService.error('⚠️ EMERGENCIA REPORTADA - Contactando equipos de respuesta...');
    console.log('Emergencia activada');
    // Aquí puedes agregar lógica adicional para emergencias
  }

  verReporte() {
    this.router.navigate(['/reportes']);
    this.notificationService.info('Cargando reportes...');
  }

  verHistorial() {
    this.router.navigate(['/reportes']);
    this.notificationService.info('Mostrando historial de actividades');
  }
}
