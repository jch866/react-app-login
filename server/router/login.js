const express  = require("express");
const sqlfn = require("./../mysql")
const router = express.Router();
router.post('/',(req,res)=>{
    const {username,password} = req.body;
    const sql= "select * from user where `name`=? and `password`=?";
    const arr = [username,password]
    sqlfn(sql,arr,function(data){
        if(data.length>0){
            res.json({code:0,message:'登录成功'})
        }else{
            res.json({code:101,message:'用户名或密码不对'})
            // res.status(401).json({error:"用户名或密码不对"})
        }
    })
})
module.exports = router;