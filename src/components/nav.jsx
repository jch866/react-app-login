import React from "react";
import { Menu } from "antd";
import { MailOutlined, LogoutOutlined, BankTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "./../actions/loginActions"
class Nav extends React.Component {
  logout = ({ item, key, keyPath, domEvent }) => {
    this.props.logout();
  };
  render() {
    const { isLogined } = this.props.auth;
    const logined = (
      <>
        <Menu.Item icon={<BankTwoTone />}>
          <Link to="/signup">注册</Link>
        </Menu.Item>
        <Menu.Item icon={<MailOutlined />}>
          <Link to="/login">登录</Link>
        </Menu.Item>
      </>
    );
    const logout = (
      <>
        <Menu.Item icon={<LogoutOutlined />} onClick={this.logout}>
          退出
        </Menu.Item>
      </>
    );
    return (
      <div>
        {/* <Link to="/">login功能</Link>
                <Link to="/signup">注册</Link> */}
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">login功能</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/shop">商城</Link>
          </Menu.Item>
          {isLogined ? logout : logined}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps,{logout})(Nav);
// export default Nav;
