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
      url: 'https://gist.githubusercontent.com/brandonroberts/29d4d16509f03a0c51a2037b9e75d476/raw/ee88d1246cc0610ad5ff865669d409554d964259/message.json'
    })).pipe(map(response => JSON.parse(response.data).messages));
  }

  // public getMessageById(id: number): Message {
  //   return this.messages[id];
  // }
}
