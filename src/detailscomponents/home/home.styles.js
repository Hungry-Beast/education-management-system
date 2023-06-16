import styled from "styled-components";

export const StyledHomeCard = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #faf9f6;
  border-radius: 0.4rem;
`;

export const StyledHomeInner = styled.div`
  background-color: white;
  height: 20%;
  width: 100%;
  margin-bottom:1rem;
  padding-bottom: 3rem;
  padding-top: 0.2rem;
  border-radius: 0.4rem;
  h1 {
    margin-left: 0.2rem;
    font-size: 1.4rem;
    font-weight: lighter;
  }
`;

export const StyledGrayLine = styled.div`
  border: 0.009rem solid lightgray;
`;

export const StyledSecondContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledGreenCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledBloodPressureCard = styled.div`
  width: 40%;
  padding: 0.7rem;
  border-radius: 0.4rem;
  background-color: #c7ffc7;
  line-height: 0.4rem;
  font-size: 0.6rem;

  align-items: center;
  gap: 1rem;

  h1 {
    font-weight: lighter;
  }
`;

export const StyledBloodPressure = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h1 {
    font-weight: bolder;
  }
`;

export const StyledIcon = styled.div`
  font-size: 1.3rem;
`;

export const StyledFever = styled.div`
  width: 40%;
  height: 10%;
  padding: 0.7rem;
  border-radius: 0.4rem;
  background-color: #c7ffc7;
  font-size: 0.6rem;
`;

export const StyledEmergency = styled.div`
  font-size: 1.3rem;
  width: 40%;
  height: 10%;
  padding: 0.7rem;
  border-radius: 0.4rem;
  background-color: #c7ffc7;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
`;

export const StyledDoctor = styled.div`
  line-height: 0.1rem;
  width: 40%;
  height: 10%;
  padding: 0.7rem;
  border-radius: 0.4rem;
  background-color: #c7ffc7;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  h1 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    font-size: 1rem;
  }
`;

export const StyledGreenSide = styled.div`
  width: 50%;
  background-color: white;
  border-radius: 0.4rem;

  h1 {
    font-size: 1.2rem;
    font-weight: lighter;
    padding: 0.6rem;
  }
`;

export const StyledGreenSideInnerCard = styled.div``;

export const StyledStaffName = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.1rem;
  }

  h2 {
    margin-right: 3.5rem;
  }

  margin: 0.4rem;
`;

export const StyledGreenSidebmi = styled.div`
  border-bottom: 0.004rem solid lightgray;
  border-top: 0.004rem solid lightgray;
  margin: 0.4rem;
  display: flex;
  padding: 0.8rem;
  justify-content: space-between;
`;

export const StyledWeight = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  border-right: 0.004rem solid lightgray;

  h1 {
    font-size: 1rem;
  }
`;

export const StyledHeight = styled(StyledWeight)`
  font-size: 3.5rem;

  align-items: end;
`;

export const StyledBmi = styled(StyledWeight)`
  border: none;
`;

export const StyledThirdInnerCard = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const StyledAttendance = styled.div`
  width: 38%;
  border-radius: 0.7rem;
  background-color: #d8e4ec86;

  h1 {
    font-size: 1.4rem;
    padding: 0.7rem;
  }
  &:hover {
    box-shadow: 0.3rem 0.4rem 0.3rem 0.4rem lightgray;
  }
`;

export const StyledPresentAbsent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 0.9rem;
  padding-left: 1.5rem;

  font-size: 1.4rem;

  h1 {
    margin-top: 0.1rem;
    font-size: 1.1rem;
    font-weight: lighter;
  }
`;

export const StyledSideNumber = styled.div``;

export const StyledFlex = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-right: 1.4rem;

  h4 {
    color: #1dbfc1;
    font-size: 1.4rem;
  }

  h3 {
    color: #ee3158;
    font-size: 1.3rem;
  }
`;

export const StyledFinance = styled.div`
  width: 60%;
  border-radius: 0.7rem;
  background-color: #d8e4ec86;

  h1 {
    font-size: 1.4rem;
    padding: 0.7rem;
  }
  &:hover {
    box-shadow: 0.3rem 0.4rem 0.3rem 0.4rem lightgray;
  }
`;

export const StyledTotalInvoice = styled(StyledPresentAbsent)`
  font-size: 1.4rem;
  h1 {
    margin-top: 0.1rem;
    font-size: 1.1rem;
    font-weight: lighter;
  }
`;

export const StyledLibraryCard = styled.div`
  width: 100%;
  border-radius: 0.7rem;
  background-color: #d8e4ec86;
  h1 {
    font-size: 1.4rem;
    padding: 0.7rem;
  }
  &:hover {
    box-shadow: 0.3rem 0.4rem 0.3rem 0.4rem lightgray;
  }
`;

export const StyledTotalBooks = styled(StyledPresentAbsent)`
  font-size: 1.4rem;
  h1 {
    margin-top: 0.1rem;
    font-size: 1.1rem;
    font-weight: lighter;
  }
`;

export const StyledAddandMapCard = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledStaffAddress = styled.div`
  background-color: white;
  width: 35%;
  height: 20%;
  margin-top: 1rem;
  padding: 0.7rem;
  border-radius: 0.4rem;
  h1 {
    font-size: 1.1rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

export const StyledMap = styled.div`
  width: 65%;
  background-color: white;

  margin-top: 1rem;
  padding: 0.7rem;
  border-radius: 0.4rem;
`;
