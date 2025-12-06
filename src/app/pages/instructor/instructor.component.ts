import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AccesoService } from '../../services/acceso.service';
import { Entrenador } from '../../interfaces/Entrenador';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent {
  private accesoService = inject(AccesoService)
  public listaEntreador: Entrenador[] = []

  constructor(private router: Router) {
    this.accesoService.getListaEntrenadores().subscribe({
      next: (data) => {
        if (data.detail.length > 0) {
          this.listaEntreador = data.detail;
        }
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }



}
