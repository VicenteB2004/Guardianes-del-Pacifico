import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';

interface ConfiguracionSistema {
  nombre: string;
  valor: string | boolean;
  tipo: 'texto' | 'boolean' | 'numero';
  descripcion: string;
}

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css',
})
export class ConfiguracionComponent {
  nombreSistema = signal<string>('Guardians del Pacifico');
  emailContacto = signal<string>('admin@gdp.com');
  telefonoEmergencia = signal<string>('+34 911 234 567');
  
  configuraciones = signal<ConfiguracionSistema[]>([
    {
      nombre: 'Notificaciones por Email',
      valor: true,
      tipo: 'boolean',
      descripcion: 'Recibir notificaciones de emergencia por correo electrónico',
    },
    {
      nombre: 'Modo Oscuro',
      valor: false,
      tipo: 'boolean',
      descripcion: 'Activar tema oscuro en la interfaz',
    },
    {
      nombre: 'Autenticación de Dos Factores',
      valor: true,
      tipo: 'boolean',
      descripcion: 'Requerir verificación adicional al iniciar sesión',
    },
    {
      nombre: 'Backups Automáticos',
      valor: true,
      tipo: 'boolean',
      descripcion: 'Realizar copias de seguridad diarias automáticas',
    },
    {
      nombre: 'Región Horaria',
      valor: 'GMT+1',
      tipo: 'texto',
      descripcion: 'Zona horaria del sistema',
    },
    {
      nombre: 'Idioma',
      valor: 'Español',
      tipo: 'texto',
      descripcion: 'Idioma de la interfaz',
    },
  ]);

  estadisticasPlataforma = signal({
    usuariosActivos: '24',
    ultimaActualizacion: '2026-02-20',
    versionSistema: '2.1.0',
    tiempoActividad: '99.8%',
  });

  toggleConfiguracion(index: number) {
    const configs = this.configuraciones();
    if (configs[index].tipo === 'boolean') {
      configs[index].valor = !configs[index].valor;
      this.configuraciones.set([...configs]);
    }
  }

  guardarCambios() {
    alert('Configuración guardada correctamente');
  }

  resetearDefaults() {
    if (confirm('¿Deseas restaurar los valores por defecto?')) {
      alert('Configuración restaurada a valores por defecto');
    }
  }
}
