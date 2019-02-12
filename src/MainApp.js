import React, { lazy, Suspense } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, } from 'antd';
const { Header, Content, Footer } = Layout;
const Activity = lazy(() => import('./Containers/Activity/Activity'))
const Image = lazy(() => import('./Containers/Image/Image'))
const Profile = lazy(() => import('./Containers/Profile/Profile'))

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
                    <Menu.Item key="2"><Link to='/image'>Images</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/profile'>Profile</Link></Menu.Item>
                </Menu>
            </Header>
                    <Content>
                        <Suspense fallback='loading ...'>
                            <Switch>
                                <Route exact path='/' component={Activity} />
                                <Route exact path='/image' component={Image} />
                                <Route exact path='/profile' component={Profile} />
                            </Switch>
                        </Suspense>
                    </Content>
        </Layout>

                )
            }
            export default MainApp;
