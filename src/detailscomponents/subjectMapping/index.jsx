import React,{useState } from 'react';

import { CardStyles,StyledContainer,StyledDetails,Styledbox} from './subject.styles';

function Subject() {
  const [val,setVal]=useState('')
  const data=["class 11 Science" ,"Lavel 1","BCA 1st Sem ","BCA 2nd Sem","BSC chem 1st","DPS Jorhat class V ","ECE SEM 1","ECE SEM 2","ECE SEM 3","ECE SEM 4","ECE SEM 5","ECE SEM 6","ECE SEM 7","ECE SEM 8","Class One","Class Two","Class Three","Class Four","Class Nine","SAS Class KGI_R1,SAS Class Three","SAS Class One","SAS Class X","SAS Class KGI","Class Five","Class Seven","Class Ten","CLASS 12","CLASS 13","CLASS 14","CLASS 15","CLASS 16"]
  return (
  
    <CardStyles>
    <StyledContainer>
      <h4>Teacher's skills for</h4>
        <StyledDetails>
          <p>Class:</p>
          <input list='data' onChange={(e)=>setVal(e.target.value)}/>
            <datalist id='data'>
              {data.map((op)=><option>{op}</option>)}
            </datalist>
          <button>Reload</button>
        </StyledDetails>
        <Styledbox></Styledbox>
    </StyledContainer>
       
    </CardStyles>

  )};
export default Subject;