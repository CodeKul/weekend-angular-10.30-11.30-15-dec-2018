import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calcNum = ''
  constructor() { }

  ngOnInit() {
  }

  calC(num: number) {
    console.log(num)
    this.calcNum += num
    console.log(this.calcNum)
  }

  CE() {
    this.calcNum = ''
    console.log(this.calcNum)
  }

  mkEql() {
    this.calcNum = eval(this.calcNum)
    console.log(this.calcNum)
  }
}
