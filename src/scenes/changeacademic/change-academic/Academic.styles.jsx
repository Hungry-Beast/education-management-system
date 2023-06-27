
import styled from 'styled-components'

// export const Container=styled.div`
//     background-color: lightgray;
//     /* width: 100%; */
// `;
export const StyledContainer=styled.div`
    width: 97%;
    padding: 1rem ;
    background-color: white;
    margin-top: 0%;
    /* margin-top: 12%; */
    margin-left:1rem;
    border-radius: 0.5rem;
    /* border: 1px solid black; */

    h5{
        font-size: 16px;
        color: blue;
    }
    input{
        padding: 0.6rem;
        border: 1px solid lightgray;
        border-radius: 0.5rem;
        width: 40%;
        &:hover{
            cursor: pointer;
            
        }
    }
    button{
        width: 5rem;
        padding:  0.8rem 1rem;
        background-color: #169395;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem;
        margin-top: 0.5rem;
    }
`;
export const StyledDesc=styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    border-top: 1px solid lightgray;
    border-top-width: 100%;
    margin-top: 2rem;
    h4{
        color: purple;
    }
`;
export const StyledDetails=styled.div`
    display: flex;
    flex-direction: column;

    h5{
        margin-bottom: 0.3rem;
        margin-top: 0;
    }
    /* gap: 0.2rem; */
`;
export const StyledModal=styled.div`
    width: 70%;
    display: flex;
    padding-left:30%;
    flex-direction: column;
    align-items: center;
    gap: 0;
    img{
        width: 50%;
    }
    h2{
        font-size: 1.6rem;
        margin-bottom: 0;
    }
    p{
        font-size: 1rem;
    }
    button{
        background-color: #7066e0;
        color: white;
        padding: 1rem;
        border-radius: 0.2rem;
        border: none;
    }
`;

