import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRelatedComponent } from './view-related.component';

describe('ViewRelatedComponent', () => {
  let component: ViewRelatedComponent;
  let fixture: ComponentFixture<ViewRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
