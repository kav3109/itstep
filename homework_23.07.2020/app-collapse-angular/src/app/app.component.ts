import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-collapse-angular';
  info: string = '';

  getInfo(type) {
    return this.info = type;
  }
}
