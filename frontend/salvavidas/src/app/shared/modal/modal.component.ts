import { Component, input, output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ModalConfig {
  title: string;
  submitText?: string;
  cancelText?: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  isOpen = input(false);
  title = input('Modal');
  submitText = input('Guardar');
  cancelText = input('Cancelar');
  isLoading = input(false);

  onClose = output<void>();
  onSubmit = output<void>();

  handleClose() {
    this.onClose.emit();
  }

  handleSubmit() {
    this.onSubmit.emit();
  }
}
