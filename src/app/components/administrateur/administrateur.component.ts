import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit{

  constructor(private apiService: ApiService){}

  administrateurs:any=[];

  getAllAdmin(): void{
    this.apiService.getAdmins().subscribe(data =>{
      //console.log(data);
      this.administrateurs= data;
    },error =>{console.log(error)}
    );
  }
  ngOnInit(): void {
    
    this.getAllAdmin();
  }
}
