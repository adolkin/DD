import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ViewComponent } from './page2-view.component';

describe('Page2ViewComponent', () => {
  let component: Page2ViewComponent;
  let fixture: ComponentFixture<Page2ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
