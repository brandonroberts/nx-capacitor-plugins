import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() {}

  public getMessages(): Observable<Message[]> {
    return from(Http.request({
      method: 'GET',
      url: 'http://localhost:3000/messages'
    })).pipe(map(response => response.data));
  }

  // public getMessageById(id: number): Message {
  //   return this.messages[id];
  // }
}
