import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-roles.component.html',
  styleUrl: './login-roles.component.css'
})
export class LoginRolesComponent {
  roles = [
    {
      id: 'recepcionista',
      nombre: 'Recepcionista',
      icon: '📋',
      descripcion: 'Registro de accesos y pagos',
      color: '#4CAF50'
    },
    {
      id: 'administrador',
      nombre: 'Administrador/Gerente',
      icon: '👔',
      descripcion: 'Gestión de membresías e informes',
      color: '#2196F3'
    },
    {
      id: 'instructor',
      nombre: 'Instructor',
      icon: '💪',
      descripcion: 'Consulta de inscritos en clases',
      color: '#FF9800'
    },
    {
      id: 'cliente',
      nombre: 'Cliente',
      icon: '👤',
      descripcion: 'Acceso a planes y clases',
      color: '#9C27B0'
    }
  ];

  constructor(private router: Router) {}

  seleccionarRol(rolId: string) {
    this.router.navigate([`/login/${rolId}`]);
  }

  volverHome() {
    this.router.navigate(['/']);
  }
}
