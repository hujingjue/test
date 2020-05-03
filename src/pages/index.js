import styled from 'styled-components'

export const IndexWrap=styled.div`
    height:100%;
    .ant-layout,.ant-layout-has-sider{
        height:100%;
    }
    .ant-layout-header{
        padding-right:30px !important;
        .user{
            float:right;
            display:flex;
            justify-content:center;
            align-self: center;
            color:#000;
            .icon-user{
                font-size:34px;
                margin-left:10px;
                display:inline-block;
                height:100%;
            }
        }
        
    }
`