import React from "react";
import { Menu } from "antd";
import {
  HistoryOutlined,
  AlignLeftOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const SideMenu = (props) => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="mailTemplates" icon={<AlignLeftOutlined />}>
        <Link to="/adminPanel/masterMailTemplates">Mail Templates</Link>
      </Menu.Item>
      <Menu.Item key="mails" icon={<HistoryOutlined />}>
        <Link to="/adminPanel/masterMails">Mail History</Link>
      </Menu.Item>
      <Menu.Item key="sendMail" icon={<MailOutlined />}>
        <Link to="/adminPanel/masterSendMail">Send Mail</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
