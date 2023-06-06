import styled from "styled-components";
import { devices } from "../../devices";

export const StyledContainerWrap = styled.div`
  position: absolute;

  @media (max-width: 586px) {
    background-color: red;
  }
`;

export const StyledDesc = styled.div`
  line-height: 0.3cm;

  h1 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
  }

  @media (max-width: 586px) {
    line-height: 0.41cm;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const StyledForm = styled.div`
  display: flex;
  /* gap:300px; */
  height: 100vh;
  width: 100vw;
  background-color: #063f06;
  background-image: -webkit-linear-gradient(45deg, #e6e6fa 50%, #ffff 50%);
  justify-content: space-between;
  padding: 10px 20px;
  @media ${devices.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    /* margin-top: 200px; */
    overflow-y: scroll;
  }
`;

export const StyledContainer = styled.div`
  margin-top: 10px;

  @media ${devices.tablet} {
    margin-top: 20px;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    align-items: center;
    /* align-items: flex-start; */
    /* justify-content: space-around; */
  }
  flex: 1.5;
`;

export const StyledStudent = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
  margin-top: 30px;
  margin-left: 100px;
  img {
    width: 60px;
    border-radius: 50%;
  }
  span {
    color: orange;
  }

  @media ${devices.tablet} {
    display: flex;
    gap: 20px;
    align-items: center;
    /* margin-top: 30px;

    margin-left: 65px; */
    margin: 0;

    img {
      width: 40px;
      border-radius: 50%;
    }
    span {
      color: orange;
    }
  }
`;

export const StyledTeacher = styled(StyledStudent)`
  /* margin-left: 90px;
  display: flex;
  gap: 20px;
  align-items: end;
  margin-top: 30px;

  img {
    width: 60px;
    border-radius: 50%;
  }

  @media (max-width: 586px) {
    margin-left: 60px;
  } */
`;

export const StyledAdmin = styled(StyledStudent)`
  /* margin-left: 90px;
  display: flex;
  gap: 20px;
  align-items: end;
  margin-top: 30px; */

  img {
    width: 80px;
    /* margin-top: 20px;
    height: 80px;
    border-radius: 50%; */
  }
  @media ${devices.tablet} {
  }
`;

export const StyledWork = styled.div`
  /* width:600px; */
  flex: 1.2;
  img {
    width: 300px;

    padding: 0;
    height: 200px;
    object-fit: contain;
  }
  @media ${devices.tablet} {
    display: none !important;
  }
`;
