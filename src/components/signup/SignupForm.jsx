import React from "react";
import { Form, Input, Button, Card,message } from "antd";
import {withRouter}  from  "react-router-dom"
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      repassword: "",
      email: "",
      errors:{},
      loading:false,
      isvalid:false 
    };
  }
  checkUsers=(e)=>{
    let value = e.target.value;
    if(value===''){return}
    let {isvalid}=this.state ;
    this.props.signupActions.checkUser(value).then((data)=>{
      if(data.status===200){
        if(data.data.lists[0]){
          message.error('用户名已经存在！');
          isvalid = true
        }else{
          isvalid = false
        }
        this.setState({isvalid})
      }
    },(err)=>{
      console.log(err)
    })
  }
  onSubmit=(values)=>{
    let {password,repassword} = values;
    if(password!==repassword){
        message.error('两次密码不一样！');
        return 
    }
    this.setState({errors:{},loading:true})
    this.props.signupActions.userSignupRequest(values).then((data)=>{
       //data:{config,data,headers,request,status,statusText}
      if(data.status===200){
          //添加数据到redux
          this.props.flashActions.addFlashMsg({type:'success',text:'注册成功,欢迎您的加入!'})
          this.props.history.push('/')
      }
    },(res)=>{
      console.log(res) 
      this.setState({errors:res,loading:false}) 
    })
  }
  render() {
    // const { username, password, repassword, email } = this.state;
    const {loading,isvalid} = this.state;
    return (
      <Card>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onSubmit}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input onBlur={this.checkUsers}/>
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            {/* <Input type="email" value={email} onChange={this.onChange} /> */}
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password  />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="repassword"
            rules={[
              {
                required: true,
                message: "confirm input your password!",
              },
            ]}
          >
            <Input.Password  />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" disabled={loading || isvalid}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
export default withRouter(SignupForm)