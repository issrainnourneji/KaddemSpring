import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/Models/Employe';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  Employe!:Employe[];
  constructor(private fb:FormBuilder ,private R:Router,  private employeS: EmployeeServiceService) { }

  ngOnInit(): void {
  }

  reactiveForm = this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    solde:['',[Validators.required]]
    });
  Add(){

    this.employeS.AddEmploye(this.reactiveForm.value).subscribe(data =>{
     console.log('addE');
     this.R.navigate(['listEmployee'])

    })
  }

  get idEmp(){
    return this.reactiveForm.get('idEmp')
  }
  get firstName(){
    return this.reactiveForm.get('firstName');

  }
  get lastName(){
    return this.reactiveForm.get('lastName');

  }
  get solde(){
    return this.reactiveForm.get('solde');

  }

}
