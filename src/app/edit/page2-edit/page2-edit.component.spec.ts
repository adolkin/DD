import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2EditComponent } from './page2-edit.component';

describe('Page2EditComponent', () => {
  let component: Page2EditComponent;
  let fixture: ComponentFixture<Page2EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
