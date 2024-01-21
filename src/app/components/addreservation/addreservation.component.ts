import { TypeReservation } from './../../modele/typeReservation';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtatReservation } from 'src/app/modele/etatReservation';
import { Reservation } from 'src/app/modele/reservation';
import { Trajet } from 'src/app/modele/trajet';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { ReservationService } from 'src/app/services/reservation.service';
import { TrajetService } from 'src/app/services/trajet.service';
import { TypeReservationService } from 'src/app/services/type-reservation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent {

  trajets = new Array<Trajet>()
  typeReservations = new Array<TypeReservation>()
  utilisateurs = new Array<Utilisateur>()



  form = new FormGroup({
    idTrajet: new FormControl('', [Validators.required]),
    idTypeReservation: new FormControl('', [Validators.required]),
    idUtilisateur: new FormControl('', [Validators.required]),
    commentaire: new FormControl('', [Validators.required]),
    etatReservation: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.getAllTrajet();
    this.getAllUtilisateurs();
    this.getAllTypeTrajets();
  }
  constructor(private trajetService: TrajetService, private utilisateurService: UtilisateurService,
    private typeReservationService: TypeReservationService, private reservationService: ReservationService
    ,private router: Router
  ) { }



  public getAllTrajet() {
    this.trajetService.getTrajets().subscribe(
      (data) => {
       // console.log(data);
        this.trajets = data;
      });
  }
  public getAllUtilisateurs() {
    this.utilisateurService.getUtilisateurs().subscribe(
      (data) => {
       // console.log(data);
        this.utilisateurs = data;
      });
  }
  public getAllTypeTrajets() {
    this.typeReservationService.getTypeReservations().subscribe(
      (data) => {
       // console.log(data);
        this.typeReservations = data;
      });
  }

  onSubmit() {
    //console.log("trajet", this.form.get('idTrajet')?.value);
    //console.log("type reservation", this.form.get('idTypeReservation')?.value);
    //console.log("Utilisateur", this.form.get('idUtilisateur')?.value);

    let trajet = new Trajet();
    trajet = Object.assign(trajet, this.trajets?.find(t => t.id == Number(this.form.get('idTrajet')?.value)));
    //console.log(trajet);
    //console.log("Utilisateur", this.form.get('idUtilisateur')?.value);

    let utilisateur = new Utilisateur();
    utilisateur = Object.assign(utilisateur, this.utilisateurs?.find(t => t.id == Number(this.form.get('idUtilisateur')?.value)));
    console.log(utilisateur);

    let typeReservation = new TypeReservation();
    typeReservation = Object.assign(typeReservation, this.typeReservations?.find(t => t.id == Number(this.form.get('idTypeReservation')?.value)));
    //console.log(typeReservation);
    let etatReservation ;
    if(this.form.get('etatReservation')?.value == 'EN_ATTENTE'){

      etatReservation = EtatReservation.EN_ATTENTE
    }else if(this.form.get('etatReservation')?.value == 'CONFIRMER'){
      etatReservation = EtatReservation.CONFIRMER
    }
    else if(this.form.get('etatReservation')?.value == 'TERMINER'){
      etatReservation = EtatReservation.TERMINER
    }
    else {
      etatReservation = EtatReservation.ANNULER
    }
    let reservation: Reservation = {
      id: 1,
      user: utilisateur,
      trajet: trajet,
      commentaire: String(this.form.get('commentaire')?.value),
      etatReservation: etatReservation,
      typeReservation: typeReservation,
      dateCreate: new Date(),
      dateUpdate: new Date(),
      userId: utilisateur.prenom+' ' +utilisateur.nom,
      archive: false,
      designation: trajet.type.designation,
    };


    console.log('reservation',reservation);

    this.reservationService.addReservation(reservation).subscribe(data => {
     // console.log(data)
    })
    //this.router.navigate(['/reservation']);

  }

}
