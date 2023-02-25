import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/Models/Departement';
import { DepartementServiceService } from 'src/app/Services/departement-service.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
  list:Departement[]=[]
  constructor(private departS : DepartementServiceService) { }

  ngOnInit(): void {
    this.getListDepart();
   // alert(this.list);
   console.log(this.list)
  }
  getListDepart(){
    this.departS.getData().subscribe(
      data=>{this.list=data;
      console.log(this.list);

    }
    )

  }
  DeleteDepart(id:any){
    this.departS.deleteUser(Number(id)).subscribe( () =>this.getListDepart() );
  }

}
