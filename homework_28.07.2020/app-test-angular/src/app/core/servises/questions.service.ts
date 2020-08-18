import { Injectable } from '@angular/core';
import {Questions} from "../interfaces/questions";
import {QUESTIONS} from "../data/questions.mock";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
  getQuestions(): Array<Questions> {
    return QUESTIONS;
  }

}
