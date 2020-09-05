import { Component } from '@angular/core';
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {Sections} from "./sections";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pomodoro';

  sec: number = 50; // for test 1sec = 100ms
  started: boolean = false;
  selectedWorkTime: number = 2;
  selectedShortTimeout: number = 1;
  selectedLongTimeout: number = 3;
  mmStart: number = this.selectedWorkTime;
  ssStart: number = 0;
  timer: number; //set interval for section
  pomoTimer: number; //set interval for pomodora
  counter: number = 0; //
  sections: Array<Sections> = [
    {id: 0, started: false, time: this.selectedWorkTime, type: 'work'},
    {id: 1, started: false, time: this.selectedShortTimeout, type: 'coffee'},
    {id: 2, started: false, time: this.selectedWorkTime, type: 'work'},
    {id: 3, started: false, time: this.selectedShortTimeout, type: 'coffee'},
    {id: 4, started: false, time: this.selectedWorkTime, type: 'work'},
    {id: 5, started: false, time: this.selectedShortTimeout, type: 'coffee'},
    {id: 6, started: false, time: this.selectedWorkTime, type: 'work'},
    {id: 7, started: false, time: this.selectedLongTimeout, type: 'break'}
  ];


  startPomodoro(): void {
    this.started = true;
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
    }, this.sec);//TODO set param for production 1000
  }

  stopPomodoro():void {
    this.started = false;
    clearInterval(this.pomoTimer);
    clearInterval(this.timer);
    this.counter = 0;
    this.ssStart = 0;
    this.mmStart = this.selectedWorkTime;
    this.sections = [
      {id: 0, started: false, time: this.selectedWorkTime, type: 'work'},
      {id: 1, started: false, time: this.selectedShortTimeout, type: 'coffee'},
      {id: 2, started: false, time: this.selectedWorkTime, type: 'work'},
      {id: 3, started: false, time: this.selectedShortTimeout, type: 'coffee'},
      {id: 4, started: false, time: this.selectedWorkTime, type: 'work'},
      {id: 5, started: false, time: this.selectedShortTimeout, type: 'coffee'},
      {id: 6, started: false, time: this.selectedWorkTime, type: 'work'},
      {id: 7, started: false, time: this.selectedLongTimeout, type: 'break'}
    ];
  }

  playAudio(res: string): void{
    let audio = new Audio();
    if(res === 'work') audio.src = "../../assets/work.mp3";
    if(res === 'coffee') audio.src = "../../assets/coffee.mp3";
    if(res === 'break') audio.src = "../../assets/break.mp3";
    audio.load();
    audio.play();
  }
}
