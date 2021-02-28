import { Component, OnInit, Input } from '@angular/core';
import { EmojiDataService } from '../emoji-data.service';

@Component({
  selector: 'math-emoji-box',
  templateUrl: './emoji-box.component.html',
  styleUrls: ['./emoji-box.component.css']
})
export class EmojiBoxComponent implements OnInit {

  emojiArr: any = [];
  randomEmoji: any = '';
  randomEmojiName: string = '';
  randomEmojigroup: string = '';
  @Input()
  userGeneratedNumber!: number;
  @Input()
  toggleBoardAndResultEmoji!: boolean;
  constructor(private emojiDataService: EmojiDataService) { }

  ngOnInit(): void {
    this.emojiDataService.getEmojiData().subscribe(
      res => {
        // console.log(res);
        this.emojiArr = res;
        let randomVal = Math.floor(Math.random()*99) + 1;
        this.randomEmoji = this.emojiArr[randomVal].char;
        this.randomEmojiName = this.emojiArr[randomVal].name;
        this.randomEmojigroup = this.emojiArr[randomVal].group
        for(let i=1; i<=9; i++){
          this.emojiArr[i-1].char = this.emojiArr[Math.floor(Math.random()*99) + 1].char;
          this.emojiArr[2*i - 1].char = this.emojiArr[Math.floor(Math.random()*99) + 1].char;
        }
        for(let j=1; j<=9; j++){
          this.emojiArr[9*j - 1 + this.userGeneratedNumber].char = this.randomEmoji;
        }
      }
    )
    // console.log(this.userGeneratedNumber);
    console.log(this.randomEmojiName + this.randomEmojigroup)
  }

}
