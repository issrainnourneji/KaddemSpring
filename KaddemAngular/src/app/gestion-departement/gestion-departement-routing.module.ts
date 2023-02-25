import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';

const routes: Routes = [
  {path : '' , component : ListDepartementComponent},
  {path :'add' , component : AddDepartementComponent},
  {path :'update/:idDepart' , component : UpdateDepartementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDepartementRoutingModule { }
