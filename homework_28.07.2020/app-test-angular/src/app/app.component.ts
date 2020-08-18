import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-test-angular';

  isHidden: boolean = false;
  text: string = 'test-string-data';
  arr: string[] = ['test', 'data'];

  toggle(): void {
    this.isHidden = !this.isHidden;
  }
}
