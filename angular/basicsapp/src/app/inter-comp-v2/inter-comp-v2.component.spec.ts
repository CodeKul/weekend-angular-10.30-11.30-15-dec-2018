import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCompV2Component } from './inter-comp-v2.component';

describe('InterCompV2Component', () => {
  let component: InterCompV2Component;
  let fixture: ComponentFixture<InterCompV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCompV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCompV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
