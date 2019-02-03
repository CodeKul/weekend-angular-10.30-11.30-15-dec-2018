import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBootComponent } from './my-boot.component';

describe('MyBootComponent', () => {
  let component: MyBootComponent;
  let fixture: ComponentFixture<MyBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
