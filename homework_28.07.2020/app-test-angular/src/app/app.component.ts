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

  questIsHidden: string = "hidden"; // test condition
  resultIsHidden: string = "hidden"; // result condition
  btn: string = "Start Test"; // button controller
  arrQuest: Array<any> = []; // array of questions
  arrResults: Array<any> = []; // array of user's answers
  questTitle: string = 'question'; // title of question
  questId: number; // question id
  answers: Array<any>; // array of answers in the question
  acc: number = 0; // counter
  count: number; // count of questions
  right: number = 0; // count of correct answers
  wrong: number = 0; // count of incorrect answers

  constructor(
    private questionService: QuestionsService,
    private answerService: AnswersService
  ) { }

  ngOnInit(): void {
    this.arrQuest = this.questionService.getQuestions();
    this.count = this.arrQuest.length;
  }

  clickOnButton(): void {

    if(this.getResult() === null && this.btn !== 'Start Test') return; // check selected answer
    if(this.count > 0 && this.btn === 'Start Test') { // start test
      this.right = 0;
      this.wrong = 0;
      this.arrResults = [];
      this.btn = 'Next';
      this.questIsHidden = '';
      this.resultIsHidden = 'hidden';
      this.setQuestion(this.acc);
      this.acc += 1;
    } else if(this.acc === this.count) { // finish test and show result
      this.btn = 'Start Test';
      this.questIsHidden = 'hidden';
      this.acc = 0;
      this.checkResult();
      this.resultIsHidden = '';
    } else { // listen steps
      this.btn = 'Next';
      this.setQuestion(this.acc);
      this.acc += 1;
    }
  }

  setQuestion(index): void {
    this.answers = this.arrQuest[index].answers;
    this.questTitle = this.arrQuest[index].question;
    this.questId = this.arrQuest[index].id;
  }

  getResult(): void {

    let el = document.querySelectorAll('input[name="answer"]'), result = null, htmlInput;

    el.forEach((value) => {
      htmlInput = value as HTMLInputElement;
      if(htmlInput.checked === true) {
        htmlInput.checked = false;
        result = htmlInput.value;
        this.arrResults.push({id: this.questId, answer: result});
      }
    });
    return result;
  }

  checkResult(): void {
    let win;
    const correctAnswers = this.answerService.getQuestions();

    if(this.arrResults.length !== this.answerService.getQuestions().length) console.error('Something went wrong!!!');

    this.arrResults.forEach(val1 => {
      correctAnswers.forEach(val2 => {
        if(val1.id === val2.id) win = val2.answer;
      });
      (val1.answer === win)? this.right += 1: this.wrong += 1;
    });
  }
}
