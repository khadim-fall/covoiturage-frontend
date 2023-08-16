import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from '../modele/administrateur';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlServeur = "http://localhost:8080/api/covoiturage";
  constructor(private http : HttpClient) { }


  public getAdmins(): Observable<Administrateur[]> {
    return this.http.get<Administrateur[]>(`${this.urlServeur}`+"/admins" );
  }
}
