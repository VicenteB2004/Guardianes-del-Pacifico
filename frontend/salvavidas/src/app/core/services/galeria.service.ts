import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Foto {
  id: number;
  titulo: string;
  fecha: string;
  evento: string;
  tamano: string;
  url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  fotos = signal<Foto[]>([]);
  loading = signal(false);

  constructor(private api: ApiService) {}

  getFotos(): Observable<Foto[]> {
    this.loading.set(true);
    return this.api.get<Foto[]>('/multimedia');
  }

  getFoto(id: number): Observable<Foto> {
    return this.api.get<Foto>(`/multimedia/${id}`);
  }

  crearFoto(foto: Partial<Foto>): Observable<Foto> {
    return this.api.post<Foto>('/multimedia', foto);
  }

  actualizarFoto(id: number, foto: Partial<Foto>): Observable<Foto> {
    return this.api.put<Foto>(`/multimedia/${id}`, foto);
  }

  eliminarFoto(id: number): Observable<{ message: string }> {
    return this.api.delete(`/multimedia/${id}`);
  }

  descargarFoto(id: number): Observable<Blob> {
    return this.api.get<Blob>(`/multimedia/${id}/download`);
  }

  cargarDatosLocales() {
    const datosLocales: Foto[] = [
      { id: 1, titulo: 'Entrenamiento en Playa', fecha: '2026-02-21', evento: 'Capacitacion', tamano: '2.4 MB' },
      { id: 2, titulo: 'Rescate en el Mar', fecha: '2026-02-20', evento: 'Incidente', tamano: '1.8 MB' },
      { id: 3, titulo: 'Patrulla Diaria', fecha: '2026-02-20', evento: 'Rutina', tamano: '3.1 MB' },
      { id: 4, titulo: 'Equipo de Salvavidas', fecha: '2026-02-19', evento: 'Retrato', tamano: '2.7 MB' },
      { id: 5, titulo: 'Playa al Atardecer', fecha: '2026-02-19', evento: 'Paisaje', tamano: '1.9 MB' },
      { id: 6, titulo: 'Simulacro de Rescate', fecha: '2026-02-18', evento: 'Entrenamiento', tamano: '4.2 MB' },
    ];
    this.fotos.set(datosLocales);
    this.loading.set(false);
  }
}
