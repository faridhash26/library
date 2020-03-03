const router =require('express').Router();
const jwt  = require('jsonwebtoken');
const User = require('../model/user');
const privateKey = require('../config').secretKey;


router.post('/login' ,async (req ,res) => {
    const {email ,password} = req.body;
    if (!email || !password){
     return res.send({
            status:false,
            msg:'please provide the correct data'
        });

    }else{
        const user =await User.findOne({email});
        if (!user){
            return res.send({
                status:false,
                msg:'nouser found'
            });
        }else{
      user.comparePassword (password , function (error , match) {
          if (match){


            jwt.sign({email:user.email} , privateKey ,{expiresIn: '1h'} , function (err , token) {
               if(!err){
                   res.send({token}); 
               }
               
            });


              
          }else{
              res.send('error login');
          }
      });
        }
    }
});
module.exports =router;