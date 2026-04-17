import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';

interface MetricaMensual {
  mes: string;
  rescates: number;
  incidentes: number;
  patrullas: number;
}

interface EstadisticaRescate {
  tipo: string;
  cantidad: number;
  porcentaje: number;
  casos: string[];
}

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css',
})
export class EstadisticasComponent {
  metricas = signal<MetricaMensual[]>([
    { mes: 'Enero', rescates: 12, incidentes: 24, patrullas: 88 },
    { mes: 'Febrero', rescates: 8, incidentes: 18, patrullas: 92 },
    { mes: 'Marzo', rescates: 15, incidentes: 31, patrullas: 85 },
    { mes: 'Abril', rescates: 11, incidentes: 22, patrullas: 90 },
    { mes: 'Mayo', rescates: 18, incidentes: 35, patrullas: 87 },
  ]);

  rescatesPorTipo = signal<EstadisticaRescate[]>([
    {
      tipo: 'Por ahogamiento',
      cantidad: 35,
      porcentaje: 45,
      casos: ['Caso 1', 'Caso 2', 'Caso 3'],
    },
    {
      tipo: 'Por Corriente',
      cantidad: 28,
      porcentaje: 36,
      casos: ['Caso 1', 'Caso 2'],
    },
    {
      tipo: 'Otros',
      cantidad: 15,
      porcentaje: 19,
      casos: ['Caso 1'],
    },
  ]);

  estadisticasGenerales = signal({
    totalRescates: '46',
    tasaExito: '98.5%',
    tiempoPromedio: '4.2 min',
    incidentesCriticos: '8',
  });

  incidentes = signal([
    {
      fecha: '2026-02-18',
      tipo: 'Ahogamiento',
      ubicacion: 'Zona Norte',
      resuelto: true,
    },
    {
      fecha: '2026-02-17',
      tipo: 'Corriente',
      ubicacion: 'Zona Central',
      resuelto: true,
    },
    {
      fecha: '2026-02-16',
      tipo: 'Herida',
      ubicacion: 'Zona Sur',
      resuelto: true,
    },
    {
      fecha: '2026-02-15',
      tipo: 'Ahogamiento',
      ubicacion: 'Zona Norte',
      resuelto: true,
    },
  ]);
}
