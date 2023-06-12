import React from 'react'
import styled from 'styled-components'
import Subjects from './Sections/Subject/Subjects';
import Courses from './Sections/Courses/Courses';
import Classes from './Sections/Classes/Classes';

const Container = styled.div`

`
const SectionContainer = ({value}) => {
  switch (value) {
    case 0:
        return  <Subjects/>
    case 1:
        return <Courses/>
    case 2:
        return <Classes/>
    default:
        break;
  }
}

export default SectionContainer