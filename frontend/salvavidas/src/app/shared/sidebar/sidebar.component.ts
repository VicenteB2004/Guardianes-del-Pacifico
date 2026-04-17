import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isOpen = input(true);

  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'calendar_month',
      label: 'Reuniones',
      route: '/reuniones',
      badge: 3,
    },
    {
      icon: 'event',
      label: 'Calendario',
      route: '/calendario',
    },
    {
      icon: 'trending_up',
      label: 'Reportes',
      route: '/reportes',
    },
    {
      icon: 'photo_library',
      label: 'Galería',
      route: '/galeria',
    },
    {
      icon: 'bar_chart',
      label: 'Estadísticas',
      route: '/estadisticas',
    },
    {
      icon: 'people',
      label: 'Usuarios',
      route: '/usuarios',
    },
    {
      icon: 'settings',
      label: 'Configuración',
      route: '/configuracion',
    },
  ];
}
