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
    return this.http.get<Card>('https://sheet.best/api/sheets/15dd85c7-e340-422e-ab0b-851a33aa3247');
  }
}
