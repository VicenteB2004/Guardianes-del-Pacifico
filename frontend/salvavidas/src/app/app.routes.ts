import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReunionesComponent } from './reuniones/reuniones.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'reuniones',
        component: ReunionesComponent,
      },
      {
        path: 'calendario',
        component: CalendarioComponent,
      },
      {
        path: 'reportes',
        component: ReportesComponent,
      },
      {
        path: 'galeria',
        component: GaleriaComponent,
      },
      {
        path: 'estadisticas',
        component: EstadisticasComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'configuracion',
        component: ConfiguracionComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
