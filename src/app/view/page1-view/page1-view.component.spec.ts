import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1ViewComponent } from './page1-view.component';

describe('Page1ViewComponent', () => {
  let component: Page1ViewComponent;
  let fixture: ComponentFixture<Page1ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
