import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';

  clases = [
    { 
      id: 1, 
      nombre: 'Crossfit', 
      hora: '06:00 - 07:00', 
      inscritos: 18,
      capacidad: 20,
      estado: 'Próxima'
    },
    { 
      id: 2, 
      nombre: 'Yoga', 
      hora: '08:00 - 09:00', 
      inscritos: 12,
      capacidad: 15,
      estado: 'Próxima'
    },
    { 
      id: 3, 
      nombre: 'Spinning', 
      hora: '18:00 - 19:00', 
      inscritos: 25,
      capacidad: 25,
      estado: 'Realizada'
    }
  ];

  inscritosSeleccionados: any[] = [];
  claseSeleccionada: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Instructor';
    this.userEmail = localStorage.getItem('userEmail') || '';
  }

  verInscritos(clase: any) {
    this.claseSeleccionada = clase;
    // Inscritos de ejemplo que varían según la clase seleccionada
    const inscritosDatabase: { [key: number]: any[] } = {
      1: [
        { id: 1, nombre: 'Juan Pérez', plan: 'Plan Black' },
        { id: 2, nombre: 'María García', plan: 'Plan Fit' },
        { id: 3, nombre: 'Carlos López', plan: 'Plan Smart' },
        { id: 4, nombre: 'Ana Martínez', plan: 'Plan Black' },
        { id: 5, nombre: 'Roberto Sánchez', plan: 'Plan Fit' },
        { id: 6, nombre: 'Laura Díaz', plan: 'Plan Smart' },
        { id: 7, nombre: 'Fernando Ruiz', plan: 'Plan Black' },
        { id: 8, nombre: 'Patricia Gómez', plan: 'Plan Fit' },
        { id: 9, nombre: 'Andrés Vega', plan: 'Plan Smart' },
        { id: 10, nombre: 'Sofía Herrera', plan: 'Plan Black' },
        { id: 11, nombre: 'Diego Morales', plan: 'Plan Fit' },
        { id: 12, nombre: 'Valentina Santos', plan: 'Plan Smart' },
        { id: 13, nombre: 'Miguel Acosta', plan: 'Plan Black' },
        { id: 14, nombre: 'Gabriela López', plan: 'Plan Fit' },
        { id: 15, nombre: 'Julio Castillo', plan: 'Plan Black' },
        { id: 16, nombre: 'Daniela Rivas', plan: 'Plan Smart' },
        { id: 17, nombre: 'Mateo Flores', plan: 'Plan Fit' },
        { id: 18, nombre: 'Isabella Moreno', plan: 'Plan Black' }
      ],
      2: [
        { id: 1, nombre: 'Elena Romero', plan: 'Plan Smart' },
        { id: 2, nombre: 'Gustavo Vargas', plan: 'Plan Fit' },
        { id: 3, nombre: 'Victoria Campos', plan: 'Plan Black' },
        { id: 4, nombre: 'Raúl Domínguez', plan: 'Plan Smart' },
        { id: 5, nombre: 'Catalina Silva', plan: 'Plan Fit' },
        { id: 6, nombre: 'Oscar Jiménez', plan: 'Plan Black' },
        { id: 7, nombre: 'Romina Torres', plan: 'Plan Smart' },
        { id: 8, nombre: 'Fabián Reyes', plan: 'Plan Fit' },
        { id: 9, nombre: 'Isadora Parra', plan: 'Plan Black' },
        { id: 10, nombre: 'Marcelo Soto', plan: 'Plan Smart' },
        { id: 11, nombre: 'Denise Fuentes', plan: 'Plan Fit' },
        { id: 12, nombre: 'Javier Núñez', plan: 'Plan Black' }
      ],
      3: [
        { id: 1, nombre: 'Lorena Ortiz', plan: 'Plan Black' },
        { id: 2, nombre: 'Eduardo Muñoz', plan: 'Plan Fit' },
        { id: 3, nombre: 'Carmen Duque', plan: 'Plan Smart' },
        { id: 4, nombre: 'Sergio Cordero', plan: 'Plan Black' },
        { id: 5, nombre: 'Herminia Vázquez', plan: 'Plan Fit' },
        { id: 6, nombre: 'Felipe Iglesias', plan: 'Plan Smart' },
        { id: 7, nombre: 'Roxana Salazar', plan: 'Plan Black' },
        { id: 8, nombre: 'Xavier Velasco', plan: 'Plan Fit' },
        { id: 9, nombre: 'Yolanda González', plan: 'Plan Smart' },
        { id: 10, nombre: 'Wenceslao Cabrera', plan: 'Plan Black' },
        { id: 11, nombre: 'Ximena Bravo', plan: 'Plan Fit' },
        { id: 12, nombre: 'Zacarías Cruz', plan: 'Plan Smart' },
        { id: 13, nombre: 'Adriana Peña', plan: 'Plan Black' },
        { id: 14, nombre: 'Bernardo Lagos', plan: 'Plan Fit' },
        { id: 15, nombre: 'Claudia Rojas', plan: 'Plan Smart' },
        { id: 16, nombre: 'Damián Estrada', plan: 'Plan Black' },
        { id: 17, nombre: 'Esperanza Oliva', plan: 'Plan Fit' },
        { id: 18, nombre: 'Frida Molina', plan: 'Plan Smart' },
        { id: 19, nombre: 'Gregorio Salinas', plan: 'Plan Black' },
        { id: 20, nombre: 'Hortensia Valenzuela', plan: 'Plan Fit' },
        { id: 21, nombre: 'Ignacio Espinoza', plan: 'Plan Smart' },
        { id: 22, nombre: 'Josefina Riveros', plan: 'Plan Black' },
        { id: 23, nombre: 'Konstantino Pavez', plan: 'Plan Fit' },
        { id: 24, nombre: 'Leonarda Bañados', plan: 'Plan Smart' },
        { id: 25, nombre: 'Mauricio Cornejo', plan: 'Plan Black' }
      ]
    };

    this.inscritosSeleccionados = inscritosDatabase[clase.id] || [];
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
