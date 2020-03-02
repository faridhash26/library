const mongoose = require('../bootstrap/db');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
var userschema = new schema({
  name:{ type:String, required:true},
  family:{ type:String, required:true},
  email:{ type:String, required:true,unique:true},
  password:{ type:String, required:true, minlength:6},
  age:{ type:Number, required:false,min:10 ,max:100}

},{
  timestamps:true
});


userschema.pre('save', function(next){
  const user = this;
  bcrypt.genSalt(10, function(error, salt){
    if (error) {
      next(error);
    }
    bcrypt.hash(user.password, salt, function(error, encyptedPassword){
      user.password = encyptedPassword;
      next();
    });   
  });
 
});

userschema.methods.comparePassword = function(password, cb){
  const user = this;
  bcrypt.compare(password, user.password, function(err, isMatch) {
    if (isMatch) {
      cb(null, isMatch);
    } else {
      cb('ERROR', false);
    }
  });
};
 






module.exports = mongoose.model('user', userschema);