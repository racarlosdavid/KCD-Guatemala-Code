import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegistrarseComponent } from './Components/registrarse/registrarse.component';
import { Reporte4Component } from './Components/reporte4/reporte4.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'registrarse',
    component: RegistrarseComponent
  },
  {
    path:'asistentes',
    component: Reporte4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
