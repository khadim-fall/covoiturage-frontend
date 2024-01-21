import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeReservation } from '../modele/typeReservation';

@Injectable({
  providedIn: 'root'
})
export class TypeReservationService {

  private urlServeur = "http://localhost:8081/covoiturage-services/v1/";

  constructor(private http: HttpClient) { }

  getTypeReservations(): Observable<TypeReservation[]> {
    return this.http.get<TypeReservation[]>(`${this.urlServeur}typeReservations/all`);
  }
}
