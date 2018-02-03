import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmntNewComponent } from './appmnt-new.component';

describe('AppmntNewComponent', () => {
  let component: AppmntNewComponent;
  let fixture: ComponentFixture<AppmntNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmntNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmntNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
