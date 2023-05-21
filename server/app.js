const dotenv = require('dotenv')
const express = require('express');
const app = express();
const mongoose = require('mongoose');


dotenv.config({path:'./config.env'})
const PORT = process.env.PORT;

// const DB = process.env.DATABASE;

require('./backend/db/conn')

app.get('/', (req,res)=>{
    res.send('HEllo');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port number ${PORT}`);
})

