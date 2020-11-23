import React from "react";
import { Form, Input, Button, Card,message } from "antd";
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {login} from "./../../actions/loginActions"
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
  class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        errors:{},
        loading:false,
      };
    }
    // onChange=(e)=>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
    onSubmit=(values)=>{
      this.setState({errors:{},loading:true})
      this.props.login(values).then((data)=>{
         //data:{config,data,headers,request,status,statusText}
        if(data.status===200){
            if(data.data.code===0){
                message.success('登录成功,欢迎回来!')
                this.props.history.push('/')
            }else{
                message.error(data.data.message);
                this.setState({errors:data,loading:false}) 
            }
        }else{
          this.setState({errors:data,loading:false}) 
        }
      }).catch(e=>{
        this.setState({errors:e,loading:false}) 
      })
    }
    render() {
      // const { username, password, repassword, email } = this.state;
      const {loading} = this.state;
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
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" disabled={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      );
    }
  }
  export default withRouter(connect(null,{login})(LoginForm))
