import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GestionDepartementRoutingModule } from './gestion-departement-routing.module';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { DeleteDepartementComponent } from './delete-departement/delete-departement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListDepartementComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    DeleteDepartementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestionDepartementRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ListDepartementComponent
  ]
})
export class GestionDepartementModule { }
