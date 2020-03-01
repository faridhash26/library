const mongoose = require('mongoose');
const url = 'mongodb://localhost/library'; 


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('database connected');
}).catch(err =>{
    console.log('database connection failed \n' , err);
});


module.exports = mongoose;