import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

interface DashboardMetric {
  icon: string;
  title: string;
  value: string | number;
  subtitle: string;
  accentColor: string;
  badge?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  today = new Date();

  metrics = signal<DashboardMetric[]>([
    {
      icon: '⚠️',
      title: 'Incidentes Hoy',
      value: 5,
      subtitle: 'En las últimas 24 horas',
      accentColor: 'danger',
      badge: 'crítico',
    },
    {
      icon: '📅',
      title: 'Próxima Reunión',
      value: 'Hoy 14:30',
      subtitle: 'Coordinación de rescate',
      accentColor: 'primary',
    },
    {
      icon: '🌊',
      title: 'Estado del Mar',
      value: 'Moderado',
      subtitle: 'Olas 1.5m - Viento 15 km/h',
      accentColor: 'warning',
    },
    {
      icon: '🚩',
      title: 'Salvavidas en Guardia',
      value: 12,
      subtitle: 'Turno matutino',
      accentColor: 'success',
    },
    {
      icon: '💾',
      title: 'Rescates del Mes',
      value: 28,
      subtitle: '+15% respecto al mes anterior',
      accentColor: 'primary',
    },
    {
      icon: '⏱️',
      title: 'Tiempo Promedio de Respuesta',
      value: '2.3 min',
      subtitle: 'Registro actual',
      accentColor: 'success',
    },
  ]);

  recentIncidents = signal([
    { id: 1, type: 'Ahogamiento', time: 'Hace 2 horas', status: 'Resuelto' },
    { id: 2, type: 'Persona desaparecida', time: 'Hace 4 horas', status: 'En progreso' },
    { id: 3, type: 'Asistencia médica', time: 'Hace 6 horas', status: 'Resuelto' },
  ]);

  quickActions = [
    { icon: '📝', label: 'Nuevo Reporte', color: 'primary' },
    { icon: '📞', label: 'Emergencia', color: 'danger' },
    { icon: '📊', label: 'Ver Reportes', color: 'primary' },
    { icon: '≙', label: 'Historial', color: 'primary' },
  ];
}
