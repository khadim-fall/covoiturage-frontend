import { Component, OnInit } from '@angular/core';
import { TypeTrajet } from 'src/app/modele/typeTrajet';
import { TypeTrajetService } from 'src/app/services/type-trajet.service';

@Component({
  selector: 'app-type-trajet',
  templateUrl: './type-trajet.component.html',
  styleUrls: ['./type-trajet.component.css']
})
export class TypeTrajetComponent implements OnInit{


  typeTrajets!:TypeTrajet[];
  constructor(private typeTrajetService: TypeTrajetService) { }

  ngOnInit(): void {
    this.getTypeTrajets();
  }


  public getTypeTrajets() {
    this.typeTrajetService.getTypeTrajets().subscribe(
      (data) => {
        //console.log(data);
        this.typeTrajets = data;
      });
  }

}
