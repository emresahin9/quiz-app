import { Injectable } from '@angular/core';
import questionsData from '../../assets/questions.json';  
import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getQuestions():Question[]{
    return questionsData;
  }
}
