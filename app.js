const express = require('express');
const connectDB = require('./connectDB');
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

// routes
const admin = require("./routes/admin/adminRoute");
const doc = require("./routes/doctors/doctorsRoute");
const lab = require("./routes/lab/labRoute");
const pharm = require("./routes/pharm/pharmRoute");




app.get('/', (req, res)=>{
    res.send("running");
});

mongoose.connection.once('open', ()=>{
    console.log('CONNECTED TO DB');
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`server running on port ${process.env.PORT}`)});
});

r