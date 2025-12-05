import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';

  membresias = [
    { id: 1, cliente: 'Juan Pérez', plan: 'Plan Black', estado: 'Activa', vencimiento: '2026-01-05' },
    { id: 2, cliente: 'María García', plan: 'Plan Fit', estado: 'Activa', vencimiento: '2025-12-20' },
    { id: 3, cliente: 'Carlos López', plan: 'Plan Smart', estado: 'Vencida', vencimiento: '2025-11-30' }
  ];

  informes = [
    { id: 1, nombre: 'Reporte de Membresías', fecha: '2025-12-05', tipo: 'PDF' },
    { id: 2, nombre: 'Ingresos Mensuales', fecha: '2025-12-04', tipo: 'Excel' },
    { id: 3, nombre: 'Asistencia Mensual', fecha: '2025-12-03', tipo: 'PDF' }
  ];

  estadisticas = [
    { label: 'Membresías Activas', valor: '150', icono: '👥' },
    { label: 'Ingresos Mensual', valor: '$12,500', icono: '💰' },
    { label: 'Clases Realizadas', valor: '45', icono: '🏋️' },
    { label: 'Instructores', valor: '12', icono: '👨‍🏫' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Administrador';
    this.userEmail = localStorage.getItem('userEmail') || '';
  }

  crearMembresia() {
    console.log('Crear nueva membresía...');
  }

  generarReporte() {
    console.log('Generando reporte...');
  }

  descargarReporte(reporte: any) {
    console.log('Descargando reporte:', reporte.nombre);
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
