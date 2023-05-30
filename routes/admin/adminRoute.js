const express = require("express");
const adminController = require('../../controllers/adminController')
const router = express.Router();

router.get('/',(req, res)=>{
    res.send("admin route");
});

router.get('/create_user', (req,res)=>{
    res.send("create a new user");
});

router.post('/create_user', adminController.signupUser);

module.exports = router;