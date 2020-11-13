import React from "react";
import { Menu } from "antd";
import {MailOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
export default class Nav extends React.Component {
  render() {
    return (
      <div>
        {/* <Link to="/">login功能</Link>
                <Link to="/signup">注册</Link> */}
        <Menu mode="horizontal">
          <Menu.Item >
            <Link to="/">login功能</Link>
          </Menu.Item>
            <Menu.Item icon={<MailOutlined />}>
            <Link to="/signup">注册</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
