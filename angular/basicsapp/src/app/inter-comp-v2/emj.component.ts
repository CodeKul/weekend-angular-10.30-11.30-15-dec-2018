import { ComService } from './com.service';
import { Component, OnInit } from '@angular/core';
import { InfoEmoji } from '../inter-comp-v1/emojis/info-emoji';

@Component({
  selector: 'app-emj',
  template: `
  <div class="card" style="width: 18rem;">
    <img [src]="emojiInfo?.emoji" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">{{emojiInfo?.info}}</p>
    </div>
  </div>
  `,
  styles: []
})
export class EmjComponent implements OnInit {

  emojiInfo: InfoEmoji

  infoEmojis = new Array<InfoEmoji>()

  constructor(
    private com: ComService
  ) { }

  ngOnInit() {
    this.infoEmojis.push(
      new InfoEmoji('../../../assets/sad.svg', 'The good times of today, are the sad thoughts of tomorrow.'),
      new InfoEmoji('../../assets/confused.svg', 'Good, better, best. Never let it rest. Til your good is better and your better is best.'),
      new InfoEmoji('../../assets/happy.svg', 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'),
      new InfoEmoji('../../assets/smiling.svg', 'The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.'),
    )
    this.emojiInfo = this.infoEmojis[0]

    this.com.progressNotifier(
      prg => {
        if(prg == 0) {
          this.emojiInfo = this.infoEmojis[0]
        }else if(prg == 25) {
          this.emojiInfo = this.infoEmojis[1]
        }else if(prg == 75){
          this.emojiInfo = this.infoEmojis[2]
        }else {
          this.emojiInfo = this.infoEmojis[3]
        }
      }
    )
  }
}
