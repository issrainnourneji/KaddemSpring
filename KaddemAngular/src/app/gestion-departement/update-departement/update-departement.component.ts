import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { DepartementServiceService } from 'src/app/Services/departement-service.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
  myId=0;
  myDepart!:Departement;
  reactiveForm=this.fb.group(
    {
       idDepart:[''],
      nomDepart:['']
    }
  );
  constructor(private AR:ActivatedRoute,private fb:FormBuilder, private R:Router, private ServiceDep:DepartementServiceService ) { }

  ngOnInit(): void {
    this.ServiceDep.getDepartById(this.AR.snapshot.params["idDepart"]).subscribe(data=>{
      this.myDepart=data;


      this.reactiveForm.patchValue({idDepart: this.myDepart.idDepart ,nomDepart:this.myDepart.nomDepart});
      console.log(this.myDepart.nomDepart)
    });
}
  update(){
    this.ServiceDep.UpdateDepart(this.reactiveForm.value).subscribe(data=>{

      this.R.navigate(['listDepartement']);
      }
      )
  }
  get idDepart(){
    return this.reactiveForm.get('idDepart')
  }
  get nomDepart(){
    return this.reactiveForm.get('nomDepart');

  }
}
