const express = require("express");
const isEmpty = require('lodash/isEmpty');
const validator = require('validator')
const sqlfn = require('../mysql')
const router = express.Router();
const validatorinput = (data)=>{
    let errors = {}
    const {username, password, repassword,email} = data;
    if(validator.isEmpty(username)){
        errors.username = "请输入用户名！"
    }
    if(!validator.isEmail(email)){
        errors.email = "请输入邮箱！"
    }
    if(validator.isEmpty(password)){
        errors.password = "请输入密码！"
    }
    if(validator.isEmpty(repassword)){
        errors.repassword = "请确认密码！"
    }
    if(!validator.equals(password,repassword)){
        errors.repassword = "两次密码不同！"
    }
    return {
        errors,
        isValid:isEmpty(errors)
    }
}   
router.post('/',(req,res)=>{
    const {errors,isValid} = validatorinput(req.body);
    if(isValid){
        //数据库语句
        let sql = "insert into user values (null,?,?,?)"
        let {username,password,email}= req.body
        let arr= [username,email,password]
        sqlfn(sql,arr,function(data){
            // data: OkPacket { fieldCount: 0, affectedRows: 1, insertId: 11, serverStatus: 2, warningCount: 0, message: '', protocol41: true, changedRows: 0}
            if(data.affectedRows){
                res.send({code:0,message:'register success',successs:true})
            }else{
                res.status(400).json({error:"register failed!"})
            }
        })
    }else{
        res.status(400).json(errors)
    }
})
router.get("/:username",(req,res)=>{
    //反引号包含字段
    let sql = "select * from user where `name`=? ";
    let arr =[req.params.username]
    sqlfn(sql,arr,function(data){
        console.log(data)
        if(data){
            res.send({code:0,message:'success',lists:data})
        }else{
            res.status(400).json({error:"this user was registered!"})
        }
    })
})
module.exports = router;