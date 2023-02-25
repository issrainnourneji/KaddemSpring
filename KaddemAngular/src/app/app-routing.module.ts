import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
    path: 'listDepartement',
    loadChildren:() =>import('./gestion-departement/gestion-departement.module').then(m => m.GestionDepartementModule)
    },
    {
      path: 'listEmployee',
      loadChildren:() =>import('./gestion-employee/gestion-employee.module').then(m => m.GestionEmployeeModule)
      },
 { path: 'studentList',
  loadChildren:()=>import('./student/student.module').then(x => x.StudentModule)},
  {path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
