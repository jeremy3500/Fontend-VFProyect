import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EntrenadoresComponent } from './pages/entrenadores/entrenadores.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginRolesComponent } from './pages/login-roles/login-roles.component';
import { LoginStaffComponent } from './pages/login-staff/login-staff.component';
import { RecepcionistaComponent } from './pages/recepcionista/recepcionista.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { authGuard } from './custom/auth.guard';

export const routes: Routes = [
    { path: "login-staff", component: LoginStaffComponent },
    { path: "login-roles", component: LoginRolesComponent },
    { path: "login/recepcionista", component: RecepcionistaComponent, canActivate: [authGuard] },
    { path: "login/administrador", component: AdministradorComponent, canActivate: [authGuard] },
    { path: "login/instructor", component: InstructorComponent, canActivate: [authGuard] },
    {
        path: "", component: LayoutComponent,
        children: [
            { path: "", component: HomeComponent },
            { path: "inicio", component: HomeComponent },
            { path: "planes", component: PlanesComponent },
            { path: "registro", component: RegistroComponent },
            { path: "clientes", component: ClientesComponent },
            { path: "entrenadores", component: EntrenadoresComponent },
            { path: "clases", component: ClasesComponent }
        ]
    }
];

