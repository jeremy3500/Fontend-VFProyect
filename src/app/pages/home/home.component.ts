import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  clases = [
    {
      id: 1,
      nombre: 'Crossfit',
      descripcion: 'Entrenamiento de alta intensidad',
      horario: '06:00 - 07:00',
      entrenador: 'Carlos López',
      capacidad: 20,
      imagen: 'assets/crossfit.jpg'
    },
    {
      id: 2,
      nombre: 'Yoga',
      descripcion: 'Flexibilidad y relajación',
      horario: '08:00 - 09:00',
      entrenador: 'María García',
      capacidad: 15,
      imagen: 'assets/yoga.jpg'
    },
    {
      id: 3,
      nombre: 'Spinning',
      descripcion: 'Cardio intenso en bicicleta',
      horario: '18:00 - 19:00',
      entrenador: 'Juan Martínez',
      capacidad: 25,
      imagen: 'assets/spinning.jpg'
    },
    {
      id: 4,
      nombre: 'Boxeo',
      descripcion: 'Defensa personal y cardio',
      horario: '19:00 - 20:00',
      entrenador: 'Miguel Rodríguez',
      capacidad: 15,
      imagen: 'assets/boxeo.jpg'
    }
  ];

  planes = [
    {
      nombre: 'Básico',
      precio: '$29',
      caracteristicas: ['Acceso a máquinas', 'Horario: 6am - 6pm', 'WiFi gratis']
    },
    {
      nombre: 'Premium',
      precio: '$59',
      caracteristicas: ['Acceso 24/7', 'Todas las clases', 'Entrenador personal', 'Toalla incluida'],
      popular: true
    },
    {
      nombre: 'Elite',
      precio: '$99',
      caracteristicas: ['Acceso ilimitado', 'Todas las clases', 'Nutricionista', 'Seguimiento personalizado']
    }
  ];

  irAPlanes() {
    this.router.navigate(['/planes']);
  }

  irALogin() {
    this.router.navigate(['/login-staff']);
  }
}
