const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs').renderFile;
const path  = require('path');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');


let app = express();
const port = '3000';
const host = 'localhost';
app.use(morgan('dev'));
app.engine('html', ejs);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// ==============================MONGOOSE STUFF==================================
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/backend",({ useUnifiedTopology: true ,useNewUrlParser: true } ));
  
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
    console.log("Conneted Sucessfully to the mongo server");
});


//++++++++++++++++++++ENDPOINTS OF RESTAPI++++++++++++++++++

app.use('/',userRouter);
app.use('/user',userRouter);








//Listning the server 
app.listen(port,()=>{
    console.log(`The server is running sucessfully at http://${host}:${port}`);

});

