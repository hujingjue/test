import React, { Component } from 'react'
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import {MainWrap} from './main.js'
import Search from './Search.jsx'
import DataList from './DataList.jsx'

const { TabPane } = Tabs;
const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
      )}
    </Sticky>
  );

export default class Main extends Component {
    render() {
        return (
            <MainWrap>
                <StickyContainer>
                    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <TabPane tab="域名案例查询" key="1">
                        <Search></Search>
                        <DataList></DataList>
                    </TabPane>
                    <TabPane tab="案例样本查询" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="域名详情查询" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    </Tabs>
                </StickyContainer>
            </MainWrap>
        )
    }
}
