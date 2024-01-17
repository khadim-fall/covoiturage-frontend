import { Injectable } from '@angular/core';
import { Trajet } from '../modele/trajet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.local';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {
  trajets!:Trajet[];
  trajet!: Trajet;

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getTrajets(): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(`${this.apiUrl}/trajets/all`);
  }

  addTrajet(trajet: Trajet): Observable<Trajet> {
    return this.http.post<Trajet>(`${this.apiUrl}/trajets/create`, trajet);
  }

  updateTrajet(trajet: Trajet): Observable<Trajet> {
    return this.http.put<Trajet>(`${this.apiUrl}/trajets/update/${trajet.id}`, trajet);
  }

  deleteTrajet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/trajets/delete/${id}`);
  }
  /* addTrajet(trajet: Trajet): Observable<Trajet> {
    return this.http.post<Trajet>(`${this.apiUrl}/trajets/create`, trajet);
  }

  updateTrajet(trajet: Trajet): Observable<Trajet> {
    return this.http.put<Trajet>(`${this.apiUrl}/trajets/${trajet.id}`, trajet);
  }

  deleteTrajet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/trajets/${id}`);
  } */
}
