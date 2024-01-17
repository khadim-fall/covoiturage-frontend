import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trajet } from '../modele/trajet';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlServeur = "http://localhost:8081/covoiturage-services/v1/";
  private END_POINT_ADMIN = "/administrateurs/all";
  private END_POINT_TRAJET = "/trajet/all";
  constructor(private http: HttpClient) { }

  //****************************************service admin */
  public getAdmins(): Observable<[]> {
    return this.http.get<[]>(`${this.urlServeur}` + this.END_POINT_ADMIN);
  }

  //****************************************service trajest */
  //get trajets
  public getTrajets(): Observable<any> {
    return this.http.get<any[]>(this.urlServeur + 'trajets/all');
  }
  //ajouter trajet
  addTrajet(trajet: Trajet) {
    return this.http.post<Trajet>(`${this.urlServeur}trajets/create`, trajet);
  }
  // Get Trajet by Id - Read
  getTrajetById(id: number): Observable<Trajet> {
    return this.http.get<Trajet>(`${this.urlServeur}find/${id}`);
  }
  //Update trajet -update
  updateTrajet(id?: number, trajet?: Trajet): Observable<any> {
    return this.http.put<any>(`${this.urlServeur}modifier/${id}`, trajet);
  }
  //Delete trajet- deleted
  deleteTrajet(trajetId: number): Observable<any> {
    return this.http.delete<any>(`${this.urlServeur}supprimer/${trajetId}`);
  }
}
