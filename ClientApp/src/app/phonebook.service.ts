import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PhonebookService {

  public phoneBook: PhoneBook[];
  data: object;
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getPhonebookList() {
    return this.http.get<PhoneBook>(this.baseUrl + 'phoneBooks');
  }

  postPhoneBookContact(name, mobile) {
    return this.http.post<PhoneBook>(this.baseUrl + 'phoneBooks/create',
      { Name: name, Mobile: mobile });
  }
}

interface PhoneBook {
  ID: Number;
  Name: string;
  Mobile: number;
}
