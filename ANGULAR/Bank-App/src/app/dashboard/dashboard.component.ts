import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dAmt='';
  dAcno='';
  dPswd='';

  wAmt='';
  wAcno='';
  wPswd='';

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

 deposit(){
   var accno=this.dAcno;
   var pswd=this.dPswd;
   var amount=this.dAmt;

   const result=this.dataservice.deposit(accno,pswd,amount)

   if (result){
      alert("the given amount "+amount+" has been credited... and the new balance is "+result);
   }
 
 }

 withdrawal(){
  var accno=this.wAcno;
  var pswd=this.wPswd;
  var amount=this.wAmt;
  const result=this.dataservice.withdrawal(accno,pswd,amount)

  if (result){
    alert("the given amount "+amount+" has been debited... and the new balance is "+result);
 }



 }


}
