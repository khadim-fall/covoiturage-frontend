import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trajet } from 'src/app/modele/trajet';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent implements OnInit{

  trajets: any[] | undefined;
  url: string = "http://localhost:8080/";
  constructor(private apiService : ApiService , private router :Router){}

  ngOnInit():void {
    this.getAllTrajet();
  }

  public getAllTrajet(){
    this.apiService.getTrajets().subscribe(
      (data) =>{
      //console.log(data);
      this.trajets= data;
    });
  }
  updateTrajet(id: number){
    this.router.navigate(['update-trajet', id]);
  }

  deleteTrajet(id:number){
    let confirme = confirm("êtes vous sûr de vouloir supprimer ce trajet?");
    if (confirme){
      this.apiService.deleteTrajet(id).subscribe(data =>{
      this.trajets=this.trajets?.filter(trajet=>trajet.id !==id);

      })
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }




}
