import styled from 'styled-components'

export const MainWrap=styled.div`
    
    .ant-tabs-nav{
        position:relative;
        display:flex;
        justify-content:center;
        .ant-tabs-ink-bar,.ant-tabs-ink-bar-animated{
            width:0px !important;
        }
    }
    .ant-tabs-tab{
        padding:12px 10px;
    }
    .ant-tabs-tab-active{
        color:#0371CC;
        font-weight:bold;
    }
    .ant-tabs-tab-active::after{
        display:block;
        content:'';
        position:absolute;
        width:100%;
        height:3px;
        bottom:0;
        background:#0371CC;
        left:0px;
    }
`