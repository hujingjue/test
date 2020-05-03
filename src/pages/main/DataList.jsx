import React, { Component } from 'react'
import {DataListWrap} from './dataList'
import axios from 'axios'
import { Upload } from 'antd';
import {InfoCircleOutlined ,EditOutlined,SearchOutlined,UploadOutlined,DownloadOutlined } from '@ant-design/icons'
import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/line'
import  'echarts/lib/chart/scatter'
import 'echarts/lib/component/legend'

export default class DataList extends Component {
    state={
        result:[]
    }
    componentDidMount(){
        axios({
            url:'/api/data',
            method:'GET'
        }).then(res=>{
            console.log(res)
            let result=res.data.data
            this.setState({
                result
            })
            for(let i=0;i<result.length;i++){
                this.createChart('main'+i,result[i].visitCount,result[i].request,result[i].resolve)
            }
        })
        
    }
    createChart(id,visitCount,request,resolve){
        console.log(visitCount)
        var myChart=echarts.init(document.getElementById(id))
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend:{
                data:['访问量','请求IP数','解析IP数'],
                icon:'rect'
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2020-04-26']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
            {
                name:'访问量',
                type: 'scatter',
                data:visitCount
            },
            {
                name:'请求IP数',
                type: 'scatter',
                data:request
            },
            {
                name:'解析IP数',
                type: 'scatter',
                data:resolve
            }
        ]
        };
        
        myChart.setOption(option)
    }
    render() {
        return (
            <DataListWrap>
                {
                    this.state.result.length!=0?this.state.result.map((res,index)=>{
                        return (
                            <div className="listItem" key={res.id}>
                                <div className="left">
                                    <h2 className="title">域名：{res.domain}</h2>
                                    <p className="caseName">案例名称：{res.caseName}</p>
                                    <div className="center">
                                        <div>
                                            <p>
                                                来源引擎：{res.source}
                                                <InfoCircleOutlined className="icon"/>
                                            </p>
                                            <p>案例状态：{res.caseStatus}</p>
                                            <p>所属家族：{res.fimaly}</p>
                                            <p>人工诊断信息：{res.message}</p>
                                        </div>
                                        <div>
                                            <p>检测日期：{res.checkDate}</p>
                                            <p>事件类型：{res.type}</p>
                                            <p>扩线来源：{res.kuoxian}</p>
                                            <p>访问量：{res.visit}</p>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div>
                                            <EditOutlined className="icon"/>
                                            编辑
                                        </div>
                                        <i></i>
                                        <div>
                                            <SearchOutlined className="icon"/>
                                            详情
                                        </div>
                                        <i></i>
                                        <div>
                                            <Upload>
                                                <UploadOutlined className="icon"/> 上传文件
                                            </Upload>
                                        </div>
                                        <i></i>
                                        <div>
                                            <DownloadOutlined className="icon"/>
                                            下载文件
                                        </div>
                                    </div>
                                </div>
                                <div className="right" id={'main'+index} style={{width:400,height:250}}></div>
                            </div>
                        )
                    }):''
                }
                
            </DataListWrap>
        )
    }
}
