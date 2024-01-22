import { Injectable } from '@angular/core';
import { Observable, of, throwError } from "rxjs";
import { Utilisateur } from '../modele/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: Utilisateur[] = [];
  authenticatedUser: Utilisateur | undefined;

  constructor() {
    this.users.push({
      nom: "khadim", password: "passer",
      id: 0,
      prenom: undefined,
      email: undefined,
      login: undefined,
      telephone: undefined,
      adresse: undefined,
      cni: undefined,
      dateNaissance: undefined,
      permis: undefined,
      categoriePermis: undefined,
      addProfil: undefined,
      userId: undefined,
      abstractProfil: undefined,
      profils: undefined,
      reservations: undefined,
      vehicules: undefined,
      dateCreate: undefined,
      dateUpdate: undefined,
      archive: undefined });
      this.users.push({
        nom: "bamba", password: "passer1",
        id: 0,
        prenom: undefined,
        email: undefined,
        login: undefined,
        telephone: undefined,
        adresse: undefined,
        cni: undefined,
        dateNaissance: undefined,
        permis: undefined,
        categoriePermis: undefined,
        addProfil: undefined,
        userId: undefined,
        abstractProfil: undefined,
        profils: undefined,
        reservations: undefined,
        vehicules: undefined,
        dateCreate: undefined,
        dateUpdate: undefined,
        archive: undefined });
  }

  public login(username: string, password: string): Observable<Utilisateur> {
    let appUser = this.users.find(u => u.nom == username);
    if (!appUser) return throwError(() => new Error("User not Found"));
    if (appUser.password != password) {
      return throwError(() => new Error("Nom d'utilisateur et/ou mot de pass incorrect(s)!"));
    }
    return of(appUser);
  }

  public authenticateUser(appUser: Utilisateur): Observable<boolean> {
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({ username: appUser.nom }));
    return of(true);
  }
  public isAuthenticated() {
    return this.authenticatedUser != undefined;
  }
  public logout(): Observable<boolean> {
    this.authenticatedUser = undefined;
    localStorage.removeItem(("authUser"));
    return of(true);
  }
}
