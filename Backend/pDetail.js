var mongoose = require('mongoose');

var data = new mongoose.Schema({
    pname:String,
    category:String,
    address:String,
    age:String,
    description:String,
    attachment:String
})

module.exports = mongoose.model("pDetail",data)