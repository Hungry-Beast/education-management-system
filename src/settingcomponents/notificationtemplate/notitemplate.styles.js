import styled from "styled-components";

export const StyledNotiCard = styled.div``;

export const StyledFlex = styled.div`
  display: flex;
  gap: 40%;
`;

export const StyledSearchModule = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  button {
    padding: 0.9rem;
    background-color: #1dbfc1;
    border: none;
    border-radius: 0.3rem;
  }

  input {
    padding: 0.4rem;
  }
`;

export const StyledSearch = styled.div``;

export const StyledModules = styled.div``;

export const ToggleLabel = styled.label`
  /* Your styles for the toggle labels */
`;

export const ToggleIcon = styled.span`
  background-color: ${(props) => (props.checked ? "#1dbfc1" : "transparent")};
  
`;

export const StyledToggle = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-left: 2rem;
`;

export const StyledApplication = styled.div``;

export const StyledModuleApplicationCard = styled.div`
  display: flex;
  gap: 40%;
`;

export const CheckboxLabel = styled.label`
  /* display: flex; */
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

export const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`;

export const StyledApplicationCheckCard = styled.div`
  margin-top: 1rem;

  margin-bottom: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export const StyledCheckThirdBox = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.4rem;
`;

export const StyledBorder = styled.div`
  border: 0.5px solid lightgray;
  margin: 1rem;
`;
export const StyledToggleAca = styled.div``;

export const StyledAdmittedStudent = styled.div``;

export const StyledModalButton = styled.div`

`