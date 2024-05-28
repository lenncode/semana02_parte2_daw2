import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ejemplo } from '../models/ejemplo.model';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor(private http: HttpClient) { }
  public registraEjemplo(ejemplo:Ejemplo): Observable<any> {
    return this.http.post("http://localhost:8080/url/ejemplo",ejemplo);

  }
}
