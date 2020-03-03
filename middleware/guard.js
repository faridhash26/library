const jwt = require('jsonwebtoken');
const privateKey = require('../config').secretKey;
module.exports  = (req, res , next) => {
 const {auth } = req.headers;
 if (!auth){
     res.send('authentication error');
 }else{
     jwt.verify(auth, privateKey , function (err , verify) {
        if(err) res.send('authentication error'); 
        if(verify){
            next();
        }
     });
 }
}