import React from 'react'
import styled from 'styled-components'
import InputFieldProfile from './InputFieldProfile'

const Container = styled.div`

`


const DetailsContainer = ({value}) => {
    console.log(value)
  switch (value) {

    case 0:
        return  <InputFieldProfile/>
  
    default:
        break;
  }
}

export default DetailsContainer;