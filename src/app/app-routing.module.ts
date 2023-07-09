import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASIGNACIONComponent } from './asignacion/asignacion.component';
import { HomeComponent } from './home/home.component';
import { VEHICULOSComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },

  {
    path:'asig',
    component:ASIGNACIONComponent
  },

  {
    path:'veh',
    component:VEHICULOSComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
