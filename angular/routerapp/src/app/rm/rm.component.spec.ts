import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmComponent } from './rm.component';

describe('RmComponent', () => {
  let component: RmComponent;
  let fixture: ComponentFixture<RmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
