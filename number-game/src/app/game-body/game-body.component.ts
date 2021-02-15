import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'math-game-body',
  templateUrl: './game-body.component.html',
  styleUrls: ['./game-body.component.css']
})
export class GameBodyComponent implements OnInit {

  cardQuote: string = 'Everything around you is numbers';
  cardImageUrl: string = 'assets/image_1.PNG';
  imageWidth: number = 10;
  cardDescription: string = '~~~ Click Next to Start ~~~'

  constructor() { }

  ngOnInit(): void {
  }

}
