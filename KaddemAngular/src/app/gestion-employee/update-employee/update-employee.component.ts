import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/Models/Employe';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  myId=0;
  myEmploye!:Employe;
  reactiveForm=this.fb.group(
    {
       idEmp:[''],
      firstName:[''],
      lastName:[''],
      solde:['']
    }
  );
  constructor(private AR:ActivatedRoute,private fb:FormBuilder, private R:Router, private ServiceEmp:EmployeeServiceService) { }

  ngOnInit(): void {
    this.ServiceEmp.getEmployeById(this.AR.snapshot.params["idEmp"]).subscribe(data=>{
      this.myEmploye=data;


      this.reactiveForm.patchValue({idEmp: this.myEmploye.idEmp ,firstName:this.myEmploye.firstName,lastName:this.myEmploye.lastName,solde:this.myEmploye.solde});

    });
}
  update(){
    this.ServiceEmp.UpdateEmploye(this.reactiveForm.value).subscribe(data=>{
      this.R.navigate(['listEmployee']);
      }
      )
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
