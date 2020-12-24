const express = require("express");
const app = express();
const port = 3030;
const users = require('./router/user')
const login = require('./router/login')
const debug = require('debug')("my-application")
const bodyparser = require('body-parser')
app.use(bodyparser.json());
app.use("/api/users",users)
app.use("/api/login",login)
app.use(express.static('static',{extensions:["html","htm"]}))
function demo_middleware(err,req,res,next){
    //1.异常 ; 2.处理严务逻辑,转交控制权 ->next() ;3.响应请求 -> 结束响应 ->  当作路由的处理函数
   //next();
}
//test?name = 123
function valid_name_middleware(req,res,next){
    let {name} = req.query;
    if(!name || !name.length){
        res.json({
            message:'缺少name参数'
        })
    }else{
        res.json({
            message:name
        })
        next()
    }
}
app.all("*",valid_name_middleware)
 
app.listen(port,(req,res)=>{
    // console.log(`the server listening on port ${port}`)
    debug(`the server listening on port ${port}`)
})
