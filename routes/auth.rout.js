const router =require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../model/user');



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
              res.send(user);
          }else{
              res.send('error login');
          }
      });
        }
    }
});
module.exports =router;