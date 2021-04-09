import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './game-body/Card';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(private http: HttpClient) { }

  getCardData(){
    // return this.http.get<Card>('https://sheet.best/api/sheets/15dd85c7-e340-422e-ab0b-851a33aa3247'); //Sheet-Best API
    // return this.http.get<Card>('https://api.sheety.co/15a66da07a2c9fc3b00673d23904e9bb/cardsData/sheet1'); //Sheety API
    return this.http.get<Card>('https://sheet.best/api/sheets/c12edcf6-2b00-42e2-a43a-958a20f07523'); //Sheet-Best API(2)
  }
}
