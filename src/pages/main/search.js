import styled from 'styled-components'

export const SearchWrap=styled.div`
    display:flex;
    .left{
        flex:1;
    }
    .right{
        width:200px;
        padding-top:5px;
    }
    .date,.search,.searchIcon,.download,.clear,.upload,.source{
        margin-left:20px;
        margin-bottom:10px;
    }
    .searchIcon,.download{
        background:#0171CD;
    }
    .upload{
        float:right;
    }
    .upload button{
        background:#0171CD;
        color:#fff;
    }
    .upload div{
        display:inline-block;
    }
    .add{
        float:right;
        background:#0171CD;
    }
    
`