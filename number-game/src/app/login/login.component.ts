import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


const data = {
  username: "Abnow"
};

@Component({
  selector: 'math-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addUser(): void{
    this.http.post("https://sheet.best/api/sheets/86a10621-87a6-4458-8706-dfea011e1d26", data, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
