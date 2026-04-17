import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: 'activo' | 'inactivo' | 'suspendido';
  fechaRegistro: string;
  ultimaActividad: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarios = signal<Usuario[]>([]);
  loading = signal(false);

  constructor(private api: ApiService) {}

  // Obtener todos los usuarios
  getUsuarios(): Observable<Usuario[]> {
    this.loading.set(true);
    return this.api.get<Usuario[]>('/users');
  }

  // Obtener usuario por ID
  getUsuario(id: number): Observable<Usuario> {
    return this.api.get<Usuario>(`/users/${id}`);
  }

  // Crear nuevo usuario
  crearUsuario(usuario: Partial<Usuario>): Observable<Usuario> {
    return this.api.post<Usuario>('/users', usuario);
  }

  // Actualizar usuario
  actualizarUsuario(id: number, usuario: Partial<Usuario>): Observable<Usuario> {
    return this.api.put<Usuario>(`/users/${id}`, usuario);
  }

  // Eliminar usuario
  eliminarUsuario(id: number): Observable<{ message: string }> {
    return this.api.delete(`/users/${id}`);
  }

  // Cargar datos locales como fallback
  cargarDatosLocales() {
    const datosLocales: Usuario[] = [
      {
        id: 1,
        nombre: 'Juan García',
        email: 'juan.garcia@gdp.com',
        rol: 'Salvavidas',
        estado: 'activo',
        fechaRegistro: '2025-01-15',
        ultimaActividad: '2026-02-21',
      },
      {
        id: 2,
        nombre: 'María López',
        email: 'maria.lopez@gdp.com',
        rol: 'Coordinador',
        estado: 'activo',
        fechaRegistro: '2024-06-20',
        ultimaActividad: '2026-02-21',
      },
      {
        id: 3,
        nombre: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@gdp.com',
        rol: 'Salvavidas',
        estado: 'activo',
        fechaRegistro: '2025-03-10',
        ultimaActividad: '2026-02-20',
      },
      {
        id: 4,
        nombre: 'Ana Martínez',
        email: 'ana.martinez@gdp.com',
        rol: 'Administrativo',
        estado: 'inactivo',
        fechaRegistro: '2024-12-01',
        ultimaActividad: '2026-02-15',
      },
      {
        id: 5,
        nombre: 'Pedro Sánchez',
        email: 'pedro.sanchez@gdp.com',
        rol: 'Salvavidas',
        estado: 'suspendido',
        fechaRegistro: '2025-02-05',
        ultimaActividad: '2026-02-10',
      },
    ];
    this.usuarios.set(datosLocales);
    this.loading.set(false);
  }
}
