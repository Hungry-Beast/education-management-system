import React from 'react'
import styled from 'styled-components'

const StyledButtons = styled.div`
  display:flex;
  justify-content:space-around;
  margin-top:2rem;

  button{
    padding-top:0.6rem;
    padding-bottom:0.6rem;
    padding-left:1.6rem;
    padding-right:1.6rem;
    background-color:#FAF9F6;
    border:none;
    border-radius:0.4rem;
    color:#0080ff;
  }

  button:hover{
    background-color:#0080ff;
    color:black;
  }
`



export const Create = () => {
  return (
    <div>
      <StyledButtons>

        <button>SMS</button>
        <button>Email</button>
        <button>Push Notification</button>
      </StyledButtons>
    </div>
  )
}
