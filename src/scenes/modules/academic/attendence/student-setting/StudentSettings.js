import { Add } from "@mui/icons-material";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import StatusTable from "./StatusTable";
import AddStatusModal from "./AddStatusModal";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ImageContext } from "../../../../../context/Context";
import SettingsTable from "./SettingsTable";

const Component = styled.div`
  width: calc(100% - 30px);
  height: max-content;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;
const StudentSettings = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("attendance.png");
  }, []);

  return (
    <div>
      <Component>
        <Box display="flex" justifyContent={"space-between"}>
          <Typography variant="h3">Attendence Status for Students</Typography>
          <Button
            variant="contained"
            color="success"
            startIcon={<Add />}
            onClick={handleOpen}
          >
            New Status
          </Button>
        </Box>
        <Typography variant="h5">
          Manage required attendance status (e.g. Present, Absent, Casual Leave,
          Holiday, Late etc..)
        </Typography>
        <StatusTable />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddStatusModal handleClose={handleClose} />
        </Modal>
      </Component>
      <Component>
        <Typography variant="h3" my={2}>
          Attendance Sessions/Meetings
        </Typography>
        <Divider />
        <Typography variant="h5" mt={2} mb={1}>
          Manage settings like whether you want Subjects wise attendance or not
          and set sessions if you need attendance for multiple times each day
        </Typography>
        <SettingsTable/>
      </Component>
    </div>
  );
};

export default StudentSettings;
