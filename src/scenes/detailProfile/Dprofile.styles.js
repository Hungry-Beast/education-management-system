import styled from "styled-components";
// import { devices } from "../../devices";


export const StyledDetailProfileWrapper = styled.div`
    width: 100vw;
    height: 100vh;
   background-color:lightgray;

`

export const StyledProfileImage = styled.div`
    margin-top:100px;
    margin-left: 60px;
    
    width: 340px;
    height: 360px;
    background-color:white;
    border:none;
    display: flex;
    flex-direction: column;
    align-items:center;
    img{
        width:250px;
        height:250px;
        border-radius:50%;
        padding:30px;
        object-fit:cover;
       
    }
`

export const StyledProfileDesc = styled.div`
    text-align:center;
    margin-top: -15px;
    line-height: 0.21cm;
    h1{
        font-size:22px;
        font-weight:bolder;
    }

    h3{
        font-size:18px;
        color:purple;
    }
`


export const StyledTabs = styled.div`
    
`