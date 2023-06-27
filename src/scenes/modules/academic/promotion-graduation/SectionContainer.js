import React from 'react'
import styled from 'styled-components'
import Promotion from './Sections/Promotion/Promotion';
import Graduation from './Sections/Graduation/Graduation';
import Sessions from './Sections/Sessions/Sessions';

const Container = styled.div`

`
const SectionContainer = ({value}) => {
  switch (value) {
    case 0:
        return  <Sessions/>
    case 1:
        return <Promotion/>
    case 2:
        return <Graduation/>
  
    default:
        break;
  }
}

export default SectionContainer