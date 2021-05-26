let currentUser;
let accountDetails = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
}



const register = (uname, acno, pswd) => {
    let users = accountDetails;
    if (acno in users) {
        return {
            statusCode: 422,
            status: false,
            message: "User Exists... Please Login"
        }
    }
    else {
        users[acno] = { acno, username: uname, password: pswd, balance: 0 }
        return {
            statusCode: 200,
            status: true,
            message: "Sucessfully Registered"
        }
    }
}


const login = (acno, pswd) => {
    let users = accountDetails;

    if (acno in users) {
        if (pswd == users[acno]["password"]) {
            currentUser = users[acno]["username"]
            return {
                statusCode: 200,
                status: true,
                message: "Sucessfully Login"
            }
        }

        else {
            return {
                statusCode: 422,
                status: false,
                message: "Incorrect Password"
            }
        }
    }
    else {
        return {
            statusCode: 422,
            status: false,
            message: "Invalid Account"
        }
    }
}



module.exports = {
    register,
    login
}