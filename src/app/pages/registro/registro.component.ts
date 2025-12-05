import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  tiposIdentificacion = ['DNI', 'Pasaporte', 'Cédula de Identidad'];
  sexos = ['Masculino', 'Femenino', 'Otro', 'Prefiero no decir'];
  
  formulario = {
    tipoIdentificacion: '',
    documentoIdentificacion: '',
    nombreApellido: '',
    correo: '',
    sexo: '',
    telefonoCelular: '',
    fechaNacimiento: '',
    aceptaPrivacidad: false,
    recibeSMS: false,
    recibeWhatsApp: false
  };

  constructor(private router: Router) {}

  continuar() {
    console.log('Formulario de registro:', this.formulario);
    // Aquí puedes hacer la lógica de registro
  }

  volver() {
    this.router.navigate(['/planes']);
  }
}
