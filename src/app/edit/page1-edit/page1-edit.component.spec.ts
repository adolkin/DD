import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1EditComponent } from './page1-edit.component';

describe('Page1EditComponent', () => {
  let component: Page1EditComponent;
  let fixture: ComponentFixture<Page1EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
