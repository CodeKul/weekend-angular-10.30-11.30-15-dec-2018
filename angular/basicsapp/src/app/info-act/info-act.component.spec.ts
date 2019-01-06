import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoActComponent } from './info-act.component';

describe('InfoActComponent', () => {
  let component: InfoActComponent;
  let fixture: ComponentFixture<InfoActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
