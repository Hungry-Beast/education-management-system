import styled from "styled-components";

export const StyledToggleEdit = styled.div`
  margin-left: 85%;
`;

// profile wrapper
export const StyledProfileCard = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 2rem;
  background-color: white;
  border-radius: 1.25em;
`;

// Profile border
export const StyledProfileBorder = styled.div`
  height: 100%;
  border-radius: 1.25em;
  border: 1px solid lightgray;
  padding: 2rem;
  font-size: 0.9rem;
  font-weight: bold;
`;

// profile first section
export const StyledProfileFirtCard = styled.div`
  /* border:1px solid black; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  input {
    padding: 10px 10px;
    width: 100%;
  }
`;

export const StyledRfid = styled.div`
margin-bottom:2.6rem`;

export const Label = styled.div`
  margin-bottom: 2px;
`;

// first section left and right card

export const StyledProfileFirstLeftCard = styled.div`
  width: 90%;
`;
export const StyledProfileFirstRightCard = styled.div`
  width: 90%;
  /* display: flex;
  flex-direction: column;
  align-items:flex-end; */
`;

// personal heading

export const StyledStaffPersonal = styled.div`
  padding: 0.1rem;
  padding-left: 0.7rem;
  /* margin-top: -3.5rem; */
  /* margin-left:0.7rem;
   margin-right:0.7rem; */
  margin-bottom: 30px;
  background-color: #e3f2fd;
  border: none;

  h1 {
    font-size: 1.25rem;
  }
`;

// communication heading
export const StyledCommunicationDetails = styled(StyledStaffPersonal)`
  margin-top: 2rem;
  padding: 0.7rem;
  font-size: 1.2rem;
`;

// second card profile

export const StyledProfileSecondCard = styled(StyledProfileFirtCard)`
  /* border:1px solid black; */
`;

// second card left and right card
export const StyledProfileSecondLeftCard = styled.div`
  width: 90%;
`;

export const StyledProfileSecondRightCard = styled.div`
  width: 90%;
`;

// Communication partition line
export const StyledCommunicationDetailsLine = styled.div`
  border-top: 3px solid lightgray;
  width: 100%;
  margin-top: 30px;
`;
// profile third section card
export const StyledProfileThirdCard = styled(StyledProfileFirtCard)`
  /* border:1px solid black; */
  margin-top: 20px;
`;

// porfile third left and right card
export const StyledProfileThirdLeftCard = styled.div`
  width: 90%;
`;

export const StyledProfileThirdRightCard = styled.div`
  width: 90%;
`;




// upload photo

export const StyledPhoto = styled.div`
margin-top:10px;
`;

export const StyledRadio = styled.div`
 
`