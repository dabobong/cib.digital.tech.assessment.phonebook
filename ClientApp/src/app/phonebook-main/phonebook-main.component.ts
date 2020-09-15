import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalEntryData, ModalPhonebookData } from '../modal-data';

@Component({
  selector: 'app-phonebook-main',
  templateUrl: './phonebook-main.component.html',
  styleUrls: ['./phonebook-main.component.css']
})

export class PhonebookMainComponent implements OnInit {

  @Output() isAvailable = new EventEmitter();
  isCreate: Boolean;
  name: string;
  phoneNumber: string;
  search: string;
  contacts: object;
  entry: ModalEntryData;
  phonbook: ModalPhonebookData;

  constructor(private http: HttpClient) {
    this.isCreate = false;
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      this.contacts = data;
    })
  }

  onChange(value) {
    this.isCreate = value;
  }

}
