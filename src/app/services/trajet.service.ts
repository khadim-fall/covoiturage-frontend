import { Injectable } from '@angular/core';
import { Trajet } from '../modele/trajet';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {
  trajets!:Trajet[];
  trajet: any;

  constructor() {

  }
  listTrajet(): Trajet[] {
    return this.trajets;
  }
  ajouterTrajet(trajet:Trajet){
    return this.trajets.push(trajet);
  }
  supprimerTrajet(trajet:Trajet){
    const index =this.trajets.indexOf(trajet, 0);
    if (index>-1) {
      this.trajets.splice(index,1);
    }
  }
  consulterTrajet(idTrajet:number):Trajet{
    //this.trajet=this.trajets.find(t => t.id == idTrajet);
    return this.trajet;
  }
  modifierTrajet(trajet:Trajet){
    this.supprimerTrajet(trajet);
    this.ajouterTrajet(trajet);
  }
}
