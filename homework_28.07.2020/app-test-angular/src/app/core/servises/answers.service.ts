import { Injectable } from '@angular/core';
import {Answers} from "../interfaces/answers";
import {ANSWERS} from "../data/answers.mock";

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor() { }
  getQuestions(): Array<Answers> {
    return ANSWERS;
  }

}
