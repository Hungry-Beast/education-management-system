import React from 'react'
import styled from 'styled-components'
import Subjects from './Sections/Subject/Subjects';
import Courses from './Sections/Courses/Courses';
import Classes from './Sections/Classes/Classes';
import Profile from './Sections/Profile';

const Container = styled.div`

`
const SectionContainer = ({value}) => {
  switch (value) {
    case 0:
            return <Profile/>
    case 1:
        return  <Subjects/>
    case 2:
        return <Courses/>
    case 3:
        return <Classes/>
    default:
        break;
  }
}

export default SectionContainer