import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { DepartementServiceService } from 'src/app/Services/departement-service.service';


@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  Depart!:Departement[];
  constructor(private fb:FormBuilder ,private R:Router,  private departS: DepartementServiceService) { }

  ngOnInit(): void {
  }

  reactiveForm = this.fb.group({
    nomDepart:['',[Validators.required]]
    });
  Add(){

    this.departS.AddDepart(this.reactiveForm.value).subscribe(data =>{
     console.log('add');
     this.R.navigate(['listDepartement'])

    })
  }

  get idDepart(){
    return this.reactiveForm.get('idDepart')
  }
  get nomDepart(){
    return this.reactiveForm.get('nomDepart');

  }

}
