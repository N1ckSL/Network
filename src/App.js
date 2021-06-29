import React, { Component } from "react";
import "./App.css";
import {
  Route,
  BrowserRouter,
  withRouter,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Live from "./Components/Live/Live";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginPage from "./Components/Login/Login";
import { initializeApp } from "./Redux/app-reducer";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import { withSuspense } from "./Components/hoc/withSuspence";
import { Button, Layout, Menu, Result } from "antd";

import { Breadcrumb } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  ShareAltOutlined,
  SettingFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Image } from "antd";
import { Header } from "./Components/Header/Header";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileContainer")
);

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("ciota ne to");
    console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <Layout>
        <Header />

        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
              <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                <Menu.Item key="1">
                  <Link to="/profile"> Profile </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/dialogs"> Messages </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/friends"> Friends </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Users">
                <Menu.Item key="4">
                  <Link to="/users" icon={<SearchOutlined />}>
                    Find People
                  </Link>
                </Menu.Item>
                <Menu.Item key="5"> Groups </Menu.Item>
                <Menu.Item key="6"> Events</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<ShareAltOutlined />} title="More">
                <Menu.Item key="7">
                  <Link to="/news"> News </Link>
                </Menu.Item>
                <Menu.Item key="8">
                  <Link to="/music"> Music </Link>
                </Menu.Item>
                <Menu.Item key="9">
                  <Link to="/live"> Courses </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="10">
                <Link to="/settings" icon={<SettingFilled />}>
                  Settings
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Redirect exact from="/" to="/profile" />
                <Route
                  path="/profile:userId?"
                  render={withSuspense(ProfileContainer)}
                />
                <Route
                  path="/dialogs"
                  render={withSuspense(DialogsContainer)}
                />
                <Route path="/news" render={withSuspense(News)} />
                <Route path="/music" render={withSuspense(Music)} />
                <Route path="/live" render={withSuspense(Live)} />
                <Route path="/friends" render={() => <Friends />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route
                  path="/*"
                  render={() => (
                    <div>
                      <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button type="primary" ghost href={"/"}>Back Home</Button>}
                      />
                    </div>
                  )}
                />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Verified Social Network ©2020 Created by NiXL Designs
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
