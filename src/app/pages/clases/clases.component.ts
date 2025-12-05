import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Clase } from '../../interfaces/Clase';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {
  private accesoService = inject(AccesoService);
  private router = inject(Router);
  public listaClase: Clase[] = [];

  // Clases de demostración
  clasesDestacadas = [
    {
      id: 1,
      nombre: 'LATINAION',
      descripcion: 'Disfruta de una clase que fusiona diversos estilos musicales en un programa de entrenamiento apto para todos, manteniendo la cadencia, el estilo y la musicalidad en todo momento mientras te ejercitas y te diviertes.',
      duracion: '45/60 min',
      intensidad: 'Alta',
      imagen: 'assets/LATINAION.png'
    },
    {
      id: 2,
      nombre: 'SMART CROSS',
      descripcion: 'Entrenamiento funcional, dividido por estaciones, donde utilizamos distintos elementos con peso, focalizándolos en la técnica correcta de los movimientos.',
      duracion: '30 min',
      intensidad: 'Media/Alta',
      imagen: 'assets/smartcross.jpg'
    },
    {
      id: 3,
      nombre: 'ABDOMINALES',
      descripcion: 'Entrenamiento focalizado en la zona media del cuerpo, que tiene como objetivo prevenir lesiones, reducir dolores y mejorar nuestra postura a la hora de entrenar y en el día a día.',
      duracion: '30 min',
      intensidad: 'Media/Alta',
      imagen: 'assets/abdominales.jpg'
    },
    {
      id: 4,
      nombre: 'SMART TABATA',
      descripcion: 'Clase de intervalos de alta intensidad, donde ejercicios vigorosos se combinan con breves descansos para maximizar resultados. Mejora tu resistencia, fuerza y salud en general.',
      duracion: '30 min',
      intensidad: 'Alta',
      imagen: 'assets/smarttabata.jpg'
    },
    {
      id: 5,
      nombre: 'ZUMBA',
      descripcion: 'Divierte en una clase que fusiona el baile con una rutina de ejercicios al compás de la música, mejorando tu forma física y coordinación.',
      duracion: '45/50 min',
      intensidad: 'Alta',
      imagen: 'assets/zumba.jpg'
    },
    {
      id: 6,
      nombre: 'BIKE',
      descripcion: 'Clase de ciclo indoor de alta intensidad con música motivadora. Pedalea a tu ritmo mientras nos acompañas en una experiencia de entrenamiento efectivo.',
      duracion: '45/60 min',
      intensidad: 'Alta',
      imagen: 'assets/bike.jpg'
    }
  ];

  claseSeleccionada: any = null;

  constructor() {
    this.accesoService.getListaClases().subscribe({
      next: (data) => {
        if (data.detail.length > 0) {
          this.listaClase = data.detail;
        }
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }

  seleccionarClase(clase: any) {
    this.claseSeleccionada = clase;
  }

  reservarClase(clase: any) {
    console.log('Clase reservada:', clase);
  }

  volver() {
    this.router.navigate(['/']);
  }
}
