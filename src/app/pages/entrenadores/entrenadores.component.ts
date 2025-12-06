import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { CommonModule } from '@angular/common';
import { Entrenador } from '../../interfaces/Entrenador';
import { EntrenadorRequest } from '../../interfaces/EntrenadorRequest';

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
    this.asignarListas()
  }

  agregarInstructor(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const nuevo: EntrenadorRequest = {
      NOMBRE: formData.get('nombre') as string,
      EMAIL: formData.get('email') as string,
      TELEFONO: formData.get('telefono') as string,
      DOCUMENTO: formData.get('documento') as string,
      ESPECIALIDAD: formData.get('especialidad') as string,
    };
    this.accesoService.SetNewEntrenador(nuevo).subscribe({
      next: (data) => {
        if (data.success) {
          this.asignarListas()
        } else {
          
        }
      }, error: (error) => {
        console.log(error.message);
      }
    })

    form.reset();
  }

  asignarListas() {
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
