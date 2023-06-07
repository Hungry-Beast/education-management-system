import React from 'react'
import styled from 'styled-components'
import Subjects from './Sections/Subject/Subjects';

const Container = styled.div`

`
const SectionContainer = ({value}) => {
  switch (value) {
    case 0:
        return  <Subjects/>
  
    default:
        break;
  }
}

export default SectionContainer