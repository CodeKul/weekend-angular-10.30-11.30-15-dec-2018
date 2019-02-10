import { Directive, TemplateRef, ViewContainerRef, OnInit, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[oppIf]'
})
export class OppIfDirective implements OnInit, OnChanges {

  @Input()
  oppIf : boolean

  constructor(
    private tmRf: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(tmRf)
    console.log(vcRef)
  }

  ngOnInit() {
   
  }
  ngOnChanges() {
    if(!this.oppIf) {
      this.vcRef.createEmbeddedView(this.tmRf)
    }else {
      this.vcRef.clear()
    }
  }
}
