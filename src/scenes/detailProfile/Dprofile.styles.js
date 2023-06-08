import styled from "styled-components";
// import { devices } from "../../devices";

export const StyledDetailProfileWrapper = styled.div`
    width: 100vw; 
    background-color:lightgray;
    /* display:flex; */
    gap:30px;
    
    
`

export const StyledProfileFlex = styled.div`
    display:flex;
    gap:40px;
`

export const StyledProfileImage = styled.div`
    margin-top:100px;
    margin-left: 60px;
    border-radius:10px;
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

export const StyledTabandDetailFlex = styled.div`
    display:flex;
    flex-direction: column;
    gap:10px;
   
/* border:1px solid black;
height:100vh; */
`

export const StyledTabs = styled.div`
    
`


export const StyledTabContainer = styled.div`
    width: 950px;
    height:58px;
    margin-top:100px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color:white;
    border:none;
    border-radius: 12px;

    
`


export const StyledButton = styled.button`
    
    padding:6px;
    border-radius: 10px;
    font-size: 17px;
    background-color:white;
    border:none;
    
    &:hover{
        background-color:lightgray;
    }

    &:active{
        background-color:#4361ee;
    }
    
`


export const StyledInputDetails = styled.div`
    width:950px;
    border-radius: 12px;
    
    height:100vh;
    background-color:white;
    
    
    

`

export const StyledInputDetailLeft = styled.div`
    /* padding-left:40px;
    padding-top: 100px;
    border:1px solid black; */
    
`


