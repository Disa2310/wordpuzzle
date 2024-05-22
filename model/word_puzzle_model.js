var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    randomstring:{
        type:String
    },
    merge:{
        type:String
    },
   
});

module.exports = mongoose.model("puzzle",userschema);