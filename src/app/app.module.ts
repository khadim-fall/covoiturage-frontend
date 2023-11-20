import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrajetComponent } from './components/trajet/trajet.component';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AddreservationComponent } from './components/addreservation/addreservation.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddtrajetComponent } from './components/addtrajet/addtrajet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UpdateTrajetComponent } from './components/update-trajet/update-trajet.component';
import { TypeTrajetComponent } from './components/type-trajet/type-trajet.component';
import { VilleComponent } from './components/ville/ville.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrajetComponent,
    AdministrateurComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ReservationComponent,
    AddreservationComponent,
    AddtrajetComponent,
    UpdateTrajetComponent,
    TypeTrajetComponent,
    VilleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
