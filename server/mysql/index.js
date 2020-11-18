const mysql = require('mysql');
const client = mysql.createConnection({
    host: 'localhost', // 填写你的mysql host
    user: 'root', // 填写你的mysql用户名
    password: '123456', // 填写你的mysql密码
    database:'react_login'
})

function sqlfn(sql,arr,callback){
    client.query(sql,arr,function(error,result){
        if(error){
            console.log(new Error(error))
            return;
        }
        callback(result)
    })
}
module.exports = sqlfn;
