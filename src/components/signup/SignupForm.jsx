import React from "react";
import { Form, Input, Button, Card } from "antd";
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
      loading:false
    };
  }
  onSubmit=(values)=>{
    this.setState({errors:{},loading:true})
    this.props.signupActions.userSignupRequest(values).then((data)=>{
      //添加数据到redux
      this.props.flashActions.addFlashMsg({type:'success',text:'注册成功,欢迎您的加入!'})
      this.props.history.push('/')
    },(res)=>{
      console.log(res)
    })
  }
  render() {
    // const { username, password, repassword, email } = this.state;
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
            <Input  />
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
            <Button type="primary" htmlType="submit" disabled={this.state.loading}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
export default withRouter(SignupForm)