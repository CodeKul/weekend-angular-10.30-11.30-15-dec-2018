import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  institute = 'codekul'
  type = 'text'
  myVar = ''

  alSts = {
    isWarning: false,
    isSuccess: false,
    isInfo: false,
    isDanger: false
  }

  constructor() { }

  ngOnInit() {
  }

  date() {
    return new Date()
  }

  myClk(evDt: any) {
    console.log(evDt)
  }

  mkAl(wh: string) {
    if (wh === 'success') {
      this.alSts.isSuccess = true
      this.alSts.isDanger = false
      this.alSts.isWarning = false
      this.alSts.isInfo = false
    } else if (wh === 'info') {
      this.alSts.isSuccess = false
      this.alSts.isDanger = false
      this.alSts.isWarning = false
      this.alSts.isInfo = true
    } else if (wh === 'warning') {
      this.alSts.isSuccess = false
      this.alSts.isDanger = false
      this.alSts.isWarning = true
      this.alSts.isInfo = false
    } else {
      this.alSts.isSuccess = false
      this.alSts.isDanger = true
      this.alSts.isWarning = false
      this.alSts.isInfo = false
    }
  }
}
