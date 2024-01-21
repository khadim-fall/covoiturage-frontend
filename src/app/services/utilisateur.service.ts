import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../modele/utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private urlServeur = "http://localhost:8081/covoiturage-services/v1/";

  constructor(private http: HttpClient) { }



  addUtilisateur(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(`${this.urlServeur}utilisateurs/create`, utilisateur);
  }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.urlServeur}utilisateurs/all`);
  }
}
