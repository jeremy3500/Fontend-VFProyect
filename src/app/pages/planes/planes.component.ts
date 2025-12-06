import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent {
  planSeleccionado: number = 0;
  coachAgregado = false;

  planes = [
    {
      id: 1,
      nombre: 'PLAN TRIMESTRAL',
      destacado: true,
      inscripcion: 'Gratis',
      mantenimiento: 'S/ 99.90/año',
      fidelidad: '12 meses',
      precioOriginal: 119.90,
      precioFinal: 79.90,
      descripcion: 'Acceso completo por 3 meses.',
      caracteristicas: [
        'Acceso a todas las sedes',
        'Clases virtuales incluidas',
        'Aplicación móvil',
        'Seguimiento personalizado'
      ]
    },
    {
      id: 2,
      nombre: 'PLAN SEMESTRAL',
      destacado: false,
      inscripcion: 'Gratis',
      mantenimiento: 'S/ 99.90/año',
      fidelidad: '12 meses',
      precioOriginal: 89.90,
      precioFinal: 69.90,
      descripcion: 'Acceso completo por 6 meses.',
      caracteristicas: [
        'Acceso a una sede',
        'Horarios flexibles',
        'Descuentos especiales',
        'Comunidad fit'
      ]
    },
    {
      id: 3,
      nombre: 'PLAN ANUAL',
      destacado: false,
      inscripcion: 'Gratis',
      mantenimiento: 'S/ 99.90/año',
      fidelidad: 'Sin',
      precioOriginal: 99.90,
      precioFinal: 89.90,
      descripcion: 'Acceso completo por 1 año.',
      caracteristicas: [
        'Acceso a sedes seleccionadas',
        'Mayor flexibilidad',
        'Sin fidelización',
        'Acceso a promociones'
      ]
    }
  ];

  addons = [
    {
      id: 'coach',
      nombre: 'SMART FIT COACH',
      precio: 28.90,
      descripcion: 'Entrenamiento personalizado con coaches certificados'
    }
  ];

  constructor(private router: Router) {}

  obtenerPlanSeleccionado() {
    return this.planes.find(p => p.id === this.planSeleccionado);
  }

  seleccionarPlan(idPlan: number) {
    this.planSeleccionado = idPlan;
  }

  agregarCoach() {
    this.coachAgregado = !this.coachAgregado;
  }

  continuarRegistro() {
    localStorage.setItem("ID_PLAN", this.planSeleccionado.toString())
    console.log('Plan seleccionado:', this.planSeleccionado);
    if (this.planSeleccionado) {
      console.log('Plan seleccionado:', this.planSeleccionado);
      console.log('Coach agregado:', this.coachAgregado);
      this.router.navigate(['/registro']);
    } else {
      alert('Por favor selecciona un plan');
    }
  }

  volver() {
    this.router.navigate(['/']);
  }
}
