import { AggrService } from './aggr.service';
import { SampleService } from './sample.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers: [SampleService]
})
export class ServicesComponent implements OnInit {

  cntr : number = 0
  constructor(
    private service: SampleService,
    private aggr : AggrService
  ) { }

  ngOnInit() {
  }

  onInr(){
    this.cntr = this.service.cnt++
  }
}
