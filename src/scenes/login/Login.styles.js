
import styled from 'styled-components';



export const StyledDesc = styled.div`
    line-height: 0.3cm;

    h1{
        font-size: 25px;
    }
    p{
        font-size: 15px;
    }
    
`

export const StyledForm = styled.div`
   display:flex;
   gap:350px;
`



export const StyledContainer = styled.div`
    margin-top: 50px;
`


export const StyledStudent = styled.div`
    display:flex;
    gap:20px;
    align-items: end;
    margin-top: 30px;
    margin-left: 130px;

    img {
        width:60px;
        border-radius: 50%;
      
    
}
    span{
        color:orange;
    }
`



export const StyledTeacher = styled(StyledStudent)`
  margin-top:60px;
`

export const StyledAdmin = styled(StyledStudent)`
    img{
    
        width: 80px;
        margin-top:30px;
        height: 80px;
        border-radius: 50%;
    }
`


export const StyledWork = styled.div`
    margin-right: -350px;

img{
    padding: 0;
    margin-left: -370px;
    height: 200px;
    object-fit:contain;
    position:absolute;
}

`


