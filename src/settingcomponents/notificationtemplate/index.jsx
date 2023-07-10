import React, { useState } from "react";
import Toggle from "react-toggle";
import {
  StyledNotiCard,
  StyledSearchModule,
  StyledSearch,
  StyledModules,
  ToggleLabel,
  ToggleIcon,
  StyledToggle,
  StyledApplication,
  StyledModuleApplicationCard,
  CheckboxLabel,
  CheckboxInput,
  StyledApplicationCheckCard,
  StyledCheckThirdBox,
  StyledBorder,
  StyledAdmittedStudent,
  StyledToggleAca,
  StyledFlex,
  StyledModalButton,
} from "./notitemplate.styles";
import "react-toggle/style.css";


import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";

import NotiModal from "./NotiModal";


export default function NotificationTemplate() {
  const [open, setOpen] = React.useState(false);
  const [ButtonOpen, setButtonOpen] = React.useState(false);
  const handleButtonOpen = () => setButtonOpen(true);
  const handleButtonClose = () => setButtonOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [academicSessions, setAcademicSessions] = useState({
    academic: false,
    created: false,
    updated: false,
    deleted: false,
  });
  const [notificationMethods, setNotificationMethods] = useState({
    pushSMS: false,
    SMS: false,
    email: false,
  });

  const handleToggle = (toggleName) => {
    setAcademicSessions((prevState) => ({
      ...prevState,
      [toggleName]: !prevState[toggleName],
    }));
  };

  const handleCheckboxChange = (checkboxName) => {
    setNotificationMethods((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  return (
    <StyledNotiCard>
      <StyledSearchModule>
        <StyledSearch>
          <input type="text" placeholder="search" />
        </StyledSearch>

        <StyledModalButton>
        <Button
                color="success"
                variant="contained"
                onClick={handleButtonOpen}
              >
                Enable Module
              </Button>

              <Modal
                open={ButtonOpen}
                onClose={handleButtonClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                  <NotiModal handleClose={handleButtonClose}/>
                
              </Modal>
        </StyledModalButton>
       
      </StyledSearchModule>

      <StyledModuleApplicationCard>
        <StyledModules>
          <p>Modules</p>

          <StyledToggleAca>
            <Toggle
              id="academicToggle"
              checked={academicSessions.academic}
              onChange={() => handleToggle("academic")}
              icons={{
                checked: <ToggleIcon checked />,
                unchecked: <ToggleIcon />,
              }}
            />
            <ToggleLabel htmlFor="createdToggle">Academic session</ToggleLabel>
          </StyledToggleAca>

          <StyledToggle>
            <Toggle
              id="createdToggle"
              checked={academicSessions.created}
              onChange={() => handleToggle("created")}
              icons={{
                checked: <ToggleIcon checked />,
                unchecked: <ToggleIcon />,
              }}
            />
            <ToggleLabel htmlFor="createdToggle">Created</ToggleLabel>
          </StyledToggle>

          <StyledToggle>
            <Toggle
              id="updatedToggle"
              checked={academicSessions.updated}
              onChange={() => handleToggle("updated")}
              icons={{
                checked: <ToggleIcon checked />,
                unchecked: <ToggleIcon />,
              }}
            />
            <ToggleLabel htmlFor="updatedToggle">Updated</ToggleLabel>
          </StyledToggle>

          <StyledToggle>
  <Toggle
    id="deletedToggle"
    checked={academicSessions.deleted}
    onChange={() => handleToggle("deleted")}
    icons={{
      checked: <ToggleIcon checked />,
      unchecked: <ToggleIcon />,
    }}
  />
  <ToggleLabel htmlFor="deletedToggle">Deleted</ToggleLabel>
</StyledToggle>
        </StyledModules>

        <StyledApplication>
          <p>Application For</p>

          <StyledApplicationCheckCard>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={notificationMethods.pushSMS}
                onChange={() => handleCheckboxChange("pushSMS")}
              />
              Push
            </CheckboxLabel>

            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={notificationMethods.SMS}
                onChange={() => handleCheckboxChange("SMS")}
              />
              SMS
            </CheckboxLabel>

            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={notificationMethods.email}
                onChange={() => handleCheckboxChange("email")}
              />
              Email
            </CheckboxLabel>
          </StyledApplicationCheckCard>

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.pushSMS}
              onChange={() => handleCheckboxChange("pushSMS")}
            />
            Push
          </CheckboxLabel>

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.SMS}
              onChange={() => handleCheckboxChange("SMS")}
            />
            SMS
          </CheckboxLabel>

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.email}
              onChange={() => handleCheckboxChange("email")}
            />
            Email
          </CheckboxLabel>

          <StyledCheckThirdBox>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={notificationMethods.pushSMS}
                onChange={() => handleCheckboxChange("pushSMS")}
              />
              Push
            </CheckboxLabel>

            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={notificationMethods.SMS}
                onChange={() => handleCheckboxChange("SMS")}
              />
              SMS
            </CheckboxLabel>

            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={notificationMethods.email}
                onChange={() => handleCheckboxChange("email")}
              />
              Email
            </CheckboxLabel>
          </StyledCheckThirdBox>
        </StyledApplication>
      </StyledModuleApplicationCard>

      <StyledBorder></StyledBorder>
      <StyledFlex>
        <StyledAdmittedStudent>
          <StyledToggleAca>
            <Toggle
              id="academicToggle"
              checked={academicSessions.academic}
              onChange={() => handleToggle("academic")}
              icons={{
                checked: <ToggleIcon checked />,
                unchecked: <ToggleIcon />,
              }}
            />
            <ToggleLabel htmlFor="createdToggle">AdmittedStudent</ToggleLabel>
          </StyledToggleAca>
          <StyledToggle>
            <Toggle
              id="createdToggle"
              checked={academicSessions.created}
              onChange={() => handleToggle("created")}
              icons={{
                checked: <ToggleIcon checked />,
                unchecked: <ToggleIcon />,
              }}
            />
            <ToggleLabel htmlFor="createdToggle">Created</ToggleLabel>
          </StyledToggle>
          <p>Student added successfully</p>
        </StyledAdmittedStudent>

        <StyledApplicationCheckCard>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.pushSMS}
              onChange={() => handleCheckboxChange("pushSMS")}
            />
            Push
          </CheckboxLabel>

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.SMS}
              onChange={() => handleCheckboxChange("SMS")}
            />
            SMS
          </CheckboxLabel>

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.email}
              onChange={() => handleCheckboxChange("email")}
            />
            Email
          </CheckboxLabel>
        </StyledApplicationCheckCard>
      </StyledFlex>

      <StyledBorder></StyledBorder>
      <StyledFlex>
        <StyledAdmittedStudent>
          <StyledToggleAca>
            <Toggle
              id="academicToggle"
              checked={academicSessions.academic}
              onChange={() => handleToggle("academic")}
              icons={{
                checked: <ToggleIcon checked />,
                unchecked: <ToggleIcon />,
              }}
            />
            <ToggleLabel htmlFor="createdToggle">
              {" "}
              FinanceInvoicePayment
            </ToggleLabel>
          </StyledToggleAca>
          <StyledToggle>
            <Toggle
              id="createdToggle"
              checked={academicSessions.created}
              onChange={() => handleToggle("created")}
              icons={{
                checked: <ToggleIcon checked />,
                unchecked: <ToggleIcon />,
              }}
            />
            <ToggleLabel htmlFor="createdToggle">Created</ToggleLabel>
          </StyledToggle>
          <p>demo text</p>
        </StyledAdmittedStudent>

        <StyledApplicationCheckCard>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.pushSMS}
              onChange={() => handleCheckboxChange("pushSMS")}
            />
            Push
          </CheckboxLabel>

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.SMS}
              onChange={() => handleCheckboxChange("SMS")}
            />
            SMS
          </CheckboxLabel>

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={notificationMethods.email}
              onChange={() => handleCheckboxChange("email")}
            />
            Email
          </CheckboxLabel>
        </StyledApplicationCheckCard>
      </StyledFlex>

      <StyledBorder></StyledBorder>
    </StyledNotiCard>
  );
}
