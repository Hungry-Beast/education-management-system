import React from 'react'
import styled from 'styled-components'
import Subjects from './Sections/Subject/Subjects';
import Courses from './Sections/Courses/Courses';
import Classes from './Sections/Classes/Classes';
import View from './Sections/View/View';
import Sms from './Sections/SMS/Sms';
import Mail from './Sections/Mail/Mail';
import PushNoti from './Sections/PushNotifcation/PushNoti';
import { Create } from './Sections/Create/Create';

const Container = styled.div`

`
const SectionContainer = ({value}) => {
  switch (value) {
    case 0:
        return  <View/>
    case 1:
        return <Create/>
    case 2:
        return <Sms/>
        case 3:
            return <Mail/>
            case 4:
            return  <PushNoti/>
        
    
    default:
        break;
  }
}

export default SectionContainer