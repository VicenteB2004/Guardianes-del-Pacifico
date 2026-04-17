import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../shared/card/card.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { NotificationService } from '../core/services/notification.service';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: 'activo' | 'inactivo' | 'suspendido';
  fechaRegistro: string;
  ultimaActividad: string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule, ModalComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent {
  private notificationService = inject(NotificationService);
  
  usuarios = signal<Usuario[]>([
    {
      id: 1,
      nombre: 'Carlos López',
      email: 'carlos@salvavidas.cl',
      rol: 'Administrador',
      estado: 'activo',
      fechaRegistro: '2025-01-15',
      ultimaActividad: '2026-02-21 09:30',
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria@salvavidas.cl',
      rol: 'Supervisor',
      estado: 'activo',
      fechaRegistro: '2025-02-10',
      ultimaActividad: '2026-02-21 18:45',
    },
    {
      id: 3,
      nombre: 'Juan Martínez',
      email: 'juan@salvavidas.cl',
      rol: 'Salvavidas',
      estado: 'activo',
      fechaRegistro: '2025-03-05',
      ultimaActividad: '2026-02-20 16:20',
    },
    {
      id: 4,
      nombre: 'Laura Rojas',
      email: 'laura@salvavidas.cl',
      rol: 'Salvavidas',
      estado: 'activo',
      fechaRegistro: '2025-03-12',
      ultimaActividad: '2026-02-21 10:15',
    },
    {
      id: 5,
      nombre: 'Pedro Díaz',
      email: 'pedro@salvavidas.cl',
      rol: 'Supervisor',
      estado: 'inactivo',
      fechaRegistro: '2025-04-20',
      ultimaActividad: '2026-01-10 15:00',
    },
  ]);

  modalAbierto = signal(false);
  editandoId = signal<number | null>(null);

  formData = signal({
    nombre: '',
    email: '',
    rol: 'Salvavidas',
    estado: 'activo' as 'activo' | 'inactivo' | 'suspendido',
  });

  roles = ['Salvavidas', 'Coordinador', 'Administrativo', 'Director'];
  estados = ['activo', 'inactivo', 'suspendido'];

  abrirModalCrear() {
    this.editandoId.set(null);
    this.resetearFormulario();
    this.modalAbierto.set(true);
  }

  abrirModalEditar(usuario: Usuario) {
    this.editandoId.set(usuario.id);
    this.formData.set({
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      estado: usuario.estado,
    });
    this.modalAbierto.set(true);
  }

  resetearFormulario() {
    this.formData.set({
      nombre: '',
      email: '',
      rol: 'Salvavidas',
      estado: 'activo',
    });
  }

  guardarUsuario() {
    if (!this.validarFormulario()) {
      this.notificationService.error('Por favor completa todos los campos');
      return;
    }

    const id = this.editandoId();
    if (id) {
      const usuarios = this.usuarios().map(u =>
        u.id === id
          ? {
              ...u,
              nombre: this.formData().nombre,
              email: this.formData().email,
              rol: this.formData().rol,
              estado: this.formData().estado,
            }
          : u
      );
      this.usuarios.set(usuarios);
      this.notificationService.success('Usuario actualizado correctamente');
    } else {
      const nuevoUsuario: Usuario = {
        id: Math.max(...this.usuarios().map(u => u.id), 0) + 1,
        nombre: this.formData().nombre,
        email: this.formData().email,
        rol: this.formData().rol,
        estado: this.formData().estado,
        fechaRegistro: new Date().toISOString().split('T')[0],
        ultimaActividad: new Date().toISOString().split('T')[0],
      };
      this.usuarios.set([...this.usuarios(), nuevoUsuario]);
      this.notificationService.success('Usuario creado exitosamente');
    }
    this.modalAbierto.set(false);
  }

  eliminarUsuario(id: number) {
    if (confirm('¿Eliminar este usuario?')) {
      this.usuarios.set(this.usuarios().filter(u => u.id !== id));
      this.notificationService.success('Usuario elimanido correctamente');
    }
  }

  validarFormulario(): boolean {
    const f = this.formData();
    return !!(f.nombre && f.email && f.rol);
  }

  cerrarModal() {
    this.modalAbierto.set(false);
  }
}
