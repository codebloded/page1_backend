const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const userRouter = express.Router();
userRouter.use(bodyParser.json())

userRouter.route('/')
.get((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.status(200).render('index.html');
});

userRouter.route('/user')
.get((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.status(200).render('index.html');
})

.post((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json')
    var myData = new User(req.body);
    console.log(req.body)
    myData.save().then(item=>{
        res.status(200).send('User saved sucessfully ');
        console.log("Saved");
    }).catch(()=>{
        res.status(404).send('Some error occured');
        console.log("error");
    });
});


module.exports = userRouter;
