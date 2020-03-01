const router = require('express').Router();
const User = require('../model/user');

//list
router.get('/' ,async(req,res) =>{
    try{
        const  users = await User.find({}); 
      res.send('list of users:' + users);   
    }catch(e){
        console.log(e);
        res.send('error \n',e);
    }

});

//get user
router.get('/get' ,async(req,res) =>{
   const {user: id} = req.query;
    if (id) {
       try{
           const founduser = await User.findById(id);
           res.send(founduser);
       }catch(e){
           res.send('error getting user ');
       }
    }else{
        res.status(500).send({
            status:500,
             msg: 'please provide user id',
             data:{}
        })
    }
    
}); 

//store new user
router.post('/' ,async(req,res) => {
 try{
   const {password , email} =req.body;

   if (!password || !email) {
       res.send({
          status: false,
           msg:'please provide the correct data'
       });
    }else  if (password.length < 6) {
             return res.send({
            status:false,
            msg:'password must be at least 6 characters!!!'
           });
          
       
   }else{
       const Newuser = await new User(req.body).save();
       res.send(Newuser);
   }
  }catch(e){
     res.send(e);
 }
}
);

//edit user
router.put('/:id' ,async(req,res) =>{
    const {id} = req.params;
    try{
        const newuser = await User.findByIdAndUpdate(id , req.body,{upsert:true, new:true});
        res.send(newuser);
    }catch(e){
        res.send('error',e);
    }
});

//delete user
router.delete('/:id' ,async(req,res) =>{
    const {id} = req.params;
    try{
        const deleteeduser = await User.findByIdAndDelete(id);
        res.send(deleteeduser);
    }catch(e){
        res.send('error',e);
    }
});


module.exports = router;
