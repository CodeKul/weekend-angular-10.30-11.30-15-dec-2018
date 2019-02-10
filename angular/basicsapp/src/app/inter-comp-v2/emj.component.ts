import { ComService } from './com.service';
import { Component, OnInit } from '@angular/core';
import { InfoEmoji } from '../inter-comp-v1/emojis/info-emoji';

@Component({
  selector: 'app-emj',
  template: `
  <div class="card" style="width: 18rem;">
    <img [src]="emojiInfo.emoji" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">{{emojiInfo.info}}</p>
    </div>
  </div>
  `,
  styles: []
})
export class EmjComponent implements OnInit {

  emojiInfo : InfoEmoji

  constructor(
    private com : ComService
  ) { }

  ngOnInit() {
  }
}
