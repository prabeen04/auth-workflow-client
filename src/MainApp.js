import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, } from 'antd';
const { Header, Content, Footer } = Layout;

function MainApp(props) {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['3']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Activity</Menu.Item>
                    <Menu.Item key="2">Images</Menu.Item>
                    <Menu.Item key="3">Profile</Menu.Item>
                </Menu>
            </Header>
            <Content>
            </Content>
        </Layout>

    )
}
export default MainApp;
