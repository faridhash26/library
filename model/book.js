const mongoose = require('../bootstrap/db');
const schema = mongoose.Schema;


var bookschema = new schema({
    title:{ type:String, required:true},
    description:{ type:String, required:true},
    author:{ type:String, required:true},
    quantity:{type:Number ,required:true},
    user:{type:String , required:true}
  },{
    timestamps:true
  });










  module.exports = mongoose.model('books', bookschema);