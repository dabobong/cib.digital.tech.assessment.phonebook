import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalEntryData, ModalPhonebookData } from '../modal-data';
import { PhonebookService } from '../phonebook.service';

@Component({
  selector: 'app-phonebook-view',
  templateUrl: './phonebook-view.component.html',
  styleUrls: ['./phonebook-view.component.css']
})
export class PhonebookViewComponent implements OnInit {

  @Output() isAvailable = new EventEmitter();
  loading: boolean;
  name: string;
  phoneNumber: string;
  search: string;
  contacts: object;
  isCreate: boolean = false;
  entry: ModalEntryData;
  phonbook: ModalPhonebookData;
  phonebookservice: PhonebookService;

  constructor(phonebookservice: PhonebookService) {
    this.loading = true;
    this.search = '';
    this.name = '';
    this.phoneNumber = '';
    this.phonebookservice = phonebookservice;
  }

  ngOnInit() {
    this.phonebookservice.getPhonebookList()
      .subscribe(data => {
      this.contacts = data;
      this.loading = false;
    }, error => console.error(error));
  }

  addContact() {
    this.isCreate = !this.isCreate;
    this.isAvailable.emit(this.isCreate);
  }

}
