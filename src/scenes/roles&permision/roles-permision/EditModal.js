import {
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import { useForm } from "react-hook-form";
  import styled from "styled-components";
  
  const dataList = [
    { id: 1, text: "academic-session-read" },
    { id: 2, text: "academic-write" },
    { id: 3, text: "acdemic-read" },
    { id: 4, text: "assessments-read" },
    { id: 5, text: "assessments-write" },
    { id: 6, text: "asset-write" },
    { id: 7, text: "attendance-assign" },
    { id: 8, text: "attendance-read" },
    { id: 9, text: "attendance-write" },
    { id: 10, text: "badges-read" },
    { id: 11, text: "badges-write" },
    { id: 12, text: "cafeteria-read" },
    { id: 13, text: "cafeteria-write" },
    { id: 14, text: "certificate-read" },
    { id: 15, text: "certificate-write" },
    { id: 16, text: "class-schedule-read" },
    { id: 17, text: "complain-write" },
    { id: 18, text: "student-section-change" },
    { id: 19, text: "teacher-details-read" },
    { id: 20, text: "teacher-health-record-write" },
    { id: 21, text: "users-read" },
  ];
  const ListItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `;
  
  const TickIcon = styled.span`
    color: green;
    margin-right: 5px;
  `;
  
  const ThreeColumnList = styled.div`
    display: flex;
    padding:1rem;
    padding-bottom:4rem;
  `;
  
  const Column = styled.div`
    flex: 1;
  `;
  
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
  
    bgcolor: "background.paper",
    //   border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "10px",
    p: 0,
  };
  const HeaderContainer = styled.div`
    width: 100%;
    background-color: #1dbfc1;
    text-align: center;
    border-radius: 10px;
    padding: 25px 10px;
    border-bottom: 2px solid #ffa800;
    margin: 0;
  `;
  
  
  
  const CloseButton = styled.button`
    position: fixed;
    bottom: 1rem;
    right: 20px;
    background-color: gray;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
  `;
  const EditModal = ({ handleClose }) => {
  
  
    const columnSize = Math.ceil(dataList.length / 3);
    const columns = Array.from({ length: 3 }, (_, i) =>
      dataList.slice(i * columnSize, i * columnSize + columnSize)
    );
  
  
    const {
      register,
      handleSubmit,
      watch,
      control,
      formState: { errors },
    } = useForm({
      defaultValues: {
        courseName: "",
        courseCode: "",
        courseCredit: "",
        isSpecialization: true,
        //   courseType: 1,
      },
    });
  
    const onSubmit = (data) => console.log(data);
    console.log(watch("isSpecialization"));
    return (
      <Box sx={style}>
        <HeaderContainer>
          <Typography variant="h3">My Permision(s)</Typography>
        </HeaderContainer>
        <ThreeColumnList>
        {columns.map((column, index) => (
          <Column key={index}>
            {column.map((item) => (
              <ListItem key={item.id}>
                <TickIcon>✔</TickIcon>
                {item.text}
              </ListItem>
            ))}
          </Column>
        ))}
      </ThreeColumnList>
      <CloseButton onClick={handleClose}>Close</CloseButton>
      </Box>
    );
  };
  
  export default EditModal;
  