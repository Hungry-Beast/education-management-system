import styled from 'styled-components'

export const StyledFlex = styled.div`
 /* padding:2rem; */
 display:flex;
 gap:1rem;
 padding-left: 1rem;
`

export const StyledRightCard = styled.div`
    width: 90%;
    background-color: white;
    margin-left: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0;
    
`;
export const StyledHead = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`;
export const Styledheading = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;

    margin-top: 0;
    p{
        font-size: 1.5rem;
        margin-top: 2px;
        padding:0;
        
    }
    .Icon{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding:0;
        &:hover{
            cursor: pointer;
        }
    }
`;
export const StyledDesc = styled.div`
    display: flex;
    gap:2.5rem;
    padding-left: 6rem;
    border-bottom: 2px solid #ffa800;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    p{
        font-size: 1rem;
        /* margin-top: 2px; */
        &:hover{
            cursor: pointer;
            background-color: #4361EE;
            padding: 0.3rem;
            color: white;
            border-radius: 0.3rem;
        }
    }
`;
export const StyledCard = styled.div`
     background-color: #F5496FE3;
     color: #172B4C;
     padding: 12px;
     padding-top: 5px;
     width: 90%;
     height: 200px;
     border-radius: 0.5rem;
     margin-left: 1rem;
     margin-top: 1rem;
`;
export const StyledDay = styled.div`
    display: flex;
    align-items: center;
    gap: 12rem;
`;
export const StyledWeekCard = styled.div`
    background-color: #69BCF5E3;
    color: #172B4C;
     padding: 12px;
     padding-top: 5px;
     width: 90%;
     height: 200px;
     border-radius: 0.5rem;
     margin-left: 1rem;
     margin-top: 1rem;
`

export const StyledContent = styled.div`

`;
export const StyledWeekContent = styled.div`

`;
export const StyledWeekDesc = styled.div`

`;
export const StyledMonthCard = styled.div`
     background-color: #F5496FE3;
     color: #172B4C;
     padding: 12px;
     padding-top: 5px;
     width: 90%;
     height: 200px;
     border-radius: 0.5rem;
     margin-left: 1rem;
     margin-top: 1rem;
`