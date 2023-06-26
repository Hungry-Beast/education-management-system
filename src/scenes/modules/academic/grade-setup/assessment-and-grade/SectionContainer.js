import React from 'react'
import styled from 'styled-components'
import GradeBook from './Sections/GradeBook/GradeBook';
import LinkClassSubject from './Sections/LinkClassSubject/LinkClassSubject';
import Assessment from './Sections/Assessment/Assessment';
import GradeSetup from './Sections/Courses/GradeSetup';

const Container = styled.div`

`
const SectionContainer = ({value}) => {
  switch (value) {
    case 0:
        return  <Assessment/>
    case 1:
        return <GradeBook/>
    case 2:
        return <GradeSetup/>
    case 3:
        return <LinkClassSubject/>
    default:
        break;
  }
}

export default SectionContainer