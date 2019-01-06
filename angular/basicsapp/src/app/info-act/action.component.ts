import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  template: `
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  `,
  styles: []
})
export class ActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
