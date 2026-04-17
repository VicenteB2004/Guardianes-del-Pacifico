import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';

interface Evento {
  fecha: string;
  titulo: string;
  tipo: string;
  hora: string;
  descripcion: string;
}

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css',
})
export class CalendarioComponent {
  eventos = signal<Evento[]>([
    {
      fecha: '2026-02-21',
      titulo: 'Coordinación de Rescate',
      tipo: 'Reunión',
      hora: '14:30',
      descripcion: 'Reunión de coordinación con el equipo de rescate',
    },
    {
      fecha: '2026-02-21',
      titulo: 'Patrulla Diaria',
      tipo: 'Rutina',
      hora: '10:00',
      descripcion: 'Patrulla regular de monitoreo de playa',
    },
    {
      fecha: '2026-02-22',
      titulo: 'Planificación Mensual',
      tipo: 'Reunión',
      hora: '10:00',
      descripcion: 'Planificación de actividades del mes',
    },
    {
      fecha: '2026-02-23',
      titulo: 'Capacitación',
      tipo: 'Entrenamiento',
      hora: '16:00',
      descripcion: 'Capacitación de nuevos salvavidas',
    },
    {
      fecha: '2026-02-25',
      titulo: 'Simulacro de Rescate',
      tipo: 'Ejercicio',
      hora: '14:00',
      descripcion: 'Simulacro de evacuación de emergencia',
    },
  ]);

  estadisticas = signal({
    eventosEste: 'Mes: 18',
    eventosProximos: 'Semana: 5',
    tiposEventos: '5 tipos',
  });

  getTipoBadgeClass(tipo: string): string {
    const mapping: { [key: string]: string } = {
      'Reunión': 'tipo-reunion',
      'Rutina': 'tipo-rutina',
      'Entrenamiento': 'tipo-entrenamiento',
      'Ejercicio': 'tipo-ejercicio',
    };
    return mapping[tipo] || 'tipo-default';
  }
}
