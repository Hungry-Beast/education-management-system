import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, IconButton } from "@mui/material";
import { ImageContext } from "../../../../context/Context";
import CalendarEvent from "./CalendarEvent";
import {
  StyledFlex,
  StyledHead,
  StyledRightCard,
  Styledheading,
  StyledDesc,
  StyledCard,
  StyledDay,
  StyledWeekCard,
  StyledContent,
  StyledWeekDesc,
  StyledMonthCard
} from "./eventcal.styles";
import AddIcon from "@mui/icons-material/Add";
import { AiFillPlusCircle } from "react-icons/ai";

const Component = styled.div`
  /* width: calc(100% - 30px); */
  width: 70%;
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 0;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  width:200px;
  float:right;
  margin-top:17rem;
  margin-right: 4rem ;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  border:none;
`;

const ModalOptions = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ModalOption = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
    border:none;
  }
`;

const EventCalender = () => {
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [context, setContext] = useContext(ImageContext);
  const [showWeekCard, setShowWeekCard] = useState(false);
  const [showTodayCard, setShowTodayCard] = useState(true);
  const [showMonthCard, setShowMonthCard] = useState(false);

  const [isModal1Open, setModal1Open] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  const [isModal3Open, setModal3Open] = useState(false);

  const openModal1 = () => {
    setModal1Open(true);
    setModal2Open(false);
    setModal3Open(false);
  };
  const openModal2 = () => {
    setModal1Open(false);
    setModal2Open(true);
    setModal3Open(false);
  };

  const openModal3 = () => {
    setModal1Open(false);
    setModal2Open(false);
    setModal3Open(true);
  };

  useEffect(() => {
    setContext("academic.svg");
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleShowWeekCard = () => {
    setShowWeekCard(true);
    setShowTodayCard(false);
    setShowMonthCard(false);
  };

  const handleShowTodayCard = () => {
    setShowWeekCard(false);
    setShowTodayCard(true);
    setShowMonthCard(false);
  };

  const handleShowMonthCard = () => {
    setShowWeekCard(false);
    setShowTodayCard(false);
    setShowMonthCard(true);
  };

  return (
    <StyledFlex>
      <Component>
        <CalendarEvent />
      </Component>
      <StyledHead>
        <Styledheading>
          <p>Your Events</p>
          <AiFillPlusCircle
            className="Icon"
            color="green"
            onClick={handleModalOpen}
          />
          <Modal
            open={isModalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <ModalContent>
              <ModalOptions>
                <ModalOption>Add new notice</ModalOption>
                <ModalOption>Add new event</ModalOption>
                <ModalOption>Add new holiday</ModalOption>
              </ModalOptions>
            </ModalContent>
          </Modal>
        </Styledheading>
        <StyledRightCard>
          <StyledDesc>
            <p onClick={handleShowTodayCard}>Today</p>
            <p onClick={handleShowWeekCard}>Week</p>
            <p onClick={handleShowMonthCard}>Month</p>
          </StyledDesc>
          {showTodayCard && (
            <StyledContent>
              <p
                style={{
                  fontSize: "1.2rem",
                  paddingLeft: "2rem",
                  borderBottom: "1px solid lightgray",
                  padding: "1.2rem"
                }}
              >
                Events
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  paddingLeft: "2rem",
                  borderBottom: "1px solid lightgray",
                  padding: "1.2rem"
                }}
              >
                Holidays
              </p>
              <StyledCard>
                <StyledDay>
                  <p>Friday</p>
                  <p>12-07-2023 to 19-07-2023</p>
                </StyledDay>
                <h1>Janmastami</h1>
                <p style={{ fontSize: "1.5rem" }}>Holiday</p>
              </StyledCard>
              <StyledCard>
                <StyledDay>
                  <p>Friday</p>
                  <p>12-07-2023 to 19-07-2023</p>
                </StyledDay>
                <h1>test</h1>
                <p style={{ fontSize: "1.5rem" }}> test holiday</p>
              </StyledCard>
            </StyledContent>
          )}
          {showWeekCard && (
            <StyledContent>
              <p
                style={{
                  fontSize: "1.2rem",
                  paddingLeft: "2rem",
                  borderBottom: "1px solid lightgray",
                  padding: "1.2rem"
                }}
              >
                Events
              </p>
              <StyledWeekCard>
                <StyledWeekDesc>
                  <StyledDay>
                    <p>Monday</p>
                    <p>10-07-2023 to 11-07-2023</p>
                  </StyledDay>
                  <h1>test</h1>
                  <p style={{ fontSize: "1.5rem" }}>School Event</p>
                </StyledWeekDesc>
              </StyledWeekCard>
              <p
                style={{
                  fontSize: "1.2rem",
                  paddingLeft: "2rem",
                  borderBottom: "1px solid lightgray",
                  padding: "1.2rem"
                }}
              >
                Holidays
              </p>
              {/* Render week's events here */}
              <StyledCard>
                <StyledDay>
                  <p>Wednesday</p>
                  <p>12-07-2023 to 19-07-2023</p>
                </StyledDay>
                <h1>Janmastami</h1>
                <p style={{ fontSize: "1.5rem" }}>Holiday</p>
              </StyledCard>
              <StyledCard>
                <StyledDay>
                  <p>Monday</p>
                  <p>12-07-2023 to 19-07-2023</p>
                </StyledDay>
                <h1>test</h1>
                <p style={{ fontSize: "1.5rem" }}> test holiday</p>
              </StyledCard>
            </StyledContent>
          )}
          {showMonthCard && (
            <StyledContent>
              <p
                style={{
                  fontSize: "1.2rem",
                  paddingLeft: "2rem",
                  borderBottom: "1px solid lightgray",
                  padding: "1.2rem"
                }}
              >
                Events
              </p>
              {/* Render month's events here */}
              <StyledWeekCard>
                <StyledWeekDesc>
                  <StyledDay>
                    <p>Tuesday</p>
                    <p>04-07-2023 to 04-07-2023</p>
                  </StyledDay>
                  <h1>Tesst</h1>
                  <p style={{ fontSize: "1.5rem" }}>FUNCTION</p>
                </StyledWeekDesc>
              </StyledWeekCard>
              <StyledWeekCard>
                <StyledWeekDesc>
                  <StyledDay>
                    <p>Monday</p>
                    <p>10-07-2023 to 11-07-2023</p>
                  </StyledDay>
                  <h1>test</h1>
                  <p style={{ fontSize: "1.5rem" }}>School Event</p>
                </StyledWeekDesc>
              </StyledWeekCard>
              <p
                style={{
                  fontSize: "1.2rem",
                  paddingLeft: "2rem",
                  borderBottom: "1px solid lightgray",
                  padding: "1.2rem"
                }}
              >
                Holidays
              </p>
              <StyledMonthCard>
                <StyledDay>
                  <p>Wednesday</p>
                  <p>12-07-2023 to 19-07-2023</p>
                </StyledDay>
                <h1>Janmastami</h1>
                <p style={{ fontSize: "1.5rem" }}>Holiday</p>
              </StyledMonthCard>
              <StyledMonthCard>
                <StyledDay>
                  <p>Monday</p>
                  <p>12-07-2023 to 19-07-2023</p>
                </StyledDay>
                <h1>test</h1>
                <p style={{ fontSize: "1.5rem" }}>test holiday</p>
              </StyledMonthCard>
            </StyledContent>
          )}
        </StyledRightCard>
      </StyledHead>
    </StyledFlex>
  );
};

export default EventCalender;
