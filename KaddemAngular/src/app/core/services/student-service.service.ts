import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../models/student';

@Injectable()
//({
 // providedIn: 'root'
//})
export class StudentServiceService {
  url = "http://localhost:8080/student";
  constructor(private http:HttpClient) { }


  getAllStudents(){
    return this.http.get<student[]>(this.url+"/GetAll");
  }
  deleteStudent(id:number){
    return this.http.delete(this.url+"/delete/"+id);
  }
  addStudent(etudiant:student){
    return this.http.post(this.url+"/add" ,etudiant);
  }
  updateStudent(etudiant : student){
    return this.http.put(this.url+"/update",etudiant)
  }


}
