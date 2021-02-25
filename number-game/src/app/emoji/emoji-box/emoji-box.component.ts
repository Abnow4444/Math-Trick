import { Component, OnInit } from '@angular/core';
import { EmojiDataService } from '../emoji-data.service';

@Component({
  selector: 'math-emoji-box',
  templateUrl: './emoji-box.component.html',
  styleUrls: ['./emoji-box.component.css']
})
export class EmojiBoxComponent implements OnInit {

  emojiArr: any = [];
  constructor(private emojiDataService: EmojiDataService) { }

  ngOnInit(): void {
    this.emojiDataService.getEmojiData().subscribe(
      res => {
        // console.log(res);
        this.emojiArr = res;
      }
    )
  }

}
