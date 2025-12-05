import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Observable } from 'rxjs';
import { ResponseAcceso } from '../interfaces/ResponseAcceso';
import { ResponseClientes } from '../interfaces/ResponseClientes';
import { ResponseEntrenadores } from '../interfaces/ResponseEntrenadores';
import { ResponseClases } from '../interfaces/ResponseClases';

@Injectable({
     providedIn: 'root'
})
export class AccesoService {

     private http = inject(HttpClient);
     private baseUrl: string = appsettings.apiUrl;

     constructor() { }

     getListaClientes(): Observable<ResponseClientes> {
          return this.http.get<ResponseClientes>(`${this.baseUrl}Service/GET_LIST_CLIENTES`)
     }

     getListaEntrenadores(): Observable<ResponseEntrenadores> {
          return this.http.get<ResponseEntrenadores>(`${this.baseUrl}Service/GET_LIST_ENTRENADORES`)
     }

     getListaClases(): Observable<ResponseClases> {
          return this.http.get<ResponseClases>(`${this.baseUrl}Service/GET_LIST_CLASES`)
     }

     validarToken(token: string): Observable<ResponseAcceso> {
          return this.http.get<ResponseAcceso>(`${this.baseUrl}Service/VALIDATION_TOKEN?token=${token}`)
     }
}
