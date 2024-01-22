import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrajetComponent } from './components/trajet/trajet.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AddreservationComponent } from './components/addreservation/addreservation.component';
import { AddtrajetComponent } from './components/addtrajet/addtrajet.component';
import { UpdateTrajetComponent } from './components/update-trajet/update-trajet.component';
import { TypeTrajetComponent } from './components/type-trajet/type-trajet.component';
import { VilleComponent } from './components/ville/ville.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './components/guards/authentication.guard';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "", component : LoginComponent},
  {path : "home", component : HomeComponent, canActivate:[AuthenticationGuard]},


    { path: "type-trajet", component: TypeTrajetComponent },
    { path: "ville", component: VilleComponent },
    { path: "trajet", component: TrajetComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: "addtrajet", component: AddtrajetComponent },
    { path: "update-trajet/:id", component: UpdateTrajetComponent },
    { path: 'addreservation', component: AddreservationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
