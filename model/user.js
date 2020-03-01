const mongoose = require('../bootstrap/db');

const schema = mongoose.Schema;
var userschema = new schema({
  name:{ type:String, required:true},
  family:{ type:String, required:true},
  email:{ type:String, required:true,unique:true},
  password:{ type:Number, required:true, minlength:6},
  age:{ type:Number, required:false,min:10 ,max:100}

},{
  timestamps:true
});



module.exports = mongoose.model('user', userschema);