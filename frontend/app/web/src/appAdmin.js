import React, { Component } from "react";
import "./app.css";
// import Header from "./header";
import { Layout } from "antd";
import SideMenu from "./components/adminPanel/side-menu/side-menu.component";
import { Switch, Route, Redirect } from "react-router-dom";
import MasterMailTemplates from "./components/adminPanel/master-mail-templates/master-mail-templates.container";
import MasterMail from "./components/adminPanel/master-mail/master-mail.container";
import MasterSendMail from "./components/adminPanel/sendMail/sendMail.container";
const { Header, Content, Footer, Sider } = Layout;

class AppAdmin extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          {/* <div className="logo" /> */}

          <SideMenu></SideMenu>
        </Header>

        <Content
          style={{
            padding: "50px",
            backgroundColor: "white",
            maxHeight: "650px",
            minHeight: "650px",
            overflow: "auto",
          }}
        >
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Switch>
              <Route
                exact
                path="/adminPanel/masterMailTemplates"
                component={MasterMailTemplates}
              />
              <Route
                exact
                path="/adminPanel/masterMails"
                component={MasterMail}
              />
              <Route
                exact
                path="/adminPanel/masterSendMail"
                component={MasterSendMail}
              />
              <Route
                exact
                path="/signIn-Register"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <MasterMailTemplates />
                  )
                }
              />
            </Switch>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#001529",
            color: "white",
          }}
        >
          Kiba Mail Manager @ {new Date().getFullYear()}
        </Footer>
      </Layout>
    );
  }
}

export default AppAdmin;
