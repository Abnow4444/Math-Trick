import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'math-game-body',
  templateUrl: './game-body.component.html',
  styleUrls: ['./game-body.component.css']
})
export class GameBodyComponent implements OnInit {

  imageWidth: number = 10;
  cardQuote: string = '';
  cardImageUrl: string = '';
  cardDescription: string = '';
  cardCounter: number = 0;
  generatorNumberSize: number = 4;

  cardArr: any = [
    {
      "cardId": 1,
      "cardQuote": "Everything around you is numbers",
      "cardImageUrl": "assets/image_1.PNG",
      "cardDescription": "~~~ Click Next to Start ~~~"
    },
    {
      "cardId": 2,
      "cardQuote": "Take a TWO-DIGIT number in your mind!",
      "cardImageUrl": "assets/image_2.jpg",
      "cardDescription": "Example: 22"
    },
    {
      "cardId": 3,
      "cardQuote": "Now, Add the digits of your Number",
      "cardImageUrl": "assets/image_3.jpg",
      "cardDescription": "Example: 22 => 2 + 2 => 4"
    },
    {
      "cardId": 4,
      "cardQuote": "Now, Subtract the SUM from your TWO-DIGIT number",
      "cardImageUrl": "assets/image_4.jpg",
      "cardDescription": "Example: 22 - 4 => 18"
    },
    {
      "cardId": 5,
      "cardQuote": "Stop the generator and add that number to your result",
      "cardImageUrl": "NOIMAGE",
      "cardDescription": ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.cardCounter = 0;
    this.cardQuote = this.cardArr[this.cardCounter].cardQuote;
    this.cardImageUrl = this.cardArr[this.cardCounter].cardImageUrl;
    this.cardDescription = this.cardArr[this.cardCounter].cardDescription;
  }

  setCardDetails(counter: number): void{
    this.cardQuote = this.cardArr[counter].cardQuote;
    this.cardImageUrl = this.cardArr[counter].cardImageUrl;
    this.cardDescription = this.cardArr[counter].cardDescription;
  }

  nextCard(): void{
    if(this.cardCounter < 4){
      this.cardCounter++;
      this.setCardDetails(this.cardCounter);
    }
  }

  goBack(): void{
    if(this.cardCounter > 0){
      this.cardCounter--;
      this.setCardDetails(this.cardCounter);
    }
  }
}
