import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmntComponent } from './appmnt.component';

describe('AppmntComponent', () => {
  let component: AppmntComponent;
  let fixture: ComponentFixture<AppmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
