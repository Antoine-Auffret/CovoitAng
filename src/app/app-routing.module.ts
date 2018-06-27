import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTrajetComponent } from './show-trajet/show-trajet.component';

const routes: Routes = [
  { path: 'trajet/:id', component: ShowTrajetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
