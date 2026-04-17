import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../shared/card/card.component';
import { ModalComponent } from '../shared/modal/modal.component';

interface Reunion {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  ubicacion: string;
  asistentes: number;
  estado: 'pendiente' | 'en-progreso' | 'completada';
}

@Component({
  selector: 'app-reuniones',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule, ModalComponent],
  templateUrl: './reuniones.component.html',
  styleUrl: './reuniones.component.css',
})
export class ReunionesComponent {
  reuniones = signal<Reunion[]>([
    {
      id: 1,
      titulo: 'Reunión de Coordinación',
      fecha: '2026-02-21',
      hora: '14:30',
      ubicacion: 'Oficina Principal',
      asistentes: 12,
      estado: 'pendiente',
    },
    {
      id: 2,
      titulo: 'Revisión de Protocolos',
      fecha: '2026-02-22',
      hora: '10:00',
      ubicacion: 'Sala Capacitación',
      asistentes: 8,
      estado: 'en-progreso',
    },
    {
      id: 3,
      titulo: 'Planificación Mensual',
      fecha: '2026-02-23',
      hora: '16:00',
      ubicacion: 'Oficina Principal',
      asistentes: 15,
      estado: 'completada',
    },
    {
      id: 4,
      titulo: 'Evaluación Incidentes',
      fecha: '2026-02-24',
      hora: '11:00',
      ubicacion: 'Sala Conferencias',
      asistentes: 10,
      estado: 'pendiente',
    },
  ]);

  modalAbierto = signal(false);
  editandoId = signal<number | null>(null);

  formData = signal({
    titulo: '',
    fecha: '',
    hora: '',
    ubicacion: '',
    asistentes: 0,
    estado: 'pendiente' as 'pendiente' | 'en-progreso' | 'completada',
  });

  estados = ['pendiente', 'en-progreso', 'completada'];

  abrirModalCrear() {
    this.editandoId.set(null);
    this.resetearFormulario();
    this.modalAbierto.set(true);
  }

  abrirModalEditar(reunion: Reunion) {
    this.editandoId.set(reunion.id);
    this.formData.set({ ...reunion });
    this.modalAbierto.set(true);
  }

  resetearFormulario() {
    this.formData.set({
      titulo: '',
      fecha: '',
      hora: '',
      ubicacion: '',
      asistentes: 0,
      estado: 'pendiente',
    });
  }

  guardarReunion() {
    if (!this.validarFormulario()) {
      alert('Completa todos los campos');
      return;
    }

    const id = this.editandoId();
    if (id) {
      const reuniones = this.reuniones().map(r =>
        r.id === id ? { ...r, ...this.formData() } : r
      );
      this.reuniones.set(reuniones);
      alert('Reunión actualizada');
    } else {
      const nueva: Reunion = {
        id: Math.max(...this.reuniones().map(r => r.id), 0) + 1,
        ...this.formData(),
      };
      this.reuniones.set([...this.reuniones(), nueva]);
      alert('Reunión creada');
    }
    this.modalAbierto.set(false);
  }

  eliminarReunion(id: number) {
    if (confirm('¿Eliminar esta reunión?')) {
      this.reuniones.set(this.reuniones().filter(r => r.id !== id));
      alert('Reunión eliminada');
    }
  }

  validarFormulario(): boolean {
    const f = this.formData();
    return !!(f.titulo && f.fecha && f.hora && f.ubicacion && f.asistentes);
  }

  cerrarModal() {
    this.modalAbierto.set(false);
  }

  stats = signal({
    totalReuniones: 12,
    proximaReunion: 'Hoy 14:30',
    asistentesPromedio: 7,
  });
}
