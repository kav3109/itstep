import { Injectable } from '@angular/core';
import {Template} from "../interfaces/template";
import {CAR} from "../data/car.mock";
import {SHIP} from "../data/ship.mock";
import {PLANE} from "../data/plane.mock";

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }
  getCar(): Template {
    return CAR;
  }
  getPlane(): Template {
    return PLANE;
  }
  getShip(): Template {
    return SHIP;
  }
}
