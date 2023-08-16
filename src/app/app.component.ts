import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontendcovoiturage';
  administrateurs:any=[];
  constructor(private apiService: ApiService){}
  
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
