import React from 'react'
import { StyledDetailProfileWrapper,
    StyledProfileImage,
    StyledProfileDesc,
    StyledTabs,



} from './Dprofile.styles'
import { GlobalFont } from "../login/GlobalFont.styles";

function Dprofile() {
  return (
    <StyledDetailProfileWrapper>

    <GlobalFont/>
    <StyledProfileImage>
    <img src="/assets/womenProfile.jpeg" alt="" />
    <StyledProfileDesc>
        <h1>SULEKHA PANDIT</h1>
        <h3>Unique ID 3245</h3>
    </StyledProfileDesc>
    </StyledProfileImage>

    <StyledTabs>
        
    </StyledTabs>
    

    </StyledDetailProfileWrapper>
  )
}

export default Dprofile