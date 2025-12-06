import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteResquest } from '../../interfaces/ClienteRequest';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewInfComponent } from '../../components/modal-view-inf/modal-view-inf.component';
import { AccesoService } from '../../services/acceso.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  readonly dialog = inject(MatDialog);
  private accesoService = inject(AccesoService)

  tiposIdentificacion = ['DNI'];
  sexos = ['Masculino', 'Femenino'];

  formulario = {
    tipoIdentificacion: '',
    documentoIdentificacion: '',
    nombreApellido: '',
    correo: '',
    sexo: '',
    telefonoCelular: '',
    fechaNacimiento: '',
    aceptaPrivacidad: false,
  };

  constructor(private router: Router) {
    var idplan = localStorage.getItem("ID_PLAN")
  }

  continuar() {
    if (!this.formulario.aceptaPrivacidad) {
      const dialogRef = this.dialog.open(ModalViewInfComponent, {
        data: {
          mensaje: "Debes aceptar los terminos de privacidad."
        },
      });
    }
    else {

      const nuevo: ClienteResquest = {
        NOMBRE: this.formulario.nombreApellido,
        EMAIL: this.formulario.correo,
        TELEFONO: this.formulario.telefonoCelular,
        DOCUMENTO: this.formulario.documentoIdentificacion,
        SEXO: this.formulario.sexo,
        ID_MEMBRESIA: parseInt(localStorage.getItem("ID_PLAN") || "0"),
      };

      this.accesoService.SetNewCliente(nuevo).subscribe({
        next: (data) => {
          if (data.success) {
            const dialogRef = this.dialog.open(ModalViewInfComponent, {
              data: {
                mensaje: "Usuario registrado con exito."
              },
            });
            this.router.navigate(['/']);
          } else {

          }
        }, error: (error) => {
          console.log(error.message);
        }
      })

    }

  }

  volver() {
    this.router.navigate(['/planes']);
  }
}
