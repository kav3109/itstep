import { Component, OnInit } from '@angular/core';
import {Template} from "../core/interfaces/template";
import {TemplateService} from "../core/services/template.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: any = {};

  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {
    this.car = this.templateService.getCar();
  }

}
