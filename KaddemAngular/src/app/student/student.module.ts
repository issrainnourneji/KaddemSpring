import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { StudentServiceService } from '../core/services/student-service.service';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { CompetenceService } from '../core/services/competence.service';
import {  MatSnackBar, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    StudentsListComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent
  ],
  providers:[StudentServiceService,CompetenceService,MatSnackBar],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule

  ]
})
export class StudentModule { }
