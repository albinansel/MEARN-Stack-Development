import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  uname='';
  acno='';
  pswd='';


  constructor(private dataservice:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    
    var uname=this.uname;
    var acno=this.acno;
    var pswd=this.pswd;
    let users=this.dataservice.accountDetails;
    if (acno in users) {
      alert("User Exists....Please Log In")
    }
    else{
      users[acno]={acno, username:uname, password:pswd ,balance:0}
      alert("successfully Registered...")
      this.router.navigateByUrl('');
    }

  }

}
