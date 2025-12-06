import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { Cliente } from '../../interfaces/Cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  private accesoService = inject(AccesoService)
  public listaClientes: Cliente[] = []

  modalAbierto: boolean = false;
  clienteSeleccionado: Cliente | null = null;
  nuevoEstado: string = '';

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

  abrirModal(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
    // this.nuevoEstado = cliente.ESTADO;
    this.nuevoEstado = 'inactivo';
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  guardarEstado() {
    if (this.clienteSeleccionado) {
      // this.clienteSeleccionado.ESTADO = this.nuevoEstado;

      // Aquí puedes llamar a tu API para actualizarlo en la BD
      // this.accesoService.actualizarEstadoCliente(this.clienteSeleccionado.ID, this.nuevoEstado)
      //   .subscribe({
      //     next: () => console.log("Estado actualizado correctamente"),
      //     error: (err) => console.log(err)
      //   });
    }

    this.modalAbierto = false;
  }

}
