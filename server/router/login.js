const express  = require("express");
const sqlfn = require("./../mysql")
const jwt = require('jsonwebtoken')
const router = express.Router();
const config = require("./../config")
router.post('/',(req,res)=>{
    const {username,password} = req.body;
    const sql= "select * from user where `name`=? and `password`=?";
    const arr = [username,password]
    sqlfn(sql,arr,function(data){
        if(data.length>0){
            const token = jwt.sign({
                id:data[0].id,
                username:data[0].name
            },config.jwtSecret)
            res.send({code:0,message:'登录成功',token})
            // res.json({code:0,message:'登录成功'})
        }else{
            res.json({code:101,message:'用户名或密码不对'})
            // res.status(401).json({error:"用户名或密码不对"})
        }
    })
})
module.exports = router;