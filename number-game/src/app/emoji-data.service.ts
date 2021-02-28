import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmojiDataService {

  constructor(private http: HttpClient) { }

  getEmojiData(){
    return this.http.get("https://unpkg.com/emoji.json@13.1.0/emoji.json");
  }
}
