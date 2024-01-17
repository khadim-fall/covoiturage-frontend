import { Ville } from './../../modele/ville';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trajet } from 'src/app/modele/trajet';
import { TypeTrajet } from 'src/app/modele/typeTrajet';
import { ApiService } from 'src/app/services/api.service';
import { TypeTrajetService } from 'src/app/services/type-trajet.service';

@Component({
  selector: 'app-addtrajet',
  templateUrl: './addtrajet.component.html',
  styleUrls: ['./addtrajet.component.css']
})
export class AddtrajetComponent implements OnInit {


  constructor(private apiService: ApiService, private router: Router, private typeTrajetService: TypeTrajetService) { }

  ngOnInit(): void {
    this.getTypeTrajet()
  }

  data: any;
  typeTrajet!: TypeTrajet;
  villeDeDepart!: Ville;
  villeArrivee!: Ville;
  typeTrajets!: TypeTrajet[];

  form = new FormGroup({
    duree: new FormControl('', [Validators.required]),
    typeTrajet: new FormControl('', [Validators.required]),
    villeDeDepart: new FormControl('', [Validators.required]),
    villeArrivee: new FormControl('', [Validators.required]),
    distance: new FormControl('', [Validators.required]),
    dateDepart: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required])
  })

  public getTypeTrajet() {
    this.typeTrajetService.getTypeTrajets().subscribe(
      (data) => {
        // console.log(data);
        this.typeTrajets = data;
      });
  }

  onSubmit() {

    console.log(this.form.get("duree")?.value)
    let ide = Number(this.form.get('typeTrajet')?.value)

    let type: TypeTrajet = {
      id: ide,
      designation: String(this.form.get('designation')?.value),
      dateCreate: new Date(),
      dateUpdate: new Date(),
      userId: 'string',
      archive: true,
    }
    let depart: Ville = {
      id:1,
      nom: String(this.form.get('depart')?.value),
      dateCreate:new Date(),
      dateUpdate:new Date(),
      userId:'string',
      archive:true,
    }
    let arrivee: Ville = {
      id:2,
      nom:String(this.form.get('arrivee')?.value),
      dateCreate:new Date(),
      dateUpdate:new Date(),
      userId:'string',
      archive:true,
    }

    let data1:Trajet={
      id:1,
      duree: Number(this.form.get("duree")?.value),
      type: type,
      depart: depart,
      arrivee: arrivee,
      distance: Number(this.form.get("distance")?.value),
      dateDepart: new Date(),
      prix: Number(this.form.get("prix")?.value),
      dateCreate: new Date(),
      dateUpdate: new Date(),
      userId: 'string',
      archive: true
    }

    this.apiService.addTrajet(data1).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/trajet']);
  }
}
