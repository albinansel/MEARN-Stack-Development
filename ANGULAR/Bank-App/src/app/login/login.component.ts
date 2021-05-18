import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect banking partner";

  acno = "Account number please";
  pswd = "";

  accountDetails: any = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // accnoChange(event:any){
  //   this.accno=event.target.value;
  //   console.log(this.accno);
  // }

  // pswdChange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);
  // }


  login() {
    //  alert("Login Clicked");

    var acno = this.acno;
    var pswd = this.pswd;
    let users = this.accountDetails;

    if (acno in users) {
      if (pswd == users[acno]["password"]) {
        alert("Login Successful")
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Incorrect Pasword")
      }

    }
    else {
      alert("invalid Account")
    }
  }

  register(){
    this.router.navigateByUrl("register")
  }


}
