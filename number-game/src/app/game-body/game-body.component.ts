import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../card-data.service';

@Component({
  selector: 'math-game-body',
  templateUrl: './game-body.component.html',
  styleUrls: ['./game-body.component.css'],
})
export class GameBodyComponent implements OnInit {
  imageWidth: number = 10; //Width of the images displayed inside the card

  /* Card Properties */
  cardQuote: string = '';
  cardImageUrl: string = '';
  cardDescription: string = '';
  cardCounter: number = 0;
  generatorNumberFontSize: number = 4;// Generator number font-size
  randomGeneratorNumber: number = 1; // Random Number used on generator
  setInterval: any; //To handle Interval
  highlightSelectedGenerator: boolean = false;


  //Empty Array
  cardArr: any = [];

  /* Hard-coded Data initially */
  // cardArr: any = [
  //   {
  //     "cardId": 1,
  //     "cardQuote": "Everything around you is numbers",
  //     "cardImageUrl": "assets/image_1.PNG",
  //     "cardDescription": "~~~ Click Next to Start ~~~"
  //   },
  //   {
  //     "cardId": 2,
  //     "cardQuote": "Take a TWO-DIGIT number in your mind!",
  //     "cardImageUrl": "assets/image_2.jpg",
  //     "cardDescription": "Example: 22"
  //   },
  //   {
  //     "cardId": 3,
  //     "cardQuote": "Now, Add the digits of your Number",
  //     "cardImageUrl": "assets/image_3.jpg",
  //     "cardDescription": "Example: 22 => 2 + 2 => 4"
  //   },
  //   {
  //     "cardId": 4,
  //     "cardQuote": "Now, Subtract the SUM from your TWO-DIGIT number",
  //     "cardImageUrl": "assets/image_4.jpg",
  //     "cardDescription": "Example: 22 - 4 => 18"
  //   },
  //   {
  //     "cardId": 5,
  //     "cardQuote": "Stop the generator and add that number to your result",
  //     "cardImageUrl": "NOIMAGE",
  //     "cardDescription": ""
  //   }
  // ]

  constructor(private cardData: CardDataService) {}

  ngOnInit(): void {
    this.getCardDataFromDB(); //CardService to get the Card-Data
  }

  //This method subscribes the Observable from the Card-data service and populates the data into empty array
  getCardDataFromDB(): void {
    this.cardData.getCardData().subscribe((res) => {
      this.cardArr = res; //Copied response to Card Array
      this.populateCardData();
    });
  }

  //This method populates Data into Cards
  populateCardData(): void {
    this.cardCounter = 0;
    this.cardQuote = this.cardArr[this.cardCounter].cardQuote;
    this.cardImageUrl = this.cardArr[this.cardCounter].cardImageUrl;
    this.cardDescription = this.cardArr[this.cardCounter].cardDescription;
  }

  // Onclick of Next button execute this method
  nextCard(): void {
    if (this.cardCounter < 4) { // 4 is the Card-Array Limit
      this.cardCounter++; //Increment the counter, since we are moving forward
      this.setCardDetails(this.cardCounter);// call this method to set card values based on their Id
    }
  }

  // Onclick of Back button execute this method
  goBack(): void {
    if (this.cardCounter > 0) { // 0 is the initial Value(To Avoid Error)
      this.cardCounter--; // Decrement the counter, since we are moving backward
      this.setCardDetails(this.cardCounter);// call this method to set card values based on their Id
      this.highlightSelectedGenerator = false;
    }
  }

  //This method sets data into the card based on the provided Id
  setCardDetails(counter: number): void {
    this.cardQuote = this.cardArr[counter].cardQuote;
    this.cardImageUrl = this.cardArr[counter].cardImageUrl;
    this.cardDescription = this.cardArr[counter].cardDescription;
  }

  //This method will setInterval for every 200ms to call startGenerator function
  callGenerator(): void{
    this.setInterval = setInterval( () => this.startGenerator(), 200);
  }

  //This method will provide Random numbers between 1 to 10 and makes the highlighterBox to false
  startGenerator(): void{
    let someRandomNumber = Math.floor(Math.random()*10 + 1);
    this.randomGeneratorNumber = someRandomNumber;
    this.highlightSelectedGenerator = false;
  }

  //This method will stop the generator and makes the highlighterBox to true
  stopGenerator(): void{
    clearInterval(this.setInterval);
    this.highlightSelectedGenerator = true;
  }
}
