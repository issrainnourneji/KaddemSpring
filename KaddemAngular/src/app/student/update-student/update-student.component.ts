import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { student } from 'src/app/core/models/student';
import { StudentServiceService } from 'src/app/core/services/student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})

export class UpdateStudentComponent implements OnInit {
  @Input() studentList!:student[];
  @Input() etudiantAM!:student;
  @Output() updateModeOff=new EventEmitter;
  
  reactiveForm = this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(3)]],
    lastName: ['',[Validators.required]],
    option:['',[Validators.required]]
   
    });


    updateStudent(){
      let NvEtudiant=new student();
      NvEtudiant.nomE=this.reactiveForm.get('firstName')?.value;
      NvEtudiant.prenomE=this.reactiveForm.get('lastName')?.value;
      NvEtudiant.option=this.reactiveForm.get('option')?.value;
      NvEtudiant.idEtudiant=this.etudiantAM.idEtudiant;

      this.studentService.updateStudent(NvEtudiant).subscribe();
      this.updateList(this.etudiantAM,NvEtudiant);
      this.updateModeOff.emit();
      this.snackbar.open('Student updated','Close',{
        duration: 3000
      });
    }
    updateList(element: student,newElement : student) {
      this.studentList.forEach((value,index)=>{
          if(value==element) this.studentList[index]=newElement;
      });
  }

  constructor(private fb:FormBuilder,private studentService:StudentServiceService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.reactiveForm.get('firstName')?.setValue(this.etudiantAM.nomE);
    this.reactiveForm.get('lastName')?.setValue(this.etudiantAM.prenomE);
    this.reactiveForm.get('option')?.setValue(this.etudiantAM.option);


  }

}
