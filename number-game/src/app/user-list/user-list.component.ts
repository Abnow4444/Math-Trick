import { HttpClient } from '@angular/common/http';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'math-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userDetailArr: any = []; //Sheet-Best
  alternativeDataList: any = []; //Sheety
  userCountNum: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void{
    // this.http.get('https://sheet.best/api/sheets/86a10621-87a6-4458-8706-dfea011e1d26').subscribe(
    //   res => {
    //     // console.log(res);
    //     this.userDetailArr = res;
    //   }
    // ) (Sheet-Best API)

    this.http.get('https://api.sheety.co/15a66da07a2c9fc3b00673d23904e9bb/users/sheet1').subscribe(
      res => {
        this.alternativeDataList = res;
        this.userDetailArr = this.alternativeDataList.sheet1;
        this.userCountNum = true;
      }
    )

  }

}
