import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-badge',
  templateUrl: './my-badge.component.html',
  styleUrls: ['./my-badge.component.css']
})
export class MyBadgeComponent implements OnInit {

  @Input()
  ntTxt?: string;

  @Input()
  ntCnt?: number;

  @Output()
  ntClk?: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  btnClk() {
    console.log('Notification Cliked')
    this.ntClk.emit(this.ntCnt)
  }
}
