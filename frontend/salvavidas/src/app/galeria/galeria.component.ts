import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../shared/card/card.component';
import { ModalComponent } from '../shared/modal/modal.component';

interface Foto {
  id: number;
  titulo: string;
  fecha: string;
  evento: string;
  tamano: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule, ModalComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
})
export class GaleriaComponent {
  fotos = signal<Foto[]>([
    { id: 1, titulo: 'Entrenamiento en Playa', fecha: '2026-02-21', evento: 'Capacitacion', tamano: '2.4 MB' },
    { id: 2, titulo: 'Rescate en el Mar', fecha: '2026-02-20', evento: 'Incidente', tamano: '1.8 MB' },
    { id: 3, titulo: 'Patrulla Diaria', fecha: '2026-02-20', evento: 'Rutina', tamano: '3.1 MB' },
    { id: 4, titulo: 'Equipo de Salvavidas', fecha: '2026-02-19', evento: 'Retrato', tamano: '2.7 MB' },
    { id: 5, titulo: 'Playa al Atardecer', fecha: '2026-02-19', evento: 'Paisaje', tamano: '1.9 MB' },
    { id: 6, titulo: 'Simulacro de Rescate', fecha: '2026-02-18', evento: 'Entrenamiento', tamano: '4.2 MB' },
  ]);

  modalAbierto = signal(false);
  editandoId = signal<number | null>(null);

  formData = signal({
    titulo: '',
    evento: '',
    tamano: '',
  });

  eventos = ['Capacitacion', 'Incidente', 'Rutina', 'Retrato', 'Paisaje', 'Entrenamiento'];

  abrirModalCrear() {
    this.editandoId.set(null);
    this.resetearFormulario();
    this.modalAbierto.set(true);
  }

  abrirModalEditar(foto: Foto) {
    this.editandoId.set(foto.id);
    this.formData.set({
      titulo: foto.titulo,
      evento: foto.evento,
      tamano: foto.tamano,
    });
    this.modalAbierto.set(true);
  }

  resetearFormulario() {
    this.formData.set({
      titulo: '',
      evento: '',
      tamano: '',
    });
  }

  guardarFoto() {
    if (!this.validarFormulario()) {
      alert('Completa todos los campos');
      return;
    }

    const id = this.editandoId();
    if (id) {
      const fotos = this.fotos().map(f =>
        f.id === id
          ? {
              ...f,
              titulo: this.formData().titulo,
              evento: this.formData().evento,
              tamano: this.formData().tamano,
            }
          : f
      );
      this.fotos.set(fotos);
      alert('Foto actualizada');
    } else {
      const nueva: Foto = {
        id: Math.max(...this.fotos().map(f => f.id), 0) + 1,
        titulo: this.formData().titulo,
        fecha: new Date().toISOString().split('T')[0],
        evento: this.formData().evento,
        tamano: this.formData().tamano,
      };
      this.fotos.set([...this.fotos(), nueva]);
      alert('Foto creada');
    }
    this.modalAbierto.set(false);
  }

  descargarFoto(id: number) {
    alert('Descargando foto ' + id);
  }

  eliminarFoto(id: number) {
    if (confirm('¿Eliminar esta foto?')) {
      this.fotos.set(this.fotos().filter(f => f.id !== id));
      alert('Foto eliminada');
    }
  }

  validarFormulario(): boolean {
    const f = this.formData();
    return !!(f.titulo && f.evento && f.tamano);
  }

  cerrarModal() {
    this.modalAbierto.set(false);
  }

  stats = signal({
    totalFotos: 284,
    eventosCapturados: 12,
    espacioUsado: '2.4 GB',
    ultimaSubida: 'Hoy 14:20',
  });
}
