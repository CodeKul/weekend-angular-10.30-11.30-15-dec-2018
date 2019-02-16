import { Component, OnInit } from '@angular/core';
import { ComService } from './com.service';

@Component({
  selector: 'app-prg',
  template: `
  <div class="jumbotron">
    <div class="progress">
      <div class="progress-bar" role="progressbar" [style.width]="prgStr" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{progress}}%</div>
    </div>
  </div>
  <div class="jumbotron">
    <input type="button" value="Plus" class="btn btn-primary" (click)="plus()">
    <input type="button" value="Minus" class="btn btn-primary" (click)="minus()">
  </div>
  `,
  styles: []
})
export class PrgComponent implements OnInit {

  prgStr : string;
  progress : number = 0;

  constructor(
    private com : ComService
  ) { }

  ngOnInit() {
  }

  plus() {
   this.com.makeProgress(1)
  }

  minus() {
    this.com.makeProgress(2)
  }
}
