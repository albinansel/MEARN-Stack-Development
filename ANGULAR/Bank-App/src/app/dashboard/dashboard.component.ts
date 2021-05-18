import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  amt='';
  acno='';
  pswd='';

  amt1='';
  acno1='';
  pswd1='';

  constructor() { }

  ngOnInit(): void {
  }

 deposit(){

 }

 withdrawal(){

 }


}
