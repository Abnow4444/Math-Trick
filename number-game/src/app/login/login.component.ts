import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from './Customer';


@Component({
  selector: 'math-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer = new Customer();
  ipAddr: any = "";
  existingUser: any = "";//Sheet-Best API
  alternativeDataListUser: any = "";// Sheety API
  ipArr: any = [];
  showLoginPage: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get("https://jsonip.com/").subscribe(
      res => {
        this.ipAddr = res;
        // this.http.get('https://sheet.best/api/sheets/86a10621-87a6-4458-8706-dfea011e1d26').subscribe(
        //   res => {
        //     // console.log(res);
            // this.existingUser = res;
        //     for(let i=0; i<this.existingUser.length; i++){
        //       this.ipArr.push(this.existingUser[i].ip);
        //     }
        //     if(this.ipArr.includes(this.ipAddr.ip)){
        //       this.router.navigate(['game'])
        //       this.showLoginPage = false;
        //     }else{
        //       this.showLoginPage = !this.showLoginPage;
        //     }
        //   }
        // )

        this.http.get('https://sheet.best/api/sheets/264e198a-b408-401e-9d87-354f3caf5607').subscribe(
          res => {
            // console.log(res);
            this.existingUser = res;
            for(let i=0; i<this.existingUser.length; i++){
              this.ipArr.push(this.existingUser[i].ip);
            }
            if(this.ipArr.includes(this.ipAddr.ip)){
              this.router.navigate(['game'])
              this.showLoginPage = false;
            }else{
              this.showLoginPage = !this.showLoginPage;
            }
          }
        )
      }
    )
  }

  addUser(customerForm: NgForm): void{
    // if(!this.ipArr.includes(this.ipAddr.ip)){
    //   this.http.post("https://sheet.best/api/sheets/86a10621-87a6-4458-8706-dfea011e1d26", {username: customerForm.value.username, ip: this.ipAddr.ip}, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(
    //     res => {
    //       // console.log(res);
    //     }
    //   )
    // if(!this.ipArr.includes(this.ipAddr.ip)){
    //   this.http.post("https://api.sheety.co/15a66da07a2c9fc3b00673d23904e9bb/users/sheet1", {username: customerForm.value.username, ip: this.ipAddr.ip}, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(
    //     res => {
    //       // console.log(res);
    //     }
    //   )

        if(!this.ipArr.includes(this.ipAddr.ip)){
      this.http.post("https://sheet.best/api/sheets/264e198a-b408-401e-9d87-354f3caf5607", {username: customerForm.value.username, ip: this.ipAddr.ip}, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(
        res => {
          // console.log(res);
        }
      )//Sheet-Best API(2)

      localStorage.userVal = false;
    }
    this.router.navigate(['game']);
  }

}
