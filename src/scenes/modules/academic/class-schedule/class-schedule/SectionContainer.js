import React from 'react'
import styled from 'styled-components'
import TimingSet from './Sections/timing-set/TimingSet'
import SectionTimngSet from './Sections/section-time-set/SectionTimingSet'

const Container = styled.div`

`
const SectionContainer = ({value}) => {
  switch (value) {
    case 0:
        return  <TimingSet/>
    case 1:
        return <SectionTimngSet/>
    // case 2:
    //     return <Classes/>
    default:
        break;
  }
}

export default SectionContainer