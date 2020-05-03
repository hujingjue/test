import styled from 'styled-components'

export const DataListWrap=styled.div`
    .listItem{
        border-top:1px solid #E2E3E3;
        margin-top:20px;
        padding:20px 0;
        display:flex;
        justify-content:space-between;
        .title{
            font-weight:bold;
            font-size:16px;
        }
        .caseName{
            font-size:14px;
            color:#979797;
            margin:10px 0;
        }
        .center{
            display:flex;
            color:#333;
            justify-content:space-between;
            .icon{
                color:#3889CE;
                margin-left:10px;
            }
        }
        .bottom{
            display:flex;
            margin-top:20px;
            color:#B0B0B0;
            i{
                display:inline-block;
                width:1px;
                height:20px;
                background:#E1E1E1;
                margin:0 15px;
                line-height:12px;
            }
            .icon{
                margin-right:10px;
            }
        }
    }
`