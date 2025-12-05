import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { Cliente } from '../../interfaces/Cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  private accesoService = inject(AccesoService)
  public listaClientes: Cliente[] = []

  constructor() {
    this.accesoService.getListaClientes().subscribe({
      next: (data) => {
        if (data.detail.length > 0) {
          this.listaClientes = data.detail;
        }
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }
}
