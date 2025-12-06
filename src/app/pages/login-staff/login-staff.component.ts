import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AccesoService } from '../../services/acceso.service';
import { ModalViewInfComponent } from '../../components/modal-view-inf/modal-view-inf.component';
import { LoginRequest } from '../../interfaces/LoginRequest';

@Component({
  selector: 'app-login-staff',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-staff.component.html',
  styleUrl: './login-staff.component.css'
})
export class LoginStaffComponent {
  readonly dialog = inject(MatDialog);
  private accesoService = inject(AccesoService)
  correo: string = '';
  password: string = '';
  mostrarPassword: boolean = false;
  error: string = '';
  cargando: boolean = false;


  constructor(private router: Router) { }

  iniciarSesion() {
    this.error = '';
    if (!this.correo || !this.password) {
      const dialogRef = this.dialog.open(ModalViewInfComponent, {
        data: {
          mensaje: "Completa todos los campos."
        },
      });
      return;
    }
    else {
      const nuevo: LoginRequest = {
        EMAIL: this.correo,
        PASSWORD: this.password,
      };

      this.accesoService.Login(nuevo).subscribe({
        next: (data) => {
          if (data.success) {
            var rol = data.detail[0].ROL
            localStorage.setItem("ROL", rol)
            localStorage.setItem("TOKEN", data.token)

            if (rol == 'Recepcionista') {
              this.router.navigate(['/clientes']);
            }
            else if (rol == 'Entrenador') {
              this.router.navigate(['/clientes']);
            }
            else if (rol == 'Administrador') {
              this.router.navigate(['/clientes']);
            }

          } else {

          }
        }, error: (error) => {
          console.log(error.message);
        }
      })
    }

    this.cargando = true;

    // Simulamos una petición al servidor

  }

  alternarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  volver() {
    this.router.navigate(['/']);
  }
}

