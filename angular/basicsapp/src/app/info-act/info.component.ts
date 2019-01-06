import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  `,
  styles: []
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
