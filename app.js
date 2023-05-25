const express = require('express');
const dotenv = require('dotenv');
const app = express();

app.get('/', (req, res)=>{
    res.send("running");
});

app.listen(process.env.PORT);