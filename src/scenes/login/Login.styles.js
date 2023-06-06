
import styled from 'styled-components';


export const StyledContainerWrap = styled.div`
    position: absolute;

 @media (max-width: 586px) {
    background-color:red;
}

`
   


export const StyledDesc = styled.div`
    line-height: 0.3cm;

    h1{
        font-size: 25px;
    }
    p{
        font-size: 15px;
    }

    @media (max-width: 586px) {
        
        line-height: 0.41cm;
        h1{
        font-size: 20px;
    }
    p{
        font-size: 14px;
    }
    }
  
    
    
`

export const StyledForm = styled.div`
   display:flex;
   gap:300px;
   height:100vh;
   width:100vw;
   background-color: #063f06;
   background-image: -webkit-linear-gradient(45deg, #E6E6FA 50%, #ffff 50%); */
    
     
   @media (max-width: 768px) {
    flex-direction: column;
  }
`



export const StyledContainer = styled.div`
    margin-top: 10px;

    @media (max-width: 586px) {
        margin-bottom: -100px;
        margin-top: 20px;
        
    }
`


export const StyledStudent = styled.div`
    display:flex;
    gap:20px;
    align-items: end;
    margin-top: 30px;
    margin-left: 100px;  
    img {
        width:60px;
        border-radius: 50%;
      
    
}
    span{
        color:orange;
    }

    @media (max-width: 586px) {
        display:flex;
        gap:20px;
         align-items: center;
    margin-top: 30px;
   
    margin-left:65px;

    img {
        width:40px;
        border-radius: 50%;
      
    
}
    span{
        color:orange;
    }
    }
`



export const StyledTeacher = styled.div`
  margin-left: 90px;
    display:flex;
    gap:20px;
    align-items: end;
    margin-top: 30px;
 
    img {
        width:60px;
        border-radius: 50%}

  @media (max-width: 586px){
    margin-left: 60px;
  }
`

export const StyledAdmin = styled.div`
     margin-left: 90px;
    display:flex;
    gap:20px;
    align-items: end;
    margin-top: 30px;
    
    img{
    
        width: 80px;
        margin-top:20px;
        height: 80px;
        border-radius: 50%;
    }

    
`


export const StyledWork = styled.div`
   
/* width:600px; */

  

img{
    width:300px;
   
    padding: 0;
    margin-left: -220px;
    height: 200px;
    object-fit:contain;
    position:absolute;
}

`


