import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookCreateComponent } from './phonebook-create.component';

describe('PhonebookCreateComponent', () => {
  let component: PhonebookCreateComponent;
  let fixture: ComponentFixture<PhonebookCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
