const mongoose = require('mongoose');
const User = require('./user');

const proSchema = mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    desc:{
        type:String,
        required:true
    },
 
    
},

{
    timeStamps:true
}
);


let Project = mongoose.model('Project', proSchema);

module.exports = Project;

