import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');
import { Box, Typography } from '@mui/material';
import styled from "styled-components";
import 'quill/dist/quill.snow.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Component = styled(Link)`
  color: #1c84bc;
  text-decoration: none;
`;


function TermsConditions() {
  const { quill, quillRef } = useQuill();

  const [value, setValue] = useState();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log('Text change!');
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setValue(quillRef.current.firstChild.innerHTML)
      });
    }
  }, [quill]);


  return (
    <Box sx={{width: '100%'}}  >

        <Box sx={{display: 'flex', justifyContent: 'space-between'}} >
          <Typography>Terms and Conditions</Typography>
          <Component to="/school-terms" >Preview</Component>
        </Box>


      <Box sx={{width: '100%'}} >  
      
          <div style={{ width: '100%', height: 500 }}>
            <div ref={quillRef} />
          </div>

          <div>
            <Button variant='contained' sx={{mt: '60px'}} > Submit </Button>
          </div>


          {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
        </Box>
    </Box>
  )
}

export default TermsConditions;