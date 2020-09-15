import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookViewComponent } from './phonebook-view.component';

describe('PhonebookViewComponent', () => {
  let component: PhonebookViewComponent;
  let fixture: ComponentFixture<PhonebookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
