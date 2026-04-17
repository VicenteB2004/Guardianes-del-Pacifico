import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Reporte {
  id: number;
  titulo: string;
  fecha: string;
  autor: string;
  tipo: string;
  estado: 'borrador' | 'revisión' | 'publicado';
  descargas: number;
  contenido?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  reportes = signal<Reporte[]>([]);
  loading = signal(false);

  constructor(private api: ApiService) {}

  getReportes(): Observable<Reporte[]> {
    this.loading.set(true);
    return this.api.get<Reporte[]>('/reportes');
  }

  getReporte(id: number): Observable<Reporte> {
    return this.api.get<Reporte>(`/reportes/${id}`);
  }

  crearReporte(reporte: Partial<Reporte>): Observable<Reporte> {
    return this.api.post<Reporte>('/reportes', reporte);
  }

  actualizarReporte(id: number, reporte: Partial<Reporte>): Observable<Reporte> {
    return this.api.put<Reporte>(`/reportes/${id}`, reporte);
  }

  eliminarReporte(id: number): Observable<{ message: string }> {
    return this.api.delete(`/reportes/${id}`);
  }

  descargarReporte(id: number): Observable<Blob> {
    return this.api.get<Blob>(`/reportes/${id}/download`);
  }

  cargarDatosLocales() {
    const datosLocales: Reporte[] = [
      {
        id: 1,
        titulo: 'Reporte de Rescates Febrero 2026',
        fecha: '2026-02-20',
        autor: 'Juan García',
        tipo: 'Mensual',
        estado: 'publicado',
        descargas: 12,
        contenido: 'Resumen de operaciones de rescate...',
      },
      {
        id: 2,
        titulo: 'Análisis de Incidentes Semanales',
        fecha: '2026-02-19',
        autor: 'María López',
        tipo: 'Semanal',
        estado: 'publicado',
        descargas: 8,
        contenido: 'Análisis de incidentes...',
      },
      {
        id: 3,
        titulo: 'Propuesta de Mejoras de Seguridad',
        fecha: '2026-02-18',
        autor: 'Carlos Rodríguez',
        tipo: 'Especial',
        estado: 'revisión',
        descargas: 2,
        contenido: 'Documento en revisión...',
      },
      {
        id: 4,
        titulo: 'Estadísticas de Personal',
        fecha: '2026-02-17',
        autor: 'Ana Martínez',
        tipo: 'Administrativo',
        estado: 'borrador',
        descargas: 0,
        contenido: 'Cambios disponibles antes de publicar...',
      },
    ];
    this.reportes.set(datosLocales);
    this.loading.set(false);
  }
}
