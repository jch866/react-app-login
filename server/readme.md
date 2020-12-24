[视频链接](https://www.imooc.com/video/20687)
[网上的随堂笔记](https://blog.csdn.net/qq_42019597)
app -> application -> web服务的实例
### web 服务 如何处理一个请求

url -> 网络  -> dns解析  -> 目标服务器 
 1.如何响应这个请求 -> 路由// 规则  
  get -> 响应
  post -> post 

### 通过 uri   ->  路径
 app.all('/all') 可以满足所有请求方式
 `app.all('/all',(req,res)=>{ res.json({ message:'all method!', method:req.method })})`
无论客户端  使用任何uri,都可以响应  比如日志服务
`app.all('*',(req,res)=>{ res.json({ uri:req.path }) })`

### 使用use  中间件，也可以当普通路由
app.use前面的路径是可以省略的，如果省略的话则代表匹配所有路径
app.use一般情况下主要应用于中间件，use('/a') 只用路径以 /a 开始即可匹配，如果有路径 /a/b 、 /a/b/c ，都会经过该函数处理
app.all其实是和app.get和app.post类似， 路径匹配的是完整路径，如果要匹配以某个字符串开头，则后面添加* 即可，所以`app.all('* ',(req,res,next)=>{})`和`app.use((req,res,next)=>{})`效果是相同的。
```
//通过 请求
app.get("/demo",function(req,res){
    res.json({message:'hello get',method:req.method})
})
app.post("/demo",function(req,res){
    res.json({message:'hello post',method:req.method})
})
//通过 uri
//http://127.0.0.1:3030/user/byname?name='jack'
app.get("/user/byname",(req,res)=>{
    let {name}= req.query;
    res.json({name})
})
//http://127.0.0.1:3030/user/byid?id=180
app.get("/user/byid",(req,res)=>{
    let {id}= req.query;
    res.json({id})
})
app.use('/demo',(req,res)=>{
    res.json({
        message:'method  use',
        method:req.method
    })
})
```
### 中间件
```
app.use(express.json())
app.use(express.urlencoded()) //express.urlencoded 解析 URL-encoded 格式的请求体数据
app.use(bodyParser.urlencoded({extended:true})) //extended：true(默认)使用qs模块，false使用querystring模块来解析主体
```
### 路由拆分
`const router = express.Router();  module.exports = router`
#### 导入注册路由 app.use(myRouter)
`app.use("/my",myRouter)  // /my/list`
`app.use("/your",yourRouter)// /your/list`
### 异常捕获   或者 404
通过中间件来处理   中间件放在所有路由最底部  异常处理一定要放在一个地方
express捕获全局异常的2种方法
```
1.
process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});
```
`2. npm install express-async-errors --save`
### mysql安装和使用
`brew services list`
```
Name  Status  User Plist
mysql stopped
nginx stopped
redis stopped
```
先要启动mysql服务 在命令行窗口输入mysql -u root -p，然后输入root口令后，就连接到了MySQL服务器

### 使用Sequelize
[sequelize结合sequelize-cli使用](https://blog.csdn.net/qq_39583550/article/details/104679893)
ORM技术：Object-Relational Mapping，把关系数据库的表结构映射到对象上
`npm install --save sequelize`
`npm install sequelize-cli -S`
选择Node的ORM框架Sequelize来操作数据库
Sequelize返回的对象是Promise
`npx sequelize init`
### node-application -> ORM(sequelize) -> 驱动(node-mysql) -> mysql db

###  数据库的初始化
1. 创建一个数据库
2. 使用sequelize cli初始化项目的数据库配置信息`npx sequelize init`
3. 生成模型文件
  1. migrate文件
  2. model文件 
`npx sequelize model:generate —name Todo —attributes name:string , deadline: date , content:string`
4. 持久化，模型对应的[数据库表]
`npx sequelize db:migrate`
5. API输入文档及测试
###  安装和运维
全局安装pm2
`pm2 init `  
`pm2 start xxxx.config.js  `
`pm2 restart xxxx.config.js  `  
`pm2 list `
`pm2 log `


















