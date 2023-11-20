import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trajet } from 'src/app/modele/trajet';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-trajet',
  templateUrl: './update-trajet.component.html',
  styleUrls: ['./update-trajet.component.css']
})
export class UpdateTrajetComponent implements OnInit{

  trajet?: Trajet;
  data:any;
  constructor(private apiService: ApiService
    , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.apiService.getTrajetById(id)
      .subscribe(data => {
        this.trajet = data;
        console.log(this.trajet);
      })
  }

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
    this.data = this.form.value
    console.log(this.data)

    this.apiService.updateTrajet(this.trajet?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
