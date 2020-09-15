import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookMainComponent } from './phonebook-main.component';

describe('PhonebookMainComponent', () => {
  let component: PhonebookMainComponent;
  let fixture: ComponentFixture<PhonebookMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
