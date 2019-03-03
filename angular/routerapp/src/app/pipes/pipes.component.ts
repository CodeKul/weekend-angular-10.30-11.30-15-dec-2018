import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  amt: number = 154
  date = new Date()
  os = 'android'
  mb = ''
  tb = ''
  mobiles = [
    'android',
    'apple',
    'java',
    'bb',
    'htc',
    'motorola',
    'oppo',
    'vivo',
    'windows',
    'zenfone'
  ]
  constructor() { }

  ngOnInit() {
  }
  onOk() {
    this.mobiles.push(this.tb)
  }
}
