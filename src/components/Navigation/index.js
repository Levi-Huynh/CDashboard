import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Box, Button, Heading } from "grommet";
import { Link } from "react-router-dom";


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


const Navigation = props => {
    const landingRedirect = () => {
        props.history.push("/");
    };
    return (
        <Navbar>
            <Box direction="row" gap="small">
                <Heading level="3" margin="none">
                    <i
                        class="fas fa-heartbeat"
                        style={{ color: "white", margin: "0 5px 0 20px" }}
                    ></i>
                    <Button
                        onClick={landingRedirect}
                        label="Patienti"
                        color="#5243C0"
                        plain="true"
                    />
                </Heading>
            </Box>

        </Navbar>
    );
};

export default withRouter(Navigation);