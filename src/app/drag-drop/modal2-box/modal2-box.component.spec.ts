import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2BoxComponent } from './modal2-box.component';

describe('Modal2BoxComponent', () => {
  let component: Modal2BoxComponent;
  let fixture: ComponentFixture<Modal2BoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal2BoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal2BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
