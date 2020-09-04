import { Component } from '@angular/core';
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pomodoro';

  started: boolean = false;
  selectedWorkTime: number = 2;
  selectedShortTimeout: number = 5;
  selectedLongTimeout: number = 20;
  mmStart: number = this.selectedWorkTime;
  ssStart: number = 0;
  timer: number;
  sections: object = {
    one: false,
    two: false,
    three: false,
    four: false
  };

  startTime(): void {
    this.started = true;
    this.timer = setInterval(() => {

      //stop timers
      if(this.ssStart === 0 && this.mmStart === 0) {
        clearInterval(this.timer);
        return this.mmStart = this.selectedWorkTime;
      }
      //
      if(this.ssStart === 0 && this.mmStart === this.selectedWorkTime) {
        this.ssStart = 60;
        this.mmStart = this.selectedWorkTime - 1;
      }
      if(this.ssStart === 0 && this.mmStart !== this.selectedWorkTime) {
        this.ssStart = 60;
        this.mmStart -= 1;
      }
      this.ssStart -= 1;
    }, 200);//TODO set param for production 1000
  }

  stopTime(): void {
    this.started = false;
    this.ssStart = 0;
    this.mmStart = 0;
  }
}

