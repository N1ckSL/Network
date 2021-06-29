import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/verified.png";
import { Col, Row, Layout, Menu, Avatar } from "antd";
import {UserOutlined} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth-reducer";

export const Header = (props) => {

  // const isAuth = useSelector(selectIsAuth)
  // const login = useSelector(selectCurrentUserLogin)
  // const dispatch = useDispatch()
  // const logoutCallback = () => {
  //   dispatch(logout())
  // }     // <---- Use with TypeScript

  const {Header} = Layout;
  
  return (       
     <Header className="header">
  <div className="logo" />
  <Row>
    <Col span={18}>
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1">
          <Link to="/profile"> Profile </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/friends"> Friends </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/dialogs"> Messages </Link>
        </Menu.Item>
      </Menu>
    </Col>
    <Col span={4}>
      <Avatar
        style={{ backgroundColor: "#87d068" }}
        icon={<UserOutlined />}
      />
    </Col>
  </Row>
</Header>
  );
}; 


