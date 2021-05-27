const express= require('express');
const session =require('express-session');
const dataservice = require('./services/data.service');
const app= express();

app.use(session({
    secret: 'randomsecurestring',
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());

//GET - READ
app.get('/',(req,res)=>{
    res.status(401).send("THIS IS A GET METHOD");
});

//POST - CREATE
app.post('/',(req,res)=>{
    res.send("THIS IS A POST METHOD");
});




//POST - CREATE
app.post('/register',(req,res)=>{
    console.log(req.body);
    const result= dataservice.register(req.body.uname,req.body.acno,req.body.pswd)
    res.status(result.statusCode).json(result)
    // console.log( res.status(result.statusCode).json(result));
});

//POST - CREATE
app.post('/login',(req,res)=>{
    console.log(req.body);
    const result= dataservice.login(req.body.acno,req.body.pswd)
    res.status(result.statusCode).json(result)
    // console.log( res.status(result.statusCode).json(result));
});


//POST - CREATE
app.post('/deposit',(req,res)=>{
    console.log(req.body);
    const result= dataservice.deposit(req.body.acno,req.body.pswd,req.body.amount)
    res.status(result.statusCode).json(result)
    // console.log( res.status(result.statusCode).json(result));
});



//POST - CREATE
app.post('/withdraw',(req,res)=>{
    console.log(req.body);
    const result= dataservice.withdrawal(req.body.acno,req.body.pswd,req.body.amount)
    res.status(result.statusCode).json(result)
    // console.log( res.status(result.statusCode).json(result));
});





//PUT - UPDATE/MODIFY WHOLE
app.put('/',(req,res)=>{
    res.send("THIS IS A PUT METHOD");
});

//PATCH - UPDATE/MODIFY PARTIALLY
app.patch('/',(req,res)=>{
    res.send("THIS IS A PATCH METHOD");
});

//DELETE - DELETE
app.delete('/',(req,res)=>{
    res.send("THIS IS A DELETE METHOD");
});



app.listen(3000,()=>{
     console.log("Server Started at port: 3000");
})