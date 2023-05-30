const express = require('express');
const connectDB = require('./connectDB');
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

//rerquired middleware

app.use(bodyParser.json());

// routes
const admin = require("./routes/admin/adminRoute");
const doc = require("./routes/doctors/doctorsRoute");
const lab = require("./routes/lab/labRoute");
const pharm = require("./routes/pharm/pharmRoute");
const dashboard = require('./routes/dashboard/dashboard');


//route middleware
app.use('/admin', admin);
app.use('/dashboard', dashboard);



app.get('/', (req, res)=>{
    res.send("user login");
});


//connect to mongodb
connectDB();

mongoose.connection.once('open', ()=>{

    console.log('CONNECTED TO DB');

    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`server running on port ${process.env.PORT}`)});

});

