import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepcionista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recepcionista.component.html',
  styleUrl: './recepcionista.component.css'
})
export class RecepcionistaComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';

  accesos = [
    { id: 1, cliente: 'Juan Pérez', hora: '08:00', fecha: '2025-12-05', estado: 'Activo' },
    { id: 2, cliente: 'María García', hora: '09:30', fecha: '2025-12-05', estado: 'Activo' },
    { id: 3, cliente: 'Carlos López', hora: '10:15', fecha: '2025-12-05', estado: 'Activo' }
  ];

  pagos = [
    { id: 1, cliente: 'Ana Martínez', monto: '$79.90', plan: 'Plan Black', fecha: '2025-12-05', estado: 'Pagado' },
    { id: 2, cliente: 'Roberto Silva', monto: '$69.90', plan: 'Plan Fit', fecha: '2025-12-04', estado: 'Pagado' },
    { id: 3, cliente: 'Elena Ruiz', monto: '$89.90', plan: 'Plan Smart', fecha: '2025-12-03', estado: 'Pendiente' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Recepcionista';
    this.userEmail = localStorage.getItem('userEmail') || '';
  }

  registrarAcceso() {
    console.log('Registrando acceso...');
  }

  registrarPago() {
    console.log('Registrando pago...');
  }

  cerrarSesion() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('IdPerfil');
    this.router.navigate(['/']);
  }

  volver() {
    this.router.navigate(['/login-roles']);
  }
}
