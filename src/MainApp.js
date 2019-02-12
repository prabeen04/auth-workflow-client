import React, { lazy, Suspense } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, } from 'antd';
const Profile = lazy(() => import('./Containers/Profile/Profile'))
const { Header, Content, Footer } = Layout;

function MainApp(props) {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo">

                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to='/'>Activity</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/images'>Images</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/profile'>Profile</Link></Menu.Item>
                </Menu>
            </Header>
                    <Content>
                        <Suspense fallback='loading ...'>
                            <Switch>
                                <Route exact path='/profile' component={Profile} />
                            </Switch>
                        </Suspense>
                    </Content>
        </Layout>

                )
            }
            export default MainApp;
