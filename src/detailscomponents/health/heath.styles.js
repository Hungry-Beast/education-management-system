import styled from 'styled-components'

export const BodyStyled = styled.div`
    width: 100vw;
    height: 700px;
 
    display:flex;
    gap:20px;


`
export const StyledProfileCard = styled.div`
    width:280px;
    height:280px;
    margin-top:50px;
    margin-left: 40px;
    border-radius: 12px;
    background-color:white;
`

export const StyledImageCard = styled.div`
    width:160px;
    margin-left: 58px;
    margin-top: 30px;
    display:flex;
    flex-direction: column;
    align-items:center;
    gap: -0px;

    img{
        width:100%
    }
    h4{
        color: purple;
        font-size: 16px;
    }
`
export const StyledDEsc=styled.div`
    line-height: 0.2cm;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledNavbar = styled.div`
/* width: 900px;
height:80px;
background-color: white;
border-radius: 10px;
margin-top: 50px; */
`
export const StyledContainer = styled.div`
    width: 100%;
   height:100%;
    
    border-radius: 10px;
    background-color: white;
    padding: 1rem;
`

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    
    
`
export const StyledDetails = styled.div`
    margin: 15px auto;
    width: 100%;
    height: 90%;
    border: 1px solid lightgray;
    border-radius: 10px;
`
export const StyledHeading = styled.div`
    h2{
        color: black;
        margin-top: 12px;
        margin-left: 15px;
        font-weight: bolder;
        color: #172b4c;
    }
    h3{
        color: black;
        margin-top: -8px;
        margin-left: 15px;
        color: #172b4c;
    }
    h4{
        color: black;
        margin-top: -20px;
        margin-left: 15px;
        color: #172b4c;
    }
    
`
export const StyledFile = styled.div`
    button{
        background-color: #169395;
        color:white;
        padding:8px;
        border: none;
        border-radius: 5px;
        margin-left: 690px;
    }
    
`
export const StyledSearch=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


`
export const StyledShow=styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    gap: 2px;

    h4{
        border: 1px solid blue;
        padding: 3px 10px;
        border-radius: 2px;
        color: #172b4c;
    }
    
`
export const StyledBar=styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    input{
        border-radius: 5px;
        margin-right: 18px;
        border: 1px solid darkgray;
        padding: 5px;
    }
    input:hover{
        border: 1px solid black;
    }
`
export const StyledData=styled.div`
    width: 830px;
    height: 50px;
    background-color: lightgray;
    margin-left: 15px;
    border: 1px solid darkgray;
    margin-top: -10px;
`
export const StyledWrap=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    h4{
        margin-top: 5px auto;
        color: #172b4c;
    }
    h4::after{
        border-right: 1px solid black;
        height: 50px;
       
    }
`
export const StyledBorder=styled.div`
    width: 830px;
    height: 50px;
    margin-left: 15px;
    border: 1px solid darkgray ;
    border-top: none;
    /* margin-top: -19px; */
    display: flex;
    align-items: center;
    p{
        margin-left: 320px;
    }
    &:hover{
        background-color: lightgray;
    }
`
export const StyledContent=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 23px;
    margin-right: 20px;
    margin-top: 10px;
`
export const StyledTwo=styled.div`
    display: flex;
    gap: 18px;
    p:hover{
        background-color: #169395;
        padding: 5px 6px;
        border-radius: 3px;
        color: white;
        cursor: not-allowed;
    }
`
export const StyledRoutine=styled.div`
    margin-left: 20px;
    /* margin-top: -15px; */
    h3{
        color: #172b4c;
    }
`
export const StyledBlood=styled.div`
    margin-left: 20px;
    h4{
        color: #172b4c;
    }
`
export const StyledCardHeader=styled.div`
    
`
export const StyledEnd=styled.div`
    margin-left: 20px;

`
export const StyledButton=styled.div`
    button{
        background-color: #169395;
        color:white;
        padding:8px;
        border: none;
        border-radius: 5px;
        margin-left: 700px;
    }
`
export  const StyledCheckupCard=styled.div`
    width:100%;
    /* border:1px solid black; */
    align-items: center;

    line-height: 0.1rem;

    h4{
        font-size: 18px;

    }

    p{
        font-size:14px;
    }

    input{
        width:100%;
        padding:0.4rem;
    }
`

export const StyledHealthButton = styled.div`
display:flex;
gap:0.3rem;
margin-top:0.6rem;
    button{

        padding:0.5rem;
   
    }
  
`





