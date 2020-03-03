const router = require('express').Router();
const Books = require('../model/book');







router.get('/' ,(req, res)=>{
    res.send('customers page');
    });

// list of the books
router.get('/books' ,async(req,res) =>{
    try{
        const  book = await Books.find({}); 
      res.send('list of users:' + book);   
    }catch(e){
        console.log(e);
        res.send('error \n',e);
    }

});



router.post('/newbook' , (req,res) =>{
    const newbook = new Books(req.body);
    newbook.save().then(bk =>{
       res.send(bk);
    }).catch(e =>{
        console.log(e);
    });
});





module.exports = router;