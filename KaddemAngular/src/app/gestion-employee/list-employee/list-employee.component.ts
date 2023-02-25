import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/Models/Employe';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  listE:Employe[]=[]
  constructor(private employeeS : EmployeeServiceService) { }

  ngOnInit(): void {
    this.getListEmploye();
   console.log(this.listE)
  }
  getListEmploye(){
    this.employeeS.getData().subscribe(
      data=>{this.listE=data;
      console.log(this.listE);

    }
    )

  }
  DeleteEmploye(id:any){
    this.employeeS.deleteEmploye(Number(id)).subscribe( () =>this.getListEmploye() );
  }

}
