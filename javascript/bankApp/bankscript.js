class Bank {


    static getAccountDetails() {
        let users = {
            1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
            1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
            1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
            1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
        }
        return users

    }
    // authenticate(1000,"userone","userone") success 1 ivalid user name -1 
    static authenticate(acno, username, password) {
        let users = Bank.getAccountDetails()
        if (acno in users) {
            if (username == users[acno]["username"] & password == users[acno]["password"]) {
                return 1 //success authentication
            }
            else {
                return 0 //inavlid username or password
            }

        }
        else {
            return -1 //invalid account number
        }
    }


    static login() {
        let accno = acno.value;
        let username = uname.value;
        let paswd = pwd.value;
        let user = Bank.authenticate(accno, username, paswd)
        if (user == 1) {
            // alert("sucess");
            window.location.href="userhome.html"
        }
        else if (user == -1) {
            alert("inavlid account number");
        }
        else if (user == 0) {
            alert("inavlid user name or password");
        }
    }

    static withdrwal() {
        let accno = acno.value;
        let username = uname.value;
        let paswd = pwd.value;
        let user = Bank.authenticate(accno, username, paswd)
        let users = Bank.getAccountDetails()
        if (user == 1) {
            let amt= prompt("Enter the Amount")
            amt= parseInt(amt)
            if(users[accno]["balance"]>=amt){
                users[accno]["balance"] -= amt
                resultarea.innerHTML=`<h1> Successful...!! Current balance is  ${users[accno]["balance"]}</h1>`
            }
            else{
                alert("insufficient balance")
            }  
        }
    }


    static deposit() {
        let accno = acno.value;
        let username = uname.value;
        let paswd = pwd.value;
        let user = Bank.authenticate(accno, username, paswd)
        let users = Bank.getAccountDetails()
        if (user == 1) {
            let amt= prompt("Enter the Amount")
            amt= parseInt(amt)
            users[accno]["balance"] += amt
            resultarea.innerHTML=`<h1> Successful...!! Current balance is  ${users[accno]["balance"]}</h1>`
        }
    }


   static chekBalance() {
        let accno = acno.value;
        let username = uname.value;
        let paswd = pwd.value;
        let user = Bank.authenticate(accno, username, paswd)
        let users=Bank.getAccountDetails()
        if (user == 1) {
          let balance=users[accno]["balance"]
           let html_val=`<h1>aval balance:${balance}</h1>`
           document.querySelector("#resultarea").innerHTML=html_val

        }

    }
}

// var bnk=new Bank()
// let user=bnk.authenticate(1000,"userone","user1")
// if(user==1){
//     console.log("sucess");
// }
// else if(user==-1){
//     console.log("inavlid account number");
// }
// else if(user==0){
//     console.log("inavlid user name or password");
// }





















