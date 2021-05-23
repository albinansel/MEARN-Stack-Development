import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // dAmt='';
  // dAcno='';
  // dPswd='';

  // wAmt='';
  // wAcno='';
  // wPswd='';

  depositForm = this.fb.group({
    dAcno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    dPswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    dAmt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    wAcno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    wPswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    wAmt: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  user=this.dataservice.currentUser;

  constructor(private dataservice: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  deposit() {
    if (this.depositForm.valid) {


      var accno = this.depositForm.value.dAcno;
      var pswd = this.depositForm.value.dPswd;
      var amount = this.depositForm.value.dAmt;

      const result = this.dataservice.deposit(accno, pswd, amount)

      if (result) {
        alert("the given amount " + amount + " has been credited... and the new balance is " + result);
      }
    }
    else {
      alert("invalid form")
    }
  }

  withdrawal() {

    if (this.withdrawForm.valid) {

      var accno = this.withdrawForm.value.wAcno;
      var pswd = this.withdrawForm.value.wPswd;
      var amount = this.withdrawForm.value.wAmt;
      const result = this.dataservice.withdrawal(accno, pswd, amount)

      if (result) {
        alert("the given amount " + amount + " has been debited... and the new balance is " + result);
      }
      
    }
    else {
      alert("invalid form")

    }


  }
}