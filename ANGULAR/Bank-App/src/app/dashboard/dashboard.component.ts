import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  user: any;
  acno: any;
  lDate: Date=new Date()

  constructor(private dataservice: DataService, private fb: FormBuilder, private router:Router) {
    this.user = localStorage.getItem("name")
  }

  ngOnInit(): void {
  }

  deposit() {
    if (this.depositForm.valid) {

      var accno = this.depositForm.value.dAcno;
      var pswd = this.depositForm.value.dPswd;
      var amount = this.depositForm.value.dAmt;

      // const result = this.dataservice.deposit(accno, pswd, amount)
      // if (result) {
      //   alert("the given amount " + amount + " has been credited... and the new balance is " + result);
      // }

      this.dataservice.deposit(accno, pswd, amount)

        .subscribe((result: any) => {
          if (result) {
            alert(result.message);
          }
        },
          (result: any) => {
            alert(result.error.message);
          })

    }
    else {
      alert("invalid form")
    }
  }

  withdrawal() {

    var accno = this.withdrawForm.value.wAcno;
    var pswd = this.withdrawForm.value.wPswd;
    var amount = this.withdrawForm.value.wAmt;


    if (this.withdrawForm.valid) {

      // const result = this.dataservice.withdrawal(accno, pswd, amount)

      // if (result) {
      //   alert("the given amount " + amount + " has been debited... and the new balance is " + result);
      // }

      this.dataservice.withdrawal(accno, pswd, amount)

        .subscribe((result: any) => {
          if (result) {
            alert(result.message);
          }
        },
          (result: any) => {
            alert(result.error.message);
          })


    }
    else {
      alert("invalid form")

    }
  }

  onDelete(event: any) {
    this.dataservice.deleteAccDetails(event)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },
      (result: any) => {
          alert(result.error.message)
      })
  }


  onCancel(){
    this.acno=""
  }

  deleteAcc() {
    this.acno = localStorage.getItem("acno")
  }

}