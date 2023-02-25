import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Competence } from 'src/app/core/models/Competence';
import { student } from 'src/app/core/models/student';
import { StudentServiceService } from 'src/app/core/services/student-service.service';
import { CompetenceService } from 'src/app/core/services/competence.service' ;
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() studentList!:student[];

  @Output() addingModeOff = new EventEmitter()
  

  ShSkillsform=false ;


  reactiveForm = this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(3)]],
    lastName: ['',[Validators.required]],
    option:['',[Validators.required]],
    skills: this.fb.array([])
    });
    
    addStudent(){
      let etudiant =new student();
      etudiant.nomE=this.reactiveForm.get('firstName')?.value;
      etudiant.prenomE=this.reactiveForm.get('lastName')?.value;
      etudiant.option=this.reactiveForm.get('option')?.value;
 
      this.studentService.addStudent(etudiant).subscribe(etudiant=>this.studentList.push(etudiant as student));
      this.addingModeOff.emit();
      this.snackBar.open('Student added','Close',{duration:3000});
 
     }
     
    
  constructor(private fb:FormBuilder,private studentService:StudentServiceService ,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

}
