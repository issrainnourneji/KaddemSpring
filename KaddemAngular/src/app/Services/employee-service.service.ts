import { Injectable } from '@angular/core';
import { Employe} from '../Models/Employe';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  urlAdd='http://localhost:8080/employe/add';
  urlApi = 'http://localhost:8080/employe/all';
  urlDel='http://localhost:8080/employe/delete';
  urlById = 'http://localhost:8080/employe/get';
  urlup='http://localhost:8080/employe/updateE';
  Employe=[];
  constructor(private http: HttpClient) { }
  getData():Observable<Employe[]> {
    return this.http.get<Employe[]>(this.urlApi);
}
  AddEmploye(Employe: Employe):Observable<Employe>{
    return this.http.post<Employe>(this.urlAdd,Employe)
   }
   deleteEmploye(id:Number){
    return this.http.delete(this.urlDel+'/'+id);
  }
  getEmployeById(id: Number){
    return this.http.get<Employe>(this.urlById+'/'+id);
  }
  UpdateEmploye(employe:Employe){
    alert("success update");
    return this.http.put<Employe>(this.urlup, employe);
  }


  }
