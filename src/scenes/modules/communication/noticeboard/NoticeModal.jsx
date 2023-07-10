import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { StyledTop, StyledContainer, StyledIcons, ModalIcons,
  ModalIcon, StyledMark, StyledTick , StyledDate, Styleddate, StyledButton} from './Notice.Styled'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '900px',
  maxHeight: '90vh',
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 0,
  overflowY: 'auto',
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

const NoticeModal = ({ handleClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [isCorrect, setIsCorrect] = useState({
    publish: false,
    students: false,
    parents: false,
    teachers: false,
    staffs: false,
  });
  
  const handleClick = (field) => {
    setIsCorrect((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
    setSelectedOption(field);
  };

  const handleRadioChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <Box sx={style}>
      <HeaderContainer>
        <Typography variant="h3">Add New Notices</Typography>
      </HeaderContainer>
      <StyledContainer>
        <ModalIcons>
          <h4>
            <span className="star">*</span> Published Type
          </h4>
          <StyledIcons>
            <label>
              <input
                type="radio"
                onChange={() => handleRadioChange("Department")}
                checked={selectedOption === "Department"}
              />
              Department
            </label>

            <label>
              <input
                type="radio"
                onChange={() => handleRadioChange("Course")}
                checked={selectedOption === "Course"}
              />
              Courses
            </label>

            <label>
              <input
                type="radio"
                onChange={() => handleRadioChange("Specialization")}
                checked={selectedOption === "Specialization"}
              />
              Specializations
            </label>

            <label>
              <input
                type="radio"
                onChange={() => handleRadioChange("Class-Section")}
                checked={selectedOption === "Class-Section"}
              />
              Class-Sections
            </label>
          </StyledIcons>
        </ModalIcons>
        <ModalIcon>
        <label>
              <input
                type="radio"
                onChange={() => handleRadioChange("All")}
                checked={selectedOption === "All"}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                onChange={() => handleRadioChange("Direct")}
                checked={selectedOption === "Direct"}
              />
              Direct
            </label>    
        </ModalIcon>
        
        <div>
          {selectedOption === "Department" && (
  <div>
    <StyledTop>
      <h4>Department</h4>
      <select style={{ marginTop: "1rem", width: "83%" , padding: "0.5rem" , borderRadius: "0.3rem"}}>
        <option value=""></option>
        <option value="department1">Chemistry</option>
        <option value="department2">Computer</option>
        <option value="department3">Electronics</option>
        <option value="department2">Physics</option>
      </select>
    </StyledTop>
  </div>
)}


          {selectedOption === "Course" && (
            <div>
              <StyledTop>
                <h4>Course</h4>
                <select style={{ marginTop: "1rem", width: "83%" , padding: "0.5rem" , borderRadius: "0.3rem"}}>
                <option value=""></option>
                <option value="department1">Chemistry</option>
                <option value="department2">Computer</option>
                <option value="department3">Electronics</option>
                <option value="department2">Physics</option>
                </select>
              </StyledTop>
            </div>
          )}

          {selectedOption === "Specialization" && (
            <div>
              <StyledTop>
                <h4>Specialization</h4>
                <select style={{ marginTop: "1rem", width: "83%" , padding: "0.5rem" , borderRadius: "0.3rem"}}>
                <option value=""></option>
                <option value="department1">Chemistry</option>
                <option value="department2">Computer</option>
                <option value="department3">Electronics</option>
                <option value="department2">Physics</option>
                </select>
              </StyledTop>
            </div>
          )}

          {selectedOption === "Class-Section" && (
            <div>
              <StyledTop>
                <h4>Class-Section</h4>
                <select style={{ marginTop: "1rem", width: "83%" , padding: "0.5rem" , borderRadius: "0.3rem"}}>
                <option value=""></option>
                <option value="department1">Chemistry</option>
                <option value="department2">Computer</option>
                <option value="department3">Electronics</option>
                <option value="department2">Physics</option>
                </select>
              </StyledTop>
            </div>
          )}
        </div>
        
      <StyledMark>
        <h4>
          <span className="star">* </span>Publish to
        </h4>
        <div className={`icon ${isCorrect.students ? 'correct' : ''}`} onClick={() => handleClick('students')}>
          {isCorrect.students ? (
            <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
              ✔️
            </span>
          ) : (
            <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
              □
            </span>
          )}
        </div>
        <h4>Students</h4>
        <div className={`icon ${isCorrect.parents ? 'correct' : ''}`} onClick={() => handleClick('parents')}>
          {isCorrect.parents ? (
            <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
              ✔️
            </span>
          ) : (
            <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
              □
            </span>
          )}
        </div>
        <h4>Parents</h4>
        <div className={`icon ${isCorrect.teachers ? 'correct' : ''}`} onClick={() => handleClick('teachers')}>
          {isCorrect.teachers ? (
            <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
              ✔️
            </span>
          ) : (
            <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
              □
            </span>
          )}
        </div>
        <h4>Teachers</h4>
        <div className={`icon ${isCorrect.staffs ? 'correct' : ''}`} onClick={() => handleClick('staffs')}>
          {isCorrect.staffs ? (
            <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
              ✔️
            </span>
          ) : (
            <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
              □
            </span>
          )}
        </div>
        <h4>Staffs</h4>
      </StyledMark>
      <StyledTick>

      {selectedOption === 'students' && isCorrect.students && (
        <div>
          <small style={{fontSize:'0.9rem'}}><strong>Students</strong></small>
          <br />
          <input type="text" placeholder="" style={{ marginTop: '0',marginBottom: '0',  padding: '0.6rem', borderRadius: '0.3rem', width: '93%', border:'1px solid lightgray' }} />
          <br />
          <small style={{fontSize:'0.9rem'}}><strong>Check All</strong></small>
          <br />
        </div>
      )}
      
      {selectedOption === 'parents' && isCorrect.parents && (
         <div>
          <small style={{fontSize:'0.9rem'}}><strong>Students</strong></small>
          <br />
          <input type="text" placeholder="" style={{ padding: '0.5rem', borderRadius: '0.3rem', width: '93%', border:'1px solid lightgray' }} />
          <br />
          <small style={{fontSize:'0.9rem'}}><strong>Check All</strong></small>
          <br />
        </div>
      )}
      {selectedOption === 'teachers' && isCorrect.teachers && (
        <div>
          <small style={{fontSize:'0.9rem'}}><strong>Teachers</strong></small>
          <br />
          <input type="text" placeholder="" style={{ padding: '0.5rem', borderRadius: '0.3rem', width: '93%', border:'1px solid lightgray' }} />
          <br />
          <small style={{fontSize:'0.9rem'}}><strong>Check All</strong></small>
          <br />
        </div>
      )}
      {selectedOption === 'staffs' && isCorrect.staffs && (
        <input type="text" placeholder="" style={{ padding: '0.5rem', borderRadius: '0.3rem', width: '93%', border:'1px solid lightgray' }} />
      )}
      </StyledTick>
      
        <h4 style={{color: '#3246D3'}}><span className="star">*</span> Title</h4>
        <input required placeholder="" type="text"
        style={{padding: '0.5rem', borderRadius: '0.4rem', width: '94%', border: '1px solid #1dbfc1'}}
       />
        <StyledDate>
          <h4 style={{color: '#3246D3'}}><span className="star">*</span> Start Date</h4>
          <h4 style={{color: '#3246D3'}}><span className="star">*</span> End Date</h4>
        </StyledDate>
        <Styleddate>
          <input type="datetime-local" style={{padding: '0.5rem', borderRadius: '0.4rem', width: '48%', border: '1px solid #1dbfc1'}}></input>
          <input type="datetime-local" style={{padding: '0.5rem', borderRadius: '0.4rem', width: '48%', border: '1px solid #1dbfc1'}}></input>
        </Styleddate>
        <StyledDate>
          <h4 style={{color: '#3246D3'}}>Start Time</h4>
          <h4 style={{color: '#3246D3'}}>End Time</h4>
        </StyledDate>
        <Styleddate>
          <input type="time" style={{padding: '0.5rem', borderRadius: '0.4rem', width: '48%', border: '1px solid #1dbfc1'}}></input>
          <input type="time" style={{padding: '0.5rem', borderRadius: '0.4rem', width: '48%', border: '1px solid #1dbfc1'}}></input>
        </Styleddate>
        <h4 style={{color: '#3246D3'}}><span className="star">*</span> Attachment</h4>
        <input type="file" placeholder="" style={{ padding: '0.5rem', borderRadius: '0.3rem', width: '98%', bgcolor: '#bcd2d2', border:'1px solid #1dbfc1' }} />
        <h4 style={{color: '#3246D3'}}>Description</h4>
        <input type="text" placeholder="" style={{ padding: '1rem', borderRadius: '0.4rem', width: '98%', border:'1px solid #1dbfc1' }} />
        <h4 style={{color: '#3246D3' , marginBottom: '0'}}>Notify via</h4>

        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0' }}>
          <div className={`icon ${isCorrect.push ? 'correct' : ''}`} onClick={() => handleClick('push')}>
            {isCorrect.push ? (
              <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
                ✔️
              </span>
            ) : (
              <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
                □
              </span>
            )}
          </div>
          <h4 style={{color: '#3246D3'}}>Push</h4>
          <div className={`icon ${isCorrect.sms ? 'correct' : ''}`} onClick={() => handleClick('sms')}>
          {isCorrect.sms ? (
            <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
              ✔️
            </span>
          ) : (
            <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
              □
            </span>
          )}
        </div>
        <h4 style={{color: '#3246D3'}}>SMS</h4>
        <div className={`icon ${isCorrect.email ? 'correct' : ''}`} onClick={() => handleClick('email')}>
          {isCorrect.email ? (
            <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
              ✔️
            </span>
          ) : (
            <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
              □
            </span>
          )}
        </div>
        <h4 style={{color: '#3246D3'}}>Email</h4>
        <div className={`icon ${isCorrect.notification ? 'correct' : ''}`} onClick={() => handleClick('notification')}>
          {isCorrect.notification ? (
            <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
              ✔️
            </span>
          ) : (
            <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
              □
            </span>
          )}
        </div>
        <h4 style={{color: '#3246D3'}}>Notification</h4>
        <div className={`icon ${isCorrect.alert ? 'correct' : ''}`} onClick={() => handleClick('alert')}>
          {isCorrect.alert ? (
            <span role="img" aria-label="checkmark" style={{ fontSize: '20px' }}>
              ✔️
            </span>
          ) : (
            <span role="img" aria-label="square" style={{ fontSize: '40px' }}>
              □
            </span>
          )}
        </div>
        <h4 style={{color: '#3246D3'}}>Alert</h4>
          
        </div>
        <StyledButton>
                <Button className='btn-1' >Save</Button>
                <Button className='btn-2' onClick={handleClose}>Close</Button>
        </StyledButton>

    </StyledContainer>
    </Box>
  );
};

export default NoticeModal;