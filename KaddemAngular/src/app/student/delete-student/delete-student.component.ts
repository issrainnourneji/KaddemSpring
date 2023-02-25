import { Component, Input, OnInit } from '@angular/core';
import { student } from 'src/app/core/models/student';
import { StudentServiceService } from 'src/app/core/services/student-service.service';
import { StudentsListComponent } from '../students-list/students-list.component';
@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {



  constructor(private studentService :StudentServiceService) { }

  ngOnInit(): void {
  }

}
