import styled from 'styled-components'




export const StyledError = styled.div`
  color: red;
  /* font-weight: 800; */
  /* margin: 0 0 40px 0; */

`


export const StyledLoginForm = styled.form`
  
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  height: 100%;
  flex: 2;
  max-width: 400px;
  margin:0 20px ;
  /* position:absolute; */


  @media (max-width: 586px) {
        
    
    }
`

export const StyledLabel = styled.label`
  display: block;
  font-size:16px;
  margin-top: 12px;
  margin-bottom: 2px;
  font-weight: bold;
`

export const StyledInput = styled.input`
 
  background-color:white;
  width: 100%;
  padding: 5px;
  font-size: 19px;
  border-radius: 2px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: black;

`

export const StyledButton = styled.button`
  
  width:100%;
  font-size:18px;
  font-weight: bolder;
  color: white;
  padding: 15px;
  margin-top: 10px;
  border: none;
  border-radius: 19px;
  cursor: pointer;
  background: rgb(50,70,85);
  background: linear-gradient(90deg, rgba(50,70,85,1) 56%, rgba(157,149,2,0.486453956582633) 100%, rgba(0,212,255,1) 100%);
 
`

export const StyledWelcome = styled.h1`
    font-size: 30px;
    text-align: center;
    font-weight: bolder;
    margin-top: -10px;
`


export const StyledWelcomeIcon = styled.div`
margin-bottom: 0;
text-align: center;
`

export const StyledVersion = styled.div`
    text-align:center;
    padding-top:10px;
    line-height: 0.2cm;

    h2{
      font-weight:bold;
    }

    p{
        color:gray;
        font-size:16px
    }

    @media (max-width: 586px){
      text-align:center;
    padding-top:10px;
    line-height: 0.5cm;

    h2{
      font-weight:bold;
    }

    p{
        color:gray;
        font-size:16px
    }

    }
`




