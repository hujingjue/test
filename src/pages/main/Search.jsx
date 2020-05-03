import React, { Component } from 'react'
import { Input,DatePicker, Menu, Dropdown, Button,Upload  } from 'antd'
import { DownOutlined, UserOutlined,SearchOutlined,DownloadOutlined,UploadOutlined ,PlusOutlined  } from '@ant-design/icons'
import {SearchWrap} from './search'

const { RangePicker } = DatePicker
function handleMenuClick(e){
    this.setState({
        sortValue:this.state.arr[e.key]
    })
}
export default class Search extends Component {
   state={
        sortValue:'按访问量排序',
        arr:['1st menu item','2nd menu item','3rd item'],
        outValue:'导出100条记录',
        selectValue:'选择案例状态'
   }
   menu = (
        <Menu onClick={handleMenuClick.bind(this)}>
        <Menu.Item key="0" icon={<UserOutlined />}>
            {this.state.arr[0]}
        </Menu.Item>
        <Menu.Item key="1" icon={<UserOutlined />}>
            {this.state.arr[1]}
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            {this.state.arr[2]}
        </Menu.Item>
        </Menu>
    )
    menu1=(
        <Menu>
            <Menu.Item key="0" icon={<UserOutlined />}>
                {this.state.arr[0]}
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />}>
                {this.state.arr[1]}
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                {this.state.arr[2]}
            </Menu.Item>
        </Menu>
    )
    menu2=(
        <Menu>
            <Menu.Item key="0" icon={<UserOutlined />}>
                {this.state.arr[0]}
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />}>
                {this.state.arr[1]}
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                {this.state.arr[2]}
            </Menu.Item>
        </Menu>
    )
    
    render() {
        return (
            <SearchWrap>
                <div className="left">
                    <Input
                        placeholder="输入域名或案例名称"
                        style={{ width: 200 }}
                    ></Input>
                    <RangePicker className="date"/>
                    <Dropdown overlay={this.menu} className="search">
                        <Button>
                            {this.state.sortValue} <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} className="searchIcon" size={'large'}/>
                    <Dropdown overlay={this.menu1} className="search">
                        <Button>
                            {this.state.outValue} <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={'large'} className="download"/>
                    <Button className="clear">清空筛选条件</Button>
                    
                    <Dropdown overlay={this.menu2} className="search">
                        <Button>
                            {this.state.selectValue} <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Input
                        placeholder="选择来源引擎"
                        style={{ width: 200 }}
                        className="source"
                    ></Input>
                </div>
                <div className="right">
                    <Upload className="upload">
                        <Button>
                        <UploadOutlined />上传案例记录csv文件
                        </Button>
                    </Upload>
                    <Button type="primary" icon={<PlusOutlined />} size={"middle"} className="add">
                        新增案例
                    </Button>
                </div>
                

            </SearchWrap>
        )
    }
}
