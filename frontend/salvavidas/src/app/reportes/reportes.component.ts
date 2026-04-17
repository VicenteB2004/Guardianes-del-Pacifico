import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../shared/card/card.component';
import { ModalComponent } from '../shared/modal/modal.component';

interface Reporte {
  id: number;
  titulo: string;
  fecha: string;
  autor: string;
  tipo: string;
  estado: 'borrador' | 'revisión' | 'publicado';
  descargas: number;
}

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule, ModalComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent {
  reportes = signal<Reporte[]>([
    {
      id: 1,
      titulo: 'Rescates Febrero 2026',
      fecha: '2026-02-20',
      autor: 'Juan García',
      tipo: 'Mensual',
      estado: 'publicado',
      descargas: 12,
    },
    {
      id: 2,
      titulo: 'Análisis Incidentes Semanales',
      fecha: '2026-02-19',
      autor: 'María López',
      tipo: 'Semanal',
      estado: 'publicado',
      descargas: 8,
    },
    {
      id: 3,
      titulo: 'Mejoras de Seguridad',
      fecha: '2026-02-18',
      autor: 'Carlos Rodríguez',
      tipo: 'Especial',
      estado: 'revisión',
      descargas: 2,
    },
    {
      id: 4,
      titulo: 'Estadísticas Personal',
      fecha: '2026-02-17',
      autor: 'Ana Martínez',
      tipo: 'Administrativo',
      estado: 'borrador',
      descargas: 0,
    },
  ]);

  modalAbierto = signal(false);
  editandoId = signal<number | null>(null);

  formData = signal({
    titulo: '',
    autor: '',
    tipo: 'Mensual',
    estado: 'borrador' as 'borrador' | 'revisión' | 'publicado',
  });

  tipos = ['Mensual', 'Semanal', 'Especial', 'Administrativo'];
  estados = ['borrador', 'revisión', 'publicado'];

  abrirModalCrear() {
    this.editandoId.set(null);
    this.resetearFormulario();
    this.modalAbierto.set(true);
  }

  abrirModalEditar(reporte: Reporte) {
    this.editandoId.set(reporte.id);
    this.formData.set({
      titulo: reporte.titulo,
      autor: reporte.autor,
      tipo: reporte.tipo,
      estado: reporte.estado,
    });
    this.modalAbierto.set(true);
  }

  resetearFormulario() {
    this.formData.set({
      titulo: '',
      autor: '',
      tipo: 'Mensual',
      estado: 'borrador',
    });
  }

  guardarReporte() {
    if (!this.validarFormulario()) {
      alert('Completa todos los campos');
      return;
    }

    const id = this.editandoId();
    if (id) {
      const reportes = this.reportes().map(r =>
        r.id === id
          ? {
              ...r,
              titulo: this.formData().titulo,
              autor: this.formData().autor,
              tipo: this.formData().tipo,
              estado: this.formData().estado,
            }
          : r
      );
      this.reportes.set(reportes);
      alert('Reporte actualizado');
    } else {
      const nuevo: Reporte = {
        id: Math.max(...this.reportes().map(r => r.id), 0) + 1,
        titulo: this.formData().titulo,
        fecha: new Date().toISOString().split('T')[0],
        autor: this.formData().autor,
        tipo: this.formData().tipo,
        estado: this.formData().estado,
        descargas: 0,
      };
      this.reportes.set([...this.reportes(), nuevo]);
      alert('Reporte creado');
    }
    this.modalAbierto.set(false);
  }

  eliminarReporte(id: number) {
    if (confirm('¿Eliminar este reporte?')) {
      this.reportes.set(this.reportes().filter(r => r.id !== id));
      alert('Reporte eliminado');
    }
  }

  validarFormulario(): boolean {
    const f = this.formData();
    return !!(f.titulo && f.autor && f.tipo);
  }

  cerrarModal() {
    this.modalAbierto.set(false);
  }

  stats = signal({
    totalReportes: 24,
    publicados: 18,
    enRevision: 4,
    borradores: 2,
  });
}
