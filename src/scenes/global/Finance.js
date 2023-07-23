import { Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FeeIcon from '@mui/icons-material/CurrencyRupee';
import HrmsIcon from '@mui/icons-material/Engineering';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px 15px;
`;
const Ul = styled.ul`
  list-style: none;
  overflow-y: auto;
  overflow-x: hidden;

  a {
    text-decoration: none;
    /* color: lightblue; */
  }
`;
const Li = styled.li`
  margin-left: 10px;
  padding: 8px 5px;
`;

const Finance = () => {
    return (
      <Container>
        <Ul>
          <Typography
            variant="h3"
  
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "5px",
              marginBottom: "12px",
  
            }}
          >
            {" "}
            <FeeIcon  sx={{fontSize:"30px" ,mx:"5px"}} /> Finance & Fees
          </Typography>
          <Divider />
          <Li>
          <Link to="/modules/finance/financedashboard">
            <Typography variant="h5">DashboardFinance</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Fees</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Collect Fees</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Reconciliation</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Verify Reconciliation</Typography>
          </Link>
        </Li>
    </Ul>

    <Ul>
          <Typography
            variant="h3"
  
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "5px",
              marginBottom: "12px",
  
            }}
          >
            {" "}
            <HrmsIcon sx={{fontSize:"30px" ,mx:"5px"}} /> HRMS
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Leave</Typography>
          </Link>
        </Li>
    </Ul>


    </Container>
  );
};

export default Finance;