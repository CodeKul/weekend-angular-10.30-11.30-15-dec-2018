import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicsapp';
  isVsbl = true

  notificationCount(cnt : number) {
    this.title = 'Count is '+cnt
  }
}
