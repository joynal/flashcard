import React from "react";
import { Layout, Menu, Row } from "antd";

import Card from "./Card";

import "./App.css";

const { Content, Sider } = Layout;

export default () => (
  <Layout>
    <Layout>
      <Sider width={200} style={{ background: "#fff", minHeight: "100vh" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="1">All</Menu.Item>
          <Menu.Item key="2">Known</Menu.Item>
          <Menu.Item key="3">Unknown</Menu.Item>
          <Menu.Item key="4">JavaScript</Menu.Item>
          <Menu.Item key="5">Cooking</Menu.Item>
          <Menu.Item key="6">Traveling</Menu.Item>
          <Menu.Item key="7">Data Science</Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 2em", minHeight: 280 }}>
        <h2>All</h2>
        <Row gutter={16}>
          <Card />
        </Row>
      </Content>
    </Layout>
  </Layout>
);
