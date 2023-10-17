var mongoose = require('mongoose');

var data = new mongoose.Schema({
    id:String,
    dname:String,
    mobile:String,
    password:String,
})

module.exports = mongoose.model("dRegister",data)