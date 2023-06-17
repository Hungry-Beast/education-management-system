import React from "react";
import { GiHeartBeats } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { BsCalendarCheck } from "react-icons/bs";
import { BiCalendarX } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { BsCalendarMinus } from "react-icons/bs";
import { AiFillFileExclamation } from "react-icons/ai";

import {
  StyledHomeCard,
  StyledHomeInner,
  StyledGrayLine,
  StyledGreenCard,
  StyledBloodPressure,
  StyledIcon,
  StyledBloodPressureCard,
  StyledFever,
  StyledEmergency,
  StyledDoctor,
  StyledSecondContainer,
  StyledGreenSide,
  StyledGreenSideInnerCard,
  StyledStaffName,
  StyledGreenSidebmi,
  StyledWeight,
  StyledHeight,
  StyledBmi,
  StyledThirdInnerCard,
  StyledAttendance,
  StyledPresentAbsent,
  StyledSideNumber,
  StyledFlex,
  StyledFinance,
  StyledTotalInvoice,
  StyledLibraryCard,
  StyledTotalBooks,
  StyledAddandMapCard,
  StyledStaffAddress,
  StyledMap,
} from "./home.styles";

export default function Home() {
  return (
    <StyledHomeCard>
      <StyledHomeInner>
        <h1>Class Schedule</h1>

        <StyledGrayLine></StyledGrayLine>
      </StyledHomeInner>

      <StyledSecondContainer>
        <StyledGreenCard>
          <StyledBloodPressureCard>
            <StyledBloodPressure>
              <h1>Blood PressureS</h1>
              <StyledIcon>
                <GiHeartBeats />
              </StyledIcon>
            </StyledBloodPressure>

            <h1>Upper Lower</h1>
          </StyledBloodPressureCard>

          <StyledFever>
            <h1>Fever History</h1>
          </StyledFever>

          <StyledEmergency>
            <h1>Emergency Contact</h1>
            <StyledIcon>
              <BiPhoneCall />
            </StyledIcon>
          </StyledEmergency>

          <StyledDoctor>
            <h1>DR. RANJIT PATHAK</h1>

            <StyledIcon>
              <BsFillPersonFill />
            </StyledIcon>
            <p>My Doctor</p>
          </StyledDoctor>
        </StyledGreenCard>

        <StyledGreenSide>
          <h1>Current Vitals</h1>
          <StyledGrayLine></StyledGrayLine>

          <StyledGreenSideInnerCard>
            <StyledStaffName>
              <h1>Staff Name: </h1>
              <h2>SULEKHA PANDIT</h2>
              <h1>Unique Id:3943</h1>
            </StyledStaffName>

            <StyledGreenSidebmi>
              <StyledWeight>
                <GiWeight />
                <h1>Weight</h1>
              </StyledWeight>

              <StyledHeight>
                <GiBodyHeight />
                <h1>Height</h1>
              </StyledHeight>

              <StyledBmi>
                <TbActivityHeartbeat />
                <h1>BMI</h1>
              </StyledBmi>
            </StyledGreenSidebmi>
          </StyledGreenSideInnerCard>
        </StyledGreenSide>
      </StyledSecondContainer>

      <StyledThirdInnerCard>
        {/* attendance */}
        <StyledAttendance>
          <h1>Attendance</h1>
          <StyledGrayLine></StyledGrayLine>
          <StyledFlex>
            <StyledPresentAbsent>
              <BsCalendarCheck />
              <h1>Present</h1>
            </StyledPresentAbsent>
            <StyledSideNumber>
              <h4>75%</h4>
            </StyledSideNumber>

            <StyledPresentAbsent>
              <BiCalendarX />
              <h1>Absent</h1>
            </StyledPresentAbsent>
            <StyledSideNumber>
              <h3>25%</h3>
            </StyledSideNumber>
          </StyledFlex>
        </StyledAttendance>

        <StyledFinance>
          <h1>Finance</h1>
          <StyledGrayLine></StyledGrayLine>
          <StyledFlex>
            <StyledTotalInvoice>
              <FaRegNewspaper />
              <h1>Total Invoice</h1>
            </StyledTotalInvoice>
            <StyledSideNumber>
              <h4>80</h4>
            </StyledSideNumber>

            <StyledTotalInvoice>
              <BiCalendarX />
              <h1>Total Due</h1>
            </StyledTotalInvoice>
            <StyledSideNumber>
              <h3>40</h3>
            </StyledSideNumber>

            <StyledTotalInvoice>
              <BiCalendarX />
              <h1>Total OverDue</h1>
            </StyledTotalInvoice>
            <StyledSideNumber>
              <h3>40</h3>
            </StyledSideNumber>
          </StyledFlex>
        </StyledFinance>

        <StyledLibraryCard>
          <h1>Library</h1>
          <StyledGrayLine></StyledGrayLine>

          <StyledFlex>
            <StyledTotalBooks>
              <FaRegNewspaper />
              <h1>Total No of Books Issued</h1>
            </StyledTotalBooks>
            <StyledSideNumber>
              <h4>63</h4>
            </StyledSideNumber>

            <StyledTotalBooks>
              <BsCalendarMinus />
              <h1>Available Books</h1>
            </StyledTotalBooks>
            <StyledSideNumber>
              <h3>58</h3>
            </StyledSideNumber>

            <StyledTotalBooks>
              <AiFillFileExclamation />
              <h1>Issued Books</h1>
            </StyledTotalBooks>
            <StyledSideNumber>
              <h3>3</h3>
            </StyledSideNumber>

            <StyledTotalBooks>
              <AiFillFileExclamation />
              <h1>Pending</h1>
            </StyledTotalBooks>
            <StyledSideNumber>
              <h3>4</h3>
            </StyledSideNumber>
          </StyledFlex>
        </StyledLibraryCard>
      </StyledThirdInnerCard>

      <StyledAddandMapCard>
        <StyledStaffAddress>
          <h1>Staff Address</h1>
          <StyledGrayLine></StyledGrayLine>

          <p>
            PIN: 781037; P.O: BAGHARBARI Vill/WN: PANJABARI; P.S: SATGAON; Dist:
            KAMRUP METRO; State: ASSAM;
          </p>
        </StyledStaffAddress>

        <StyledMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28650.728913675077!2d91.784281!3d26.153018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591866013303%3A0x9a010eab0d7c7802!2sGaneshguri%2C%20Guwahati%2C%20Assam%2C%20India!5e0!3m2!1sen!2sus!4v1686927065894!5m2!1sen!2sus"
            width="600"
            height="450"
            styled={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </StyledMap>
      </StyledAddandMapCard>
    </StyledHomeCard>
  );
}
