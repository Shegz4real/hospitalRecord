const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    router.send("doctors route");
});

module.exports = router;