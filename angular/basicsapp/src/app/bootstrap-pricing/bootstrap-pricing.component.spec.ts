import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPricingComponent } from './bootstrap-pricing.component';

describe('BootstrapPricingComponent', () => {
  let component: BootstrapPricingComponent;
  let fixture: ComponentFixture<BootstrapPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
