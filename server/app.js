const dotenv = require('dotenv')
const express = require('express');
const app = express();
const mongoose = require('mongoose');


dotenv.config({path:'./config.env'})

// const DB = process.env.DATABASE;

require('./backend/db/conn')

app.get('/', (req,res)=>{
    res.send('HEllo');
})

app.listen(5000, ()=>{
    console.log('Server is running on port number 5000');
})

