
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../components/Navigation/index";
import { Box, Button, Heading } from "grommet";

import * as routes from "../routes/routes";
import {LANDING} from "../routes/routes";

const GoButton1 = styled(Link)`
  display: flex
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #5243C0;
 
  border-radius: 0 10px 10px 0;
  background: #FFC4D6;
  border: 1px solid #FFC4D6;
 
  padding: 0 10px 0 10px;
  &:hover {
    background: white;
    color:#FFC4D6;
  }
`;

const DashNav = props => {


  return (

    <DashWrapper>

      <LogoContainer>
        <Box direction="row" gap="small">
          <Heading level="3" margin-bottom="5">
            <i
              class="fas fa-heartbeat"
              style={{ color: "white", margin: "0 5px 0 20px" }}
            ></i>
            <GoButton1
to={routes.LANDING}
              label="covid19r"
              color="#5243C0"
              plain="true"
            >covid19r</GoButton1>
          </Heading>
        </Box>
      </LogoContainer>
      <NavButton>
        Live Summary By Country
</NavButton>
      <NavButton>
        Areas of Largest Recovered Cases
</NavButton>
      <NavButton>
        Areas of Largest New Confirmed Cases
</NavButton>
      <NavButton>
        Areas of Largest Confirmed Cases
</NavButton>
      <NavButton>
        Areas of Largest Death Cases
</NavButton>
      <NavButton>
        Latest News
</NavButton>


    </DashWrapper>

  )

}

export default withRouter(DashNav);

const LogoContainer = styled.div` 
margin-bottom: 100px;

`;


const DashWrapper = styled.div`

width: 15%;
height: 100vh;
 
padding: 1rem;
 


`;

const GoButton = styled(Link)`
  display: flex
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #636363;
  border-radius: 0 10px 10px 0;
  background: #FE687D;
  border: 1px solid #FE687D;
  border-left: none;
  padding: 0 10px 0 10px;

`;


const NavButton = styled(GoButton)`
font-size: 1.2rem;
 border: none;
 background: none;
 color: #636363;
 margin: 2rem;
 margin-bottom: 7rem;
  width: 80%;
  &:hover {
    
    color: #FE687D;
  }
  
;`