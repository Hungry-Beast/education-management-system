import React, {useState} from 'react'
import { Box, Typography, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import NewSessionModal from "./NewSessionModal"


const Component = styled.div`
  width: calc(100% - 40px);
  padding: 25px;
  background-color: #ffffff;
  margin: 15px auto;
  border-radius:10px;
`;


const EditDeleteButton = () => {
    return (
        <>
        <DeleteIcon/>
      </>
    );
  };

const columns = [
    { field: 'id', headerName: 'Sl No', flex: 1, headerAlign: "center", align: "center" },
    { field: 'name', headerName: 'Name', flex: 1, headerAlign: "center", align: "center" },
    { field: 'action', headerName: 'Action', flex: 0  , headerAlign: "center", align: "center" ,  renderCell: (params) => (
        <EditDeleteButton/>
      )  }
  ];
  
  
  const rows = [
    { id: 1, name: "OTP registration"}
  ];


function AttendanceSessions() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value1, setValue1] = React.useState('yes');
    const [value2, setValue2] = React.useState('no');


    const handleChange1 = (event) => {
      setValue1(event.target.value);
    };

    const handleChange2 = (event) => {
      setValue2(event.target.value);
    };

  return (
    <Component>
    <Box sx={{ width: '100%' }} >

        <Box>

            <Typography variant="h2" >Attendance Sessions/Meetings</Typography>
            <Typography sx={{width: "100%", my: "15px"}} >Manage settings like whether you want Subjects wise attendance or not and set sessions if you need attendance for multiple times each day</Typography>

            <Box>
                <Box sx={{display: "flex", border: "2px solid black", justifyContent: "space-around", alignItems: "center"}} >
                    <Typography>Subjects wise attendance?</Typography>
                    <FormControl>
                        <RadioGroup row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value1}
                            onChange={handleChange1}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box sx={{display: "flex", border: "2px solid black", justifyContent: "space-around", alignItems: "center", borderTop: "transparent"}} >
                    <Typography>Subjects wise attendance?</Typography>
                    <FormControl>
                        <RadioGroup row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value2}
                            onChange={handleChange2}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </Box>


    {
        value2 == "yes" && (
        <div style={{ height: 400, width: '100%', marginTop: '40px' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            />
        </div>
        )
    }


        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-type"
                >
                <NewSessionModal title="Add Asset status" handleClose={handleClose} />
        </Modal>

    </Box>
    </Component>
  )
}

export default AttendanceSessions;