import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Reunion {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  ubicacion: string;
  asistentes: number;
  estado: 'pendiente' | 'en-progreso' | 'completada';
}

@Injectable({
  providedIn: 'root',
})
export class ReunionesService {
  reuniones = signal<Reunion[]>([]);
  loading = signal(false);

  constructor(private api: ApiService) {}

  getReuniones(): Observable<Reunion[]> {
    this.loading.set(true);
    return this.api.get<Reunion[]>('/reuniones');
  }

  getReunion(id: number): Observable<Reunion> {
    return this.api.get<Reunion>(`/reuniones/${id}`);
  }

  crearReunion(reunion: Partial<Reunion>): Observable<Reunion> {
    return this.api.post<Reunion>('/reuniones', reunion);
  }

  actualizarReunion(id: number, reunion: Partial<Reunion>): Observable<Reunion> {
    return this.api.put<Reunion>(`/reuniones/${id}`, reunion);
  }

  eliminarReunion(id: number): Observable<{ message: string }> {
    return this.api.delete(`/reuniones/${id}`);
  }

  cargarDatosLocales() {
    const datosLocales: Reunion[] = [
      {
        id: 1,
        titulo: 'Reunión de Coordinación Weekly',
        fecha: '2026-02-21',
        hora: '14:30',
        ubicacion: 'Oficina Principal',
        asistentes: 12,
        estado: 'pendiente',
      },
      {
        id: 2,
        titulo: 'Revisión de Protocolos de Rescue',
        fecha: '2026-02-22',
        hora: '10:00',
        ubicacion: 'Sala de Capacitación',
        asistentes: 8,
        estado: 'en-progreso',
      },
      {
        id: 3,
        titulo: 'Planificación del Mes',
        fecha: '2026-02-23',
        hora: '16:00',
        ubicacion: 'Oficina Principal',
        asistentes: 15,
        estado: 'completada',
      },
      {
        id: 4,
        titulo: 'Evaluación de Incidentes',
        fecha: '2026-02-24',
        hora: '11:00',
        ubicacion: 'Sala de Conferencias',
        asistentes: 10,
        estado: 'pendiente',
      },
    ];
    this.reuniones.set(datosLocales);
    this.loading.set(false);
  }
}
