const express = require("express");
const app = express();
const port = 3030;
const users = require('./router/user')
const debug = require('debug')("my-application")
const bodyparser = require('body-parser')
app.use(bodyparser.json());
app.use("/api/users",users)
app.listen(port,(req,res)=>{
    // console.log(`the server listening on port ${port}`)
    debug(`the server listening on port ${port}`)
})
