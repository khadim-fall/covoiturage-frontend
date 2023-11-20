import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trajet } from 'src/app/modele/trajet';
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

  data:any;

  form = new FormGroup({
    duree: new FormControl('', [Validators.required]),
    typeTrajet: new FormControl('', [Validators.required]),
    villeDeDepart: new FormControl('', [Validators.required]),
    villeArrivee: new FormControl('', [Validators.required]),
    distance: new FormControl('', [Validators.required]),
    dateDepart: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required])
  })

  onSubmit(){
    this.data = this.form.value;
    console.log(this.data);

    this.apiService.addTrajet(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}
