import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  actAdm: boolean = false;
  actInstruct: boolean = false;
  isToken: boolean = false;

  constructor(private router: Router) {
    this.asigntacion()
  }

  cerrarSesion() {
    localStorage.setItem("ROL", '')
    localStorage.setItem("TOKEN", '')

    this.asigntacion()
    this.router.navigate(['']);
  }

  asigntacion() {
    this.actAdm = false;
    this.actInstruct = false;
    this.isToken = false;
    var myrol = localStorage.getItem("ROL");
    var mytoken = localStorage.getItem("TOKEN");
    if (myrol == 'Recepcionista' || myrol == 'Administrador') this.actAdm = true
    if (myrol == 'Entrenador') this.actInstruct = true
    if (mytoken != '') this.isToken = true
  }
}
