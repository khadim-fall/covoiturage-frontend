import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTrajet } from 'src/app/modele/typeTrajet';
import { Trajet } from 'src/app/modele/trajet';
import { TrajetService } from 'src/app/services/trajet.service';
import { TypeTrajetService } from 'src/app/services/type-trajet.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent implements OnInit {

  typeTrajets!: TypeTrajet[];
  typeTrajet!: TypeTrajet;
  cityName = '';
  trajets: Trajet[] = [];
  constructor(private apiService: ApiService, private trajetService: TrajetService, private typeTrajetService: TypeTrajetService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTrajet();
    this.getTypeTrajet();
  }
  public addCity() {
    if (this.cityName != null && this.cityName != '') {
      this.typeTrajet.designation = this.cityName;
    }
  }

  public getAllTrajet() {
    this.trajetService.getTrajets().subscribe(
      (data) => {
        console.log(data);
        this.trajets = data;
      });
  }
  addTrajet(trajet: Trajet): void {
    this.trajetService.addTrajet(trajet).subscribe(() => this.getAllTrajet());
  }
  //type de trajet
  public getTypeTrajet() {
    this.typeTrajetService.getTypeTrajets().subscribe(
      (data) => {
        // console.log(data);
        this.typeTrajets = data;
      });
  }
  updateTrajet(id: number) {
    this.router.navigate(['update-trajet', id]);
  }

   deleteTrajet(id: number) {
    let confirme = confirm("êtes vous sûr de vouloir supprimer ce trajet?");
    if (confirme) {
      this.trajetService.deleteTrajet(id).subscribe(data => {
        this.trajets = this.trajets?.filter(trajet => trajet.id !== id);

      })
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  } 




}
