import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';

export const StyledInside=styled.div`
    background-color: white;
    color: black;

    margin: 3% auto;
    padding: 1rem;
    border-radius: 0.3rem;
    /* text-align: center; */
    h3{
        padding: 1rem;
        border-bottom: 2px solid black;
    }
    h4{
        color: #169395;
    }
    input{
        width: 100%;
        padding-top:0.5rem;
        padding-bottom:10rem;
        border: 1px solid #169395;
        border-radius: 0.5rem;
        margin-bottom:0;
    }
`;
export const StyledHead=styled.div`
    margin-left: 90%;

    p{
        font-size: 0.9rem;
    }
    button{
        background-color: #169395;
        color: white;
        padding: 0.5rem;
        border-radius: 0.3rem;
        margin-right: 1.5rem;
    }

`;
export const StyledTwo=styled.div`
    display: flex;
    justify-content: space-between;
    h4{
        color: #169395;
    }
`;
export const StyledInput = styled.div`
    display: flex;
   
    justify-content: space-around;
    gap: 1rem;
    input{
        border: 1px solid #169395;
        padding: 0.5rem;
        
        border-radius: 0.3rem;
    }
`;
export const StyledButtons = styled.div`
    display:flex;
    gap:0.5rem;
    margin-left:70%;
    margin-bottom:1rem;
    margin-top:0;
   
`;
export const StyledShowandSearchContainer = styled.div`
    
    /* padding:1rem; */
    display:flex;
    justify-content:space-between;
    margin-top: 2rem;
    
`;
export const StyledShow = styled.div`
    display:flex;
    width:25%;
    gap:0.5rem;
    align-items:center;
    @media(max-width: 768px){
        width: 40%;
        display: flex;
        gap: 1rem;
    }
`

export const StyledSearch = styled.div`
    display:flex;
    margin-right:2rem;
    align-items:center;
    gap: 0.5rem;
    border-radius: 0.3rem;
    @media(max-width: 768px){
        margin-right: 0.5rem;

    }

    input{
        width:100%;
        height:1.7rem;
    }
`;
export const StyledDataGrid = styled(DataGrid)`
  .MuiDataGrid-root {
    border: 1px solid black;
    border-radius: 4px;
    font-family: Arial, sans-serif;
  }

  .MuiDataGrid-row {
    border: 1px solid lightgray;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: black;
    }
  }
  .MuiDataGrid-column{
    border: 1px solid lightgray;
  }

  .MuiDataGrid-cell {
    padding: 8px;
  }
  .MuiTablePagination-root {
    display: none;
  }
`;
export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ActionIcon = styled.span`
  cursor: pointer;
`;
export const ModalNav = styled.div`
     width: 100%;
    background-color: #1dbfc1;
    text-align: center;
    border-radius: 10px;
    padding: 2px 10px;
    border-bottom: 2px solid #ffa800;
    margin: 0;

`;
export const ModalDesc = styled.div`
   padding-left: 0.7rem;
   line-height: 0;
   input{
    width: 97%;
    padding: 0.6rem;
    border-radius: 0.4rem;
    color: black;
    border: 1px solid #3246D3;
    background-color: #d5e3e5;
   }
   h4{
    color: #3246D3;
   }
   .btn-2{
    border: 1px solid #bdc0d8;
    background-color: #eff2f3;
    padding: 0.5rem;
    /* margin-left: 60%; */
   }
   .btn-1{
    background-color:'#1dbfc1';
    color: black;
    padding: 0.5rem 0.7rem;
   }
   button{
    background-color: #d5e3e5;
    border: 1px solid #bdc0d8;
    padding: 0.5rem;
   }
   .desc{
    padding-bottom: 2rem;
   }
   .star{
    color: red;
  }

`;
export const ModalType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.9rem;
  h4{
    color: #3246D3;
  }
  
`;
export const ModalFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0;
  padding: 0;
  h4{
    color: #3246D3;
  }
  
`;
export const ModalTwo = styled.div`
   display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0;
    padding: 0;
    h4{
      color: #3246D3;
    }
`;
export const ModalDate = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;

  
`;

export const ModalInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  input{
    width: 47%;
  }
`;
export const ModalLast = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ModalButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 70%;

`;
export const StyledTop = styled.div`
  display: flex;
  align-items: start;
  gap:2rem;


 input{
  width:90%;
  padding:0.6rem;
  border-radius:0.4rem;
 }

 
`;
export const StyledContainer = styled.div`
  padding-left: 0.5rem;
  .star{
    color: red;
  }
`;
export const StyledIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
 
    .Icons{
      cursor: pointer;
      &:hover{
        color: #1dbfc1;
      }
      
      label{
        font-size: bold;
      }
    }
  
`;
export const ModalIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
 

`;
export const ModalIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-left: 7.8rem;

`;
export const StyledMark = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const StyledMarkend = styled.div`
margin-top:1rem;
  margin-bottom:2rem;
display: flex;
  align-items: center;
  gap: 2rem;
  /* border:1px solid red; */
  justify-content:space-around;
`;
export const StyledMarkCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* border:1px solid red; */
  /* justify-content:space-between; */
`;
export const StyledTick = styled.div`
 margin-left: 7rem;
 
`;
export const StyledDate = styled.div`
  display: flex;
  align-items: center;
 
  gap: 27rem;
`;

export const StyledDateR = styled.div`
  display: flex;
  align-items: center;
  gap: 20.9rem;
`;


export const StyledDateA = styled.div`
  display: flex;
  align-items: center;
  gap: 17rem;
`;
export const Styleddate = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyleddateColor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


export const StyledButton = styled.div`
  margin-left: 91%;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  .btn-1{
    background-color: #3246D3;
    color: white;
    padding: 0.6rem;
    border-radius: 0.2rem;
    cursor: pointer;
    &:hover{
      background-color: #3246D3;
    }
  }

`

export const StyledFlex = styled.div`
    display: flex;
`