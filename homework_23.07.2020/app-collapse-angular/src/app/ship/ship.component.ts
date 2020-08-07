import { Component, OnInit } from '@angular/core';
import {TemplateService} from "../core/services/template.service";

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  ship: any = {};
  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {
    this.ship = this.templateService.getShip();
  }

}
