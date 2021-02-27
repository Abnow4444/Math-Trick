import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'math-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userDetailArr: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void{
    this.http.get('https://sheet.best/api/sheets/86a10621-87a6-4458-8706-dfea011e1d26').subscribe(
      res => {
        console.log(res);
        this.userDetailArr = res;
      }
    )
  }

}
