import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-staff',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-staff.component.html',
  styleUrl: './login-staff.component.css'
})
export class LoginStaffComponent {
  correo: string = '';
  password: string = '';
  mostrarPassword: boolean = false;
  error: string = '';
  cargando: boolean = false;

  // Credenciales de demostración
  usuariosValidos = [
    { 
      correo: 'recepcionista@gym.com', 
      password: '123456', 
      rol: 'recepcionista',
      nombre: 'Recepcionista Demo'
    },
    { 
      correo: 'admin@gym.com', 
      password: '123456', 
      rol: 'administrador',
      nombre: 'Administrador Demo'
    },
    { 
      correo: 'instructor@gym.com', 
      password: '123456', 
      rol: 'instructor',
      nombre: 'Instructor Demo'
    }
  ];

  constructor(private router: Router) {}

  iniciarSesion() {
    this.error = '';

    if (!this.correo || !this.password) {
      this.error = 'Por favor completa todos los campos';
      return;
    }

    this.cargando = true;

    // Simulamos una petición al servidor
    setTimeout(() => {
      const usuario = this.usuariosValidos.find(
        u => u.correo === this.correo && u.password === this.password
      );

      if (usuario) {
        // Guardamos los datos del usuario en localStorage
        localStorage.setItem('userRole', usuario.rol);
        localStorage.setItem('userEmail', usuario.correo);
        localStorage.setItem('userName', usuario.nombre);
        localStorage.setItem('token', 'demo-token-' + Date.now()); // Token simulado
        localStorage.setItem('IdPerfil', usuario.rol); // Para compatibilidad con authGuard
        
        // Navegamos al selector de roles
        this.router.navigate(['/login-roles']);
      } else {
        this.error = 'Correo o contraseña incorrectos';
        this.cargando = false;
      }
    }, 1000);
  }

  alternarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  volver() {
    this.router.navigate(['/']);
  }
}

