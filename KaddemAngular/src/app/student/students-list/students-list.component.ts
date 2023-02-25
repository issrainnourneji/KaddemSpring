import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { get } from 'https';
import { student } from 'src/app/core/models/student';
import { StudentServiceService } from 'src/app/core/services/student-service.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  deleting=false;
 id!:Number;
 etudiantAM!:student;
 etudiant!:student;
 studentList:student[]=[]
 adding=false; 
 updating=false;
 filter!:String;

  constructor(private studentService :StudentServiceService,private route:Router,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(){
    this.studentService.getAllStudents().subscribe(data=>this.studentList=data);
    console.log(this.studentList);
  }
  addform(){
    this.adding= !this.adding;
  }

  
  showDelete(etudiant:any){
    this.etudiantAM=etudiant;
    this.deleting=true;
   
  
  }
  hideDelete(){
    this.deleting=false;
  }

  DeleteStudent(){
    let id = this.etudiantAM.idEtudiant

    this.studentService.deleteStudent(id).subscribe(()=>this.getStudents());
    this.removeElementFromArray(id);
    this.hideDelete();
    this.snackBar.open('Student deleted','Close',{
      duration: 3000
    });
   
   }
   removeElementFromArray(id: number) {
    this.studentList.forEach((student,index)=>{
        if(student.idEtudiant==id) 
          this.studentList.splice(index,1);
    });
  }

  modif(etudiant:student){
    this.etudiantAM=etudiant;
    this.updating =!this.updating;
    console.log(this.etudiantAM);
  }
  
  isSearched(nom: any, prenom: any, option: any) {
    if (!this.filter) return true;

    let f = this.filter.toUpperCase().trim();
    return nom.toUpperCase().includes(f) ||
      prenom.toUpperCase().includes(f) ||
      option.toUpperCase().includes(f)
  }

}
