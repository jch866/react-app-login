const express = require("express");
const router = express.Router();
router.get('/',(req,res)=>{
    res.send({
        msg:'hello1231'
    });
})
module.exports = router;