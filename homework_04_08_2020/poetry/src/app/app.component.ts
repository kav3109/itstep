import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'poetry';
  background: string;
  fontColor: string;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ua']);
    translate.setDefaultLang('en');
    translate.use(translate.defaultLang);
  }

  public setBackground(color): void {
    this.background = color;
    document.body.style.backgroundColor = this.background;
    if(this.background === 'black') {
      let el = document.getElementById('clouds');
      el.style.opacity = '0.1';
    }
  }

  public setFontColor(color): void {
    this.fontColor = color;
  }
}
