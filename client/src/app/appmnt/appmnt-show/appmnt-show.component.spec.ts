import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmntShowComponent } from './appmnt-show.component';

describe('AppmntShowComponent', () => {
  let component: AppmntShowComponent;
  let fixture: ComponentFixture<AppmntShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmntShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmntShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
