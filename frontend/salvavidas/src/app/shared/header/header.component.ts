import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggleSidebar = output<void>();

  onMenuClick(): void {
    this.toggleSidebar.emit();
  }

  onLogout(): void {
    // TODO: Implementar lógica de logout
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    console.log('Sesión cerrada');
  }
}
