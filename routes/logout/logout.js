const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{

    try{
        if(req.session.authorized){
            
            req.session.destroy();
            res.redirect('/');

        }else{
            res.redirect('/');
        }

    }catch(e){
        console.log(e)
    } 
});

module.exports = router;
