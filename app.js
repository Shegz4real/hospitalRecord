const express = require('express');
const connectDB = require('./connectDB');
const  mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
dotenv.config();

//rerquired middleware

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized : false,
    store: MongoStore.create({
        mongoUrl:'mongodb://127.0.0.1:27017/hospitalRecord',
    }),
    cookie:{
        secure: false,
        maxAge: 3600000
    }

}));

// routes
const admin = require("./routes/admin/adminRoute");
const doc = require("./routes/doctors/doctorsRoute");
const lab = require("./routes/lab/labRoute");
const pharm = require("./routes/pharm/pharmRoute");
const login = require("./routes/login/login")
const dashboard = require('./routes/dashboard/dashboard');
const logout = require('./routes/logout/logout')


//route middleware
app.use('/admin', admin);
app.use('/dashboard', dashboard);
app.use('/login', login);
app.use('/logout', logout);



app.get('/', (req, res)=>{
    res.redirect('/login')
});


//connect to mongodb
connectDB();

mongoose.connection.once('open', ()=>{

    console.log('CONNECTED TO DB');

    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`server running on port ${process.env.PORT}`)});

});

