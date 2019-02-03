import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-view-related',
  templateUrl: './view-related.component.html',
  styleUrls: ['./view-related.component.css']
})
export class ViewRelatedComponent implements OnInit {

  @ViewChild('myNm')
  myNxhdgm: ElementRef

  @ContentChild('myH1')
  cntH1 : ElementRef

  constructor() { }

  ngOnInit() {
    console.log(this.cntH1)
    this.myNxhdgm.nativeElement.value = 'android codekul'
    console.log(this.myNxhdgm.nativeElement.value)
    this.myNxhdgm.nativeElement.style.border = '1px solid red'
    this.myNxhdgm.nativeElement.onclick = () => {
      console.log(`Input clicked`)
    }
  }
}
