import { Add } from "@mui/icons-material";
import { Button, Modal, Typography, colors } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import SubCategoryTable from "./SubCategoryTable";
import NewCategoryModal from "./NewCategoryModal";

const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;
const Topbar = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  width: 100%;
`;
const TopbarLeft = styled.div`
  display: flex;
`;
const TopbarMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MiddleElement = styled.div`
  margin: 0 5px;
  padding: 8px 10px;
  border-left: ${(props) =>
    !props.first ? `3px solid ${colors.red[600]}` : "none"};
`;
const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SubCategory = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Component>
      <Topbar>
        <Typography variant="h5">Subject Category</Typography>
        <TopbarRight>
          <Button
            color="success"
            variant="contained"
            startIcon={<Add />}
            sx={{ color: "white", mx: "5px", py: "8px" }}
            onClick={handleOpen}
          >
            New Category
          </Button>
        </TopbarRight>
      </Topbar>
      <SubCategoryTable/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewCategoryModal handleClose={handleClose} />
      </Modal>
    </Component>
  );
};

export default SubCategory;
