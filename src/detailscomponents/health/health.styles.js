import styled from "styled-components";

export const BodyStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
`;
export const StyledProfileCard = styled.div`
  width: 280px;
  height: 280px;
  margin-top: 50px;
  margin-left: 40px;
  border-radius: 12px;
  background-color: white;
`;

export const StyledImageCard = styled.div`
  width: 160px;
  margin-left: 58px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -0px;

  img {
    width: 100%;
  }
  h4 {
    color: purple;
    font-size: 16px;
  }
`;
export const StyledDEsc = styled.div`
  line-height: 0.12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledNavbar = styled.div`
  /* width: 900px;
height:80px;
background-color: white;
border-radius: 10px;
margin-top: 50px; */
`;
export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.4rem;
  background-color: white;
  padding: 3rem;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
export const StyledDetails = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 1rem;
`;
export const StyledHeading = styled.div`
  h2 {
    color: black;

    font-weight: bolder;
    color: #172b4c;
  }
  h3 {
    color: black;

    color: #172b4c;
  }
  h4 {
    color: black;

    color: #172b4c;
  }
`;

export const StyledHeadingDesc = styled.div`
  line-height: 0.1rem;
`;
export const StyledFile = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  /* button {
    background-color: #169395;
    color: white;
    padding: 0.7rem;
    border: none;
    border-radius: 0.4rem;
    margin-left: 77%;
  } */
`;
export const StyledAttachment = styled.div`
  width: 95%;
  /* margin: 2rem auto; */
  background-color: white;
  padding: 1rem;
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.4rem;
    border-radius: 0.3rem;
    border: 1px solid #169395;
  }
  p{
    color: #169395;
  }
`;
export const StyledAttachButton = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-left: 75%;
  button {
    padding: 0.4rem;
  }
`;

export const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledShow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  gap: 2px;

  h4 {
    border: 1px solid blue;
    padding: 3px 10px;
    border-radius: 2px;
    color: #172b4c;
  }
`;
export const StyledBar = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  input {
    border-radius: 5px;
    margin-right: 18px;
    border: 1px solid darkgray;
    padding: 5px;
  }
  input:hover {
    border: 1px solid black;
  }
`;
export const StyledData = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 3rem;
  background-color: lightgray;
  /* margin-left: 1rem;
  margin-right: 1rem; */

  border: 1px solid darkgray;
  margin-top: 2rem;
`;
export const StyledWrap = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-around;
  border:1px solid red;
  

  h4 {
    margin-top: 5px auto;
    color: #172b4c;
  }
  h4::after {
    border-right: 1px solid black;
    height: 50px;
  } */
`;
export const StyledBorder = styled.div`
  /* width: 98%; */

  /* margin-top: -19px; */
  display: flex;
  align-items: center;
  p {
    margin-left: 40%;
    color: #169395;
  }
  &:hover {
    background-color: lightgray;
  }
`;
export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-left: 23px;
  margin-right: 20px;
  margin-top: 10px; */
`;
export const StyledTwo = styled.div`
  display: flex;
  gap: 1rem;
  p:hover {
    background-color: #169395;
    padding: 0.4rem 0.6rem;
    border-radius: 0.4rem;
    color: white;
    cursor: not-allowed;
  }
`;
export const StyledRoutine = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  /* margin-top: -15px; */
  h3 {
    color: #172b4c;
  }
`;
export const StyledBlood = styled.div`
  h4 {
    color: #172b4c;
  }
`;
export const StyledCardHeader = styled.div``;

export const StyledEnd = styled.div``;

export const StyledButton = styled.div`
  /* button {
    background-color: #169395;
    color: white;
    padding: 0.4rem;

    border-radius: 0.4rem;
    /* margin-left: 40rem; */
`;
export const StyledButtons = styled.div`
  margin-left: 20rem;
  display: flex;
  gap: 1rem;
`;
export const StyledCheckupCard = styled.div`
  width: 95%;
  /* margin: 1rem auto; */
  padding: 1rem;
  /* border:1px solid black; */

  background-color: white;

  line-height: 0.1rem;

  h4 {
    font-size: 1.6rem;
    color: #169395;
  }

  p {
    font-size: 1rem;
    color: #169395;
  }

  input {
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #169395;
    border-radius: 0.2rem;
  }
`;

export const StyledHealthButton = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-top: 0.6rem;
  button {
    padding: 0.5rem;
  }
`;
export const StyledDesc = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const StyledLast = styled.div`
    display: flex;
    gap: 3rem;
    p:hover{
        padding: 0.3rem;
        background-color: #169395;
        color: white;
        cursor: not-allowed;
        border-radius: 0.2rem;
    }
`;