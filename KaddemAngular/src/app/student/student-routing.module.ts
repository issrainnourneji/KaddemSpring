import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  {path:'', component:StudentsListComponent},
  {path:'addStudent', component:AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
