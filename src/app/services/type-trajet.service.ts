import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.local';
import { TypeTrajet } from '../modele/typeTrajet';

@Injectable({
  providedIn: 'root'
})
export class TypeTrajetService {


  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getTypeTrajets(): Observable<TypeTrajet[]> {
    return this.http.get<TypeTrajet[]>(`${this.apiUrl}/typeTrajets/all`);
  }

}
