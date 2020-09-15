import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PhonebookService } from '../phonebook.service';

@Component({
  selector: 'app-phonebook-create',
  templateUrl: './phonebook-create.component.html',
  styleUrls: ['./phonebook-create.component.css']
})
export class PhonebookCreateComponent implements OnInit {

  @Output() isAvailable = new EventEmitter();
  isCreate: boolean = true;
  phonebookservice: PhonebookService;

  constructor(phonebookservice: PhonebookService) {
    this.phonebookservice = phonebookservice;
  }

  ngOnInit(): void {
  }

  cancelContact() {
    this.isCreate = !this.isCreate;
    this.isAvailable.emit(this.isCreate);
  }

  saveContact(name, mobile) {
    this.phonebookservice.postPhoneBookContact(name, mobile)
      .subscribe(x => {
        if (x) {
          this.isCreate = !this.isCreate;
          this.isAvailable.emit(this.isCreate);
        }
        else {
          alert("Error, Could not create phonebook contact");
        }
        
      }, error => console.error(error));
  }

}
