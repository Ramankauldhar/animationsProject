import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquiriumDetailsComponent } from './components/aquirium-details/aquirium-details.component';
import { CasaLomaDetailsComponent } from './components/casa-loma-details/casa-loma-details.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'details', component:DetailsComponent},
  {path:"aquarium", component:AquiriumDetailsComponent},
  {path:"casaLoma", component:CasaLomaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
