import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-boot',
  templateUrl: './my-boot.component.html',
  styleUrls: ['./my-boot.component.css']
})
export class MyBootComponent implements OnInit {

  isOp = true
  
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() { }

  ngOnInit() {
  }
  close() {
    console.log(`It is closed`)
  }
}
