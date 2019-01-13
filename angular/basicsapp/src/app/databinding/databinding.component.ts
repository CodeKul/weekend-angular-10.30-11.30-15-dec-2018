import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  institute = 'codekul'
  type = 'text'

  constructor() { }

  ngOnInit() {
  }

  date() {
    return new Date()
  }

  myClk(evDt : any ) {
    console.log(evDt)
  }

}
