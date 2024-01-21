import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../modele/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private urlServeur = "http://localhost:8081/covoiturage-services/v1/";

  constructor(private http: HttpClient) { }



  addReservation(reservation: Reservation) {
    return this.http.post<Reservation>(`http://localhost:8081/covoiturage-services/v1/reservations/create`, reservation);
  }
}
