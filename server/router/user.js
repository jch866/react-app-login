const express = require("express");
const isEmpty = require('lodash/isEmpty');
const validator = require('validator')
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
    if(!isValid){
        res.status(400).json(errors)
    }
    // res.send({
    //     msg:'hello1231'
    // });
})
module.exports = router;