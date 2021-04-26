class Bank {

    constructor(acno, minbal, actype) {
        this.acno = acno;
        this.bname = "sbk";
        this.bal = minbal;
        this.ifsc = "sbk123456789";
        this.actype = actype;
    }

    deposit(amount) {
        this.bal += amount;
        console.log(`your ${this.bname} account ${this.acno} has been credited with amount ${amount} aval bal:${this.bal}`);
    }

    withdraw(amount) {
        if (amount < this.bal) {
            this.bal -= amount
            console.log(`your ${this.bname} account ${this.acno} has been debited with amount ${amount} aval bal:${this.bal}`)
        }
        else {
            console.log("transaction has been cancelled with error code 1001");
        }
    }

    balEnq() {
        console.log("your aval balance=" + this.bal);
    }
}

var obj1 = new Bank(1000, 7000, 'saving')

var obj2 = new Bank(1001, 2000, 'saving')

var obj3 = new Bank(1002, 6000, 'current')

var obj4 = new Bank(1004, 5000, 'saving')

// account details ofsaving account

var users = []
users.push(obj1)
users.push(obj2)
users.push(obj3)
users.push(obj4)


console.log("account details of saving account");
var savingsusers = users.filter(user => user.actype == 'saving')
console.log(savingsusers);


// sort users according with their balance
console.log("sort users according with their balance");
var sortedusers = users.sort((user1, user2) => user1.bal - user2.bal)
console.log(sortedusers);


// print user who have high bal
console.log("print user who have highest balance");
var highbaluser = users.reduce((user1, user2) => user1 > user2 ? user1 : user2)
console.log(highbaluser);



