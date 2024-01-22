import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontendcovoiturage';

  constructor(public authService:AuthenticationService) {
  }


  ngOnInit(): void {
  }

}
