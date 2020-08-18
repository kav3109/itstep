import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "./core/servises/questions.service";
import {AnswersService} from "./core/servises/answers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app-test-angular';

  isHidden: string = "hidden"; // condition
  btn: string = "Start Test"; // button controller
  arrQuest: Array<any> = []; // array of questions
  questTitle: string; // title of question
  answers: Array<any>; // array of answers in the question
  acc: number = 0;

  constructor(
    private questionService: QuestionsService,
    private answerService: AnswersService
  ) { }

  ngOnInit(): void {
    this.arrQuest = this.questionService.getQuestions();
    this.acc = this.arrQuest.length;
  }

  changeButton(): void {
    if(this.acc > 0 && this.btn === 'Start Test') {
      this.btn = 'Next';
      this.isHidden = '';
    } else if(this.acc === 1) {
      this.btn = 'Start Test';
      this.isHidden = 'hidden';
      this.acc = this.questionService.getQuestions().length;
    } else {
      this.btn = 'Next';
      this.acc -= 1;
    }
  }
  //TODO get data from datafile



  // isHidden: boolean = false;
  // text: string = 'test-string-data';
  // arr: string[] = ['test', 'data'];
  //
  // toggle(): void {
  //   this.isHidden = !this.isHidden;
  // }
}
