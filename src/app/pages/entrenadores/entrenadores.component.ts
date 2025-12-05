import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { CommonModule } from '@angular/common';
import { Entrenador } from '../../interfaces/Entrenador';


@Component({
  selector: 'app-entrenadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrenadores.component.html',
  styleUrl: './entrenadores.component.css'
})
export class EntrenadoresComponent {
  private accesoService = inject(AccesoService)
  public listaEntrenadores: Entrenador[] = []

  constructor() {
    this.accesoService.getListaEntrenadores().subscribe({
      next: (data) => {
        if (data.detail.length > 0) {
          this.listaEntrenadores = data.detail;
        }
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }
}
