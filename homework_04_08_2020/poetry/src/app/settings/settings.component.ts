import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {TranslateService} from "@ngx-translate/core";
import {PoetryComponent} from "../poetry/poetry.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  arrIntervals: number[] = [10000, 30000, 50000, 70000];
  arrColors: string[] = ['white', 'black'];
  color: string;

  constructor(public translate: TranslateService,
              public app: AppComponent,
              public poem: PoetryComponent) {
    translate.addLangs(['en', 'ua']);
    translate.setDefaultLang('en');
    translate.use(translate.defaultLang);
  }

  ngOnInit(): void {}

}
