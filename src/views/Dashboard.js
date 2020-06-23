
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../components/Navigation/index";
import DashNav from "../components/DashNav"
import * as routes from "../routes/routes";
import { Box, Button, Heading } from "grommet";
import Global from "../components/Global"

const Dashboard = props => {

    return (
        <>

            <DashPageContainer>
                {/* topNav */}




                {/* flexContainer for columns */}
                <DashContent>

                    {/* sidenav */}
                    <DashNav />

                    {/* GLobal Stats */}
                    <Global />

                </DashContent>

                {/* queries */}

            </DashPageContainer>
        </>
    )
}


export default withRouter(Dashboard);

const DashPageContainer = styled.div`


`;

// const HomeNavBar = styled.div`

// display: flex;
// justify-content: space-between;
// width: 100%;

// padding-top: 20px;
// margin-bottom: 50px;


// `;

const DashContent = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;
// position:absolute;