import { Injectable, EventEmitter } from '@angular/core';
import { InfoEmoji } from '../inter-comp-v1/emojis/info-emoji';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  private progress: number = 0
  private prgEm: EventEmitter<number> = new EventEmitter()

  constructor() { }

  private plus() {
    this.progress = this.progress >= 100 ? this.progress = 100 : this.progress += 25
    console.log(this.progress)
  }

  private minus() {
    this.progress = this.progress <= 0 ? this.progress = 0 : this.progress -= 25
    console.log(this.progress)
  }

  makeProgress(what: number) {
    if (what == 1) this.plus()
    else this.minus()
    this.prgEm.emit(this.progress)
  }

  progressNotifier(cbFn: (prg: number) => void) {
    this.prgEm.subscribe( emPrg => cbFn(emPrg) )
  }
}
