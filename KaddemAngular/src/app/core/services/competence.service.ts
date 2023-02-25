import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competence } from '../models/Competence';

@Injectable(
  // providedIn: 'root'}
  )
export class CompetenceService {
  url="http://localhost:8080/Competence"
  
  constructor(private http : HttpClient) { }
  AddCompetenceAndAssign(c:Competence ){
    return this.http.post(this.url+"/addAndAssignCompetence", c )
  }
}
