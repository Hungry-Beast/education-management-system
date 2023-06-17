import styled from "styled-components";



export const StyledMain = styled.div`
  /* Your styles here */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-135deg,#c850c0,#4158d0);
  background-size: cover;

`;

export const StyledSubmain = styled.div`
display: flex;
height: 500px;
width:850px;
background-color: whitesmoke;
border-radius: 10px;
box-sizing: border-box;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin:0px;
padding: 0px;
margin-left: 100px;
margin-top: 60px;
margin-bottom: 60px;
position: relative;

@media (max-width: 1024px){
    width: 100%;
    margin-left: 20%;
    margin-right: 20%;
}

@media (max-width: 480px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 3px;
    margin-bottom: 5px;
  }

`;

export const StyledCol1 = styled.div`

@media (max-width: 1024px){
    width: 230px;
    margin-top: 150px;
    margin-left: 5px;
    margin-bottom: 60px;
    height:100%;
}


  @media (max-width: 768px) {
    width: 60%;
    margin-top: 0px;
    margin-bottom: 2px;
    margin: auto;
    height: 40px;
  }
  


img{
  width: 350px;
  height: 70%;
  object-fit: cover;
  align-self: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  margin-top:70px;
  margin-left: 70px;
  padding-top: 50px;
  padding-bottom: 80px;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 70px;
  margin-bottom: 70px;

  @media (max-width: 1024px){
    width:150px;
    margin-top:30px;
    margin-bottom:30px;
    margin:auto;
    padding-left:2px;
    padding-right:2px;
    padding-top:5px;
    padding-bottom:5px;
    display:flex;
    height:30%;

    
  }


  @media (max-width: 768px){
    width:150px;
    height:150px;
    margin-top:25px;
    margin:auto;

  }

  

}


`;

export const StyledCol2 = styled.div`
margin-top:30px;
margin-right:70px;
margin-left:50px;
margin-bottom:70px;
padding: 3em 0;

@media (max-width: 1024px){
    width: 20%;
    height: 40%;
    margin-bottom: 80%;
    margin-left:30px;
    align-items: center;
    justify-content: center;

  }

  @media (max-width: 480px){
    width:100%;
    margin-bottom:2px;
    margin-top:120px;
    justify-content:center;
    margin-left:10px;
    margin-right:10px;
    padding-top:2px;
    height:70%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px){
    width:100%;
    margin-top:120px;
    margin-bottom:20px;
    margin:auto;
    height:70%;
    align-items: center;
    justify-content: center;
    padding-bottom:10px;
  }

  @media (max-width: 380px){
    margin-top:70px;
    padding-top:8px;
    align-items: center;
    justify-content: center;
  }
}
`;

export const StyledTitle = styled.span`
font-size:24px;
color: #333;
line-height: 1.2;
text-align: center;
width: 100%;
display: block;
padding-bottom: 40px;
font-weight: 900;

@media (man-width: 380px){
    padding-bottom:30px;
    padding-top:8px;
    display:block;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px){
    padding-bottom:10px;
    align-items: center;
    justify-content: center;
    padding-top:20px;
    padding:auto;
}
`;



export const StyledGroup1 = styled.div`
position: relative;
width: 250px;
z-index: 1;
margin-bottom: 20px;
border-radius: 9px;
display:flex;
height:50px;
border:none;
outline:none;
font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: flex;
    width: 240px;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 12px 0 18px;
    outline: none;
    border: none;
    overflow: visible;
    position: relative;

    @media (max-width: 1024px){
        position: relative;
  width: 170px;
  display:flex;
  outline:none;
  padding-left:3px;
    }


    

    @media (max-width: 768px){
        margin:top:10px;
        margin:auto;
        width:220px;
        justify-content:center;
    }


input{
    font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: flex;
    width: 100%;
    background: #e6e6e6;
    height: 100%;
    border-radius: 25px;
    padding: 0 12px 0 18px;
    outline: none;
    border: none;
    overflow: visible;
    position: relative;

    @media (max-width: 1024px){
        display:flex;
        width:150px;
        outline:none;
    }

    @media (max-width: 768px){
        display:flex;
        width:150px;
        outline:none;
    }

   
    
}




`;


export const StyledLockicon = styled.span`  
    position: relative;
      margin-top:15px;
      margin-bottom:10px;
      margin-right:3px;
      margin-left:10px;
      display:inline;
      outline:none;

      @media (max-width: 1024px){
        position: relative;
        margin-top:15px;
        margin-bottom:2px;
        margin-right:15px;
        margin-left:4px;
        display:inline ;
        box-sizing:border-box;
        width:2px;
      }

      @media (max-width: 768px){
        display:none;
      }
      



      
`;

export const StyledGroup2 = styled.div` 
position: relative;
width: 250px;
z-index: 1;
margin-bottom: 20px;
border-radius: 9px;
display:flex;
height:50px;
border:none;
outline:none;
font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: flex;
    width: 240px;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 12px 0 18px;
    outline: none;
    border: none;
    overflow: visible;
    position: relative;

    @media (max-width: 1024px){
        position: relative;
  width: 170px;
  display:flex;
  outline:none;
  padding-left:3px;
    }

    @media (max-width: 768px){
        margin:auto;
        width:220px;
        justify-content:center;
        margin-top:20px;
    }

   



input{
    font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: flex;
    width: 100%;
    background: #e6e6e6;
    height: 100%;
    border-radius: 25px;
    padding: 0 12px 0 18px;
    outline: none;
    border: none;
    overflow: visible;
    position: relative;
    

@media (max-width: 1024px){
    display:flex;
    width:150px;
    outline:none;
}
@media (max-width: 768px){
    display:flex;
    width:150px;
    outline:none;
}
}



`;

export const StyledGroup3 = styled.div`
position: relative;
width: 250px;
z-index: 1;
margin-bottom: 20px;
border-radius: 9px;
display:flex;
height:50px;
border:none;
outline:none;
font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: flex;
    width: 240px;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 12px 0 18px;
    outline: none;
    border: none;
    overflow: visible;
    position: relative;

    @media (max-width: 1024px){
        position: relative;
  width: 170px;
  display:flex;
  outline:none;
  padding-left:3px;
    }

    @media (max-width: 768px){
        margin:auto;
        width:220px;
        justify-content:center;
        margin-top:20px;
    }

  


input{
    font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: flex;
    width: 100%;
    background: #e6e6e6;
    height: 100%;
    border-radius: 25px;
    padding: 0 12px 0 18px;
    outline: none;
    border: none;
    overflow: visible;
    position: relative;

    @media (max-width: 1024px){
        display:flex;
        width:150px;
        outline:none;
    }
 
   
    @media (max-width: 768px){
        display:flex;
        width:150px;
        outline:none;
    }
    
    
}


`;



 

export const StyledButton = styled.button`
width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  margin-top: 50px;
font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background: #57b846;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  border:none;
  outline:none;

  @media (max-width: 1024px){
    width:180px;
  }

  @media (max-width: 768px){
    margin:auto;
    margin-top:20px;
    width:200px;
  }

`;
