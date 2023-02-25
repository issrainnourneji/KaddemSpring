import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GestionEmployeeRoutingModule } from './gestion-employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeeComponent } from './list-employee/list-employee.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestionEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GestionEmployeeModule { }
