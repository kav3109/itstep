import {Component, OnInit} from '@angular/core';
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {Sections} from "./sections";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'pomodoro';

  sec: number = 50; // for test 1sec = 50ms TODO set 1000 for production
  started: boolean = false;
  selectedWorkTime: number = 1;
  selectedShortTimeout: number = 1;
  selectedLongTimeout: number = 1;
  mmStart: number = 1;// helper for iteration timer
  ssStart: number = 0; // helper for iteration timer
  timer: number; //set interval for iteration
  pomoTimer: number; //set global interval
  counter: number = 0; //helper for global timer
  theme: string = 'white';
  themes: Array<string> = ['red', 'yellow', 'green', 'pink'];
  intervals: Array<number> = [2, 3, 4, 5, 10, 15, 20, 25, 30, 60];
  sections: Array<Sections>;

  startPomodoro(): void {
    this.started = true;
    this.setTimers();
    this.pomoTimer = setInterval(() => {
      let iteration: any = this.sections[this.counter];
      if(this.counter === this.sections.length) return this.stopPomodoro();
      if(!iteration.started && iteration.time !== 0) {
        this.playAudio(iteration.type);
        iteration.started = true;
        this.setTimer(iteration.time);
      }
    }, this.sec);
  }

  setTimer(time: number): void {
    this.mmStart = time;
    this.timer = setInterval(() => {
      //stop timers
      if(this.ssStart === 0 && this.mmStart === 0) {
        clearInterval(this.timer);
        this.counter++;
        return;
      }
      //check start position
      if(this.mmStart === time && this.ssStart === 0) {
        this.mmStart = time - 1;
        this.ssStart = 60;
      }
      //check started position
      if(this.mmStart !== time && this.ssStart === 0) {
        this.mmStart -= 1;
        this.ssStart = 60;
      }
      this.ssStart -= 1;
    }, this.sec);
  }

  stopPomodoro():void {
    this.started = false;
    clearInterval(this.pomoTimer);
    clearInterval(this.timer);
    this.counter = 0;
    this.ssStart = 0;
    this.mmStart = this.selectedWorkTime;
    this.setTimers(1);
  }

  playAudio(res: string): void{
    let audio = new Audio();
    if(res === 'work') audio.src = "../../assets/work.mp3";
    if(res === 'coffee') audio.src = "../../assets/coffee.mp3";
    if(res === 'break') audio.src = "../../assets/break.mp3";
    audio.load();
    audio.play();
  }

  setTimers(time?:number): void {
    if(typeof time === "number")
      this.mmStart = this.selectedLongTimeout=this.selectedShortTimeout=this.selectedWorkTime=time;
    this.sections = [
      {id: 0, started: false, time: this.selectedWorkTime, type: 'work'},
      {id: 1, started: false, time: this.selectedShortTimeout, type: 'coffee'},
      {id: 2, started: false, time: this.selectedWorkTime, type: 'work'},
      {id: 3, started: false, time: this.selectedShortTimeout, type: 'coffee'},
      {id: 4, started: false, time: this.selectedWorkTime, type: 'work'},
      {id: 5, started: false, time: this.selectedShortTimeout, type: 'coffee'},
      {id: 6, started: false, time: this.selectedWorkTime, type: 'work'},
      {id: 7, started: false, time: this.selectedLongTimeout, type: 'break'}
    ]
  }

  setColor(str1:string, str2:string): void {
    this.themes[this.themes.indexOf(str2)] = str1; // delete pair value in combobox;
  }

  ngOnInit(): void {
    this.setTimers();
  }
}
