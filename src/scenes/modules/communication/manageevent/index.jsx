import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { useState } from "react";

import { ImageContext } from "../../../../context/Context";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";


import Button from '@mui/material/Button';
import { StyledTop, StyledContainer, StyledIcons, ModalIcons,
  ModalIcon, StyledMark, StyledTick , StyledDate, Styleddate, StyledButton,
  StyledFlex,
  StyledDateR,StyledDateA,
  StyleddateColor,
  StyledMarkend,
  StyledMarkCheck} from './Mevent.styles'
import CalenderEvent from "./CalenderEvent";

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  width: '70%',
  margin: '2rem',
  // maxHeight: '90vh',
  bgcolor: "background.paper",
  // boxShadow: 24,
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
const Component = styled.div`
  width: 80%;
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;
  

const StyledRightCard = styled.div`
  

`

const StyledTodayEvent = styled.div`
    background-color: white;
  margin-top: 2rem;
  font-size: 1.3rem;
  border:0.1rem solid lightgray;
  font-weight:light;
  border-radius: 0.5rem;
  padding:1rem;
`
const ManageEvent = ({ handleClose }) => {
  
  
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

  

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [value, setValue] = useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("academic.svg");
  }, []);
   
    const [incvalue, setincvalue] = useState(1);
  
    const handleIncrement = () => {
      setincvalue(incvalue + 1);
    };
  
    const handleDecrement = () => {
      setincvalue(value - 1);
    };

    const [color, setColor] = useState('#000000');

    const handleColorChange = (e) => {
      setColor(e.target.value);
    };
  

  return (
    // main page
    
    <StyledFlex>
      {/* <Component>  */}
        <Box sx={style}>
      {/* <HeaderContainer>
        <Typography variant="h3">Add New Notices</Typography>
      </HeaderContainer> */}
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
        style={{padding: '0.5rem', borderRadius: '0.4rem', width: '97.5%', border: '1px solid #1dbfc1'}}
       />
        <StyledDate>
          <h4 style={{color: '#3246D3'}}> Start Date</h4>
          <h4 style={{color: '#3246D3'}}> End Date</h4>
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
       
    

       <StyledDateR>
       <h4 style={{color: '#3246D3'}}>Responsible/Event Manager</h4>
          <h4 style={{color: '#3246D3'}}>Category</h4>
       </StyledDateR>
       <Styleddate>
        <select
          style={{
            marginTop: '1rem',
            width: '48%',
            padding: '0.5rem',
            borderRadius: '0.3rem',
            backgroundColor: '#f5f5f5',
            color: '#333',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          
          <option value="option1">Ravi Thakur</option>
          <option value="option2">Sonak Choha</option>
          <option value="option3">Gurav Buara</option>
          <option value="option4">Arabinda Paul</option>
        </select>


        <select
          style={{
            marginTop: '1rem',
            width: '48%',
            padding: '0.5rem',
            borderRadius: '0.3rem',
            backgroundColor: '#f5f5f5',
            color: '#333',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
          value={selectedOption}
          onChange={handleOptionChange}
        >
        
          <option value="option1">FUNCTION</option>
          <option value="option2">SCHOOL EVENT</option>
       
        </select>
      
      
       </Styleddate>

       <StyledDateA>
       <h4 style={{color: '#3246D3'}}>Minimum Attendees(keep 0 if no limit)</h4>
          <h4 style={{color: '#3246D3'}}>Maximum Attendees(keep 0 if no limit)</h4>
       </StyledDateA>
       <Styleddate>

      
     
        <input
  type="number"
  value={incvalue}
  onChange={(e) => setincvalue(parseInt(e.target.value))}
  onKeyDown={(e) => {
    if (e.key === 'ArrowUp') {
      setincvalue(incvalue + 1);
    } else if (e.key === 'ArrowDown') {
      setincvalue(incvalue - 1);
    }
  }}
  onWheel={(e) => {
    if (e.deltaY > 0) {
      setincvalue(incvalue - 1);
    } else if (e.deltaY < 0) {
      setincvalue(incvalue + 1);
    }
  }}
  style={{
    width: '48%',
    textAlign: 'center',
    margin: '0 5px',
    padding: '0.4rem',
  }}
/>

      
        <input
  type="number"
  value={incvalue}
  onChange={(e) => setincvalue(parseInt(e.target.value))}
  onKeyDown={(e) => {
    if (e.key === 'ArrowUp') {
      setincvalue(incvalue + 1);
    } else if (e.key === 'ArrowDown') {
      setincvalue(incvalue - 1);
    }
  }}
  onWheel={(e) => {
    if (e.deltaY > 0) {
      setincvalue(incvalue - 1);
    } else if (e.deltaY < 0) {
      setincvalue(incvalue + 1);
    }
  }}
  style={{
    width: '48%',
    textAlign: 'center',
    margin: '0 5px',
    padding: '0.4rem',
  }}
/>
       

      
      
      
       </Styleddate>


       <StyledDateR>
       <h4 style={{color: '#3246D3'}}>Event Type</h4>
          <h4 style={{color: '#3246D3'}}>Category</h4>
       </StyledDateR>
       <StyleddateColor>
        <select
          style={{
            marginTop: '1rem',
            width: '48%',
            padding: '0.5rem',
            borderRadius: '0.3rem',
            backgroundColor: '#f5f5f5',
            color: '#333',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="option">--select--</option>
          <option value="option1">Open </option>
          <option value="option2">Private</option>
         
        </select>

      
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          style={{
            width: '48%',
            height: '30px',
            padding: '0',
          }}
        />
      
       </StyleddateColor>

       <StyledMarkend>

        <StyledMarkCheck>
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
        <h4>SMS</h4>
        </StyledMarkCheck>

        <StyledMarkCheck>
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
        <h4>PUSH</h4>
        </StyledMarkCheck>

        <StyledMarkCheck>
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
        <h4>EMAIL</h4>
        </StyledMarkCheck>
       


       </StyledMarkend>
       

       
      
        {/* <input type="file" placeholder="" style={{ padding: '0.5rem', borderRadius: '0.3rem', width: '98%', bgcolor: '#bcd2d2', border:'1px solid #1dbfc1' }} /> */}
       
        <StyledButton>
                <Button className='btn-1' >Save</Button>
               
        </StyledButton>

    </StyledContainer>
    </Box>
    {/* </Component> */}

<StyledRightCard>

<CalenderEvent/>

<StyledTodayEvent>
<h4>Today's Event</h4>
</StyledTodayEvent>
</StyledRightCard>
  
    </StyledFlex>
  );
};

export default ManageEvent;
