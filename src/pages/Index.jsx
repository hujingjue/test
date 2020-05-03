import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {IndexWrap} from './index'
import Main from './main/Main.jsx'

const { Header, Content, Sider } = Layout;

export default class Index extends Component {
    state={
        index:2
    }
    getSelect(item,key){
        console.log(item,key)
    }
    render() {
        return (
            <IndexWrap>
                <Layout>
                    <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} onClick={this.getSelect}>
                        <Menu.Item key="1" icon={<UserOutlined />}>疑似恶意域名查询</Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>域名案例分析</Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>事件分析</Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>管理员区域</Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 ,background:'#fff'}} >
                        <div className="user">
                            <span className="userName">Administrator</span>
                            <span className="iconfont icon-user"></span>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24,background:'#fff'}}>
                            <Main></Main>
                        </div>
                    </Content>
                    </Layout>
                </Layout>
            </IndexWrap>
            
        )
    }
}

