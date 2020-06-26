const express = require('express');
const bodyParser = require('body-parser');
const Project = require('../models/projectSchema');

let proRouter = express.Router();
proRouter.use(bodyParser.json());

proRouter.route('/')
.get((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    res.status(200).render('project');

})
.post((req,res)=>{
    res.setHeader("Content-Type",'application/json');
    res.statusCode=200;
    let data = new Project(req.body);
    data.save().then(item=>{
        res.status(200).send('Project added sucessfully check your mongodb server ')
    }).catch((err)=>{
        console.log(err);
        res.status(404).send("Some error occured");
    })
});















module.exports = proRouter;
