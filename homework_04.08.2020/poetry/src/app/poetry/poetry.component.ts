import { Component, OnInit } from '@angular/core';
import {Poems} from "./poems";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.sass']
})
export class PoetryComponent implements OnInit {

  authors: [];
  authorData: string;
  poems: Poems[];
  poem: Poems;
  randomAuthorIndex: number;
  randomPoemIndex: number;
  color: string;
  interval: number = 50000;
  intId: number;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getPoem();
    this.intId = setInterval(() => {this.getPoem(); }, this.interval);
  }

  setCustomInterval(interval: string): void {
    this.interval = Number(interval);
    clearInterval(this.intId);
    this.intId = setInterval(() => {this.getPoem(); }, this.interval);
  }

  getPoem(): void {
    this.apiService.getAuthors().subscribe( (data: []) => {
      this.authors = data[`authors`];
      this.randomAuthorIndex = Math.floor((Math.random() * this.authors.length));
      this.authorData = this.authors[this.randomAuthorIndex];
      this.apiService.getRandomPoem(this.authorData).subscribe((dataPoem: Poems[]) => {
        this.poems = dataPoem;
        this.randomPoemIndex = Math.floor((Math.random() * this.poems.length));
        this.poem = this.poems[this.randomPoemIndex];
      });
    });
  }

}
