import React, { useState } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { Box, Button, Heading } from "grommet";

import * as routes from "../../routes/routes";
import {LANDING} from "../../routes/routes"

const Navbar = styled.div`
//   position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  padding-top: 20px;

  border: 1xp solid red;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 10px;

  font-size: 1.5rem;
  padding: 5px 20px;
  font-family: 'Poppins', sans-serif;
  border-radius: 5px;
`;



const GoButton = styled(Link)`
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

const Navigation = props => {
    const landingRedirect = () => {
        props.history.push("/");
    };
    return (
        <Navbar>
            <Box direction="row" gap="small">
                <Heading level="3" margin="none">
                    <i
                        class="fas fa-heartbeat fa-2x"
                        style={{ color: "white", margin: "0 1rem 0 2rem" }}
                    ></i>
                    <GoButton
                    to={routes.LANDING}
                        onClick={()=>landingRedirect()}
                        label="covid19r"
                        color="#5243C0"
                        plain="true"
                    >covid19r</GoButton>
                </Heading>
            </Box>

        </Navbar>
    );
};

export default withRouter(Navigation);