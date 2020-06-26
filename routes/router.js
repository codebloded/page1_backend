const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser')
let router = express.Router();

router.use(bodyparser.json())
router.route('/')
.get((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.render('index');
    
})
.post((req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let org = req.body.org;
    console.log(req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json')
    let json = JSON.stringify(req.body);
    let fileOutput;
    fileOutput = JSON.parse(json);
    fs.writeFileSync('outputx.json',json,()=>{
        res.json(json)
    })
    console.log(fileOutput);

    params= {'message':"Your form is submit sucessfully !!"};
    res.render('ind',params);
    
});




module.exports = router;



