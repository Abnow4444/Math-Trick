import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'math-game-body',
  templateUrl: './game-body.component.html',
  styleUrls: ['./game-body.component.css']
})
export class GameBodyComponent implements OnInit {

  cardQuote: string = 'Everything around you is numbers';

  constructor() { }

  ngOnInit(): void {
  }

}
