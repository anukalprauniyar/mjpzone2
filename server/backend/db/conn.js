const mongoose = require('mongoose');
const dotenv = require('dotenv')

const db = process.env.DATABASE;

mongoose.connect(db , {
    useNewUrlParser : true 
}).then(()=>{
    console.log('connection successful');
}).catch((err)=> console.log('no connection') );
