import { Component, OnInit } from '@angular/core';
import {TemplateService} from "../core/services/template.service";

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {

  plane: any = {};
  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {
    this.plane = this.templateService.getPlane();
  }

}
