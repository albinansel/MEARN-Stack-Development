import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect banking partner";

  acno = "Account number please";
  pswd = "";


  constructor(private router:Router, private dataService:DataService) { }

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
    let users = this.dataService.accountDetails;

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
