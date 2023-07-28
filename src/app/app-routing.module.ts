import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewemployeesComponent } from './UI/modules/newemployees/newemployees.component';

const routes: Routes = [
  {
    path:'newemployees',
    component:NewemployeesComponent
  },
  {path: "**", pathMatch: "full", redirectTo:"listemployeess"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
