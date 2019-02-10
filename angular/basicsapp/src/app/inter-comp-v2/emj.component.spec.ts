import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmjComponent } from './emj.component';

describe('EmjComponent', () => {
  let component: EmjComponent;
  let fixture: ComponentFixture<EmjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
