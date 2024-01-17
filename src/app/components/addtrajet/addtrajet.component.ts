import { Ville } from './../../modele/ville';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trajet } from 'src/app/modele/trajet';
import { TypeTrajet } from 'src/app/modele/typeTrajet';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addtrajet',
  templateUrl: './addtrajet.component.html',
  styleUrls: ['./addtrajet.component.css']
})
export class AddtrajetComponent implements OnInit {


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  data: any;
  typeTrajet!: TypeTrajet;
  villeDeDepart!: Ville;
  villeArrivee!: Ville;

  form = new FormGroup({
    duree: new FormControl('', [Validators.required]),
    typeTrajet: new FormControl('', [Validators.required]),
    villeDeDepart: new FormControl('', [Validators.required]),
    villeArrivee: new FormControl('', [Validators.required]),
    distance: new FormControl('', [Validators.required]),
    dateDepart: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required])
  })

  onSubmit() {
    console.log(this.form.get("duree")?.value)
    let type :TypeTrajet={
      id: 1,
      designation: String(this.form.get("designation")?.value),
      dateCreate: new Date(),
      dateUpdate: new Date(),
      userId: 'string',
      archive: true
    }
    let depart :Ville={
      id:1,
      nom:String (this.form.get("villeDeDepart")?.value),
      dateCreate: new Date(),
      dateUpdate:new Date(),
      userId:'string',
      archive:true
    }
    let arrivee :Ville={
      id:1,
      nom:'string',
      dateCreate: new Date(),
      dateUpdate:new Date(),
      userId:'string',
      archive:true
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
    console.log(data1);

    this.data = this.form.value;
    /*this.data.duree = Number(this.form.get("duree")?.value);
    this.data.distance = Number(this.form.get("distance")?.value);
    this.data.prix = Number(this.form.get("prix")?.value);
    this.data.userId = String(this.form.get("userId")?.value);
    this.data.userId = String(this.form.get("userId")?.value);
    this.data.archive = true;
    this.data.depart.nom =String (this.form.get("villeDeDepart")?.value);
    this.data.dateDepart =new Date( String(this.form.get("dateDepart")?.value));
    this.data.type.designation = String(this.form.get("designation")?.value);


    console.log(this.data);*/

    this.apiService.addTrajet(data1).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}
