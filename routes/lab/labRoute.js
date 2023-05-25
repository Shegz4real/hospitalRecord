const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("LAB route");
});

module.exports = router;