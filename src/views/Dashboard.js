
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../components/Navigation/index";
import DashNav from "../components/DashNav"
import * as routes from "../routes/routes";
import { Box, Button, Heading } from "grommet";
import Country from "../components/Country"
import Global from "../components/Global"
import WorldStats from "../components/WorldStats"
import MedicalDiagnostics from "../components/Medical/MedicalDiagnostics"


import {LANDING} from "../routes/routes";


const Dashboard = props => {

 const [dashOption, setDash] = useState([

    {name: "CountryStat", active: true},
    {name: "Global", active:false},
    {name: "CustomizedStat", active:false},
    {name: "MedicalDiagnostics", active: false }
  ])

  function handleDash(name){

    let dashState= [...dashOption]

    dashState.map((el, i) =>{
       
   el.name===name ? el.active = true: el.active = false 
    })

    console.log("handle:", dashState)
    setDash(dashState)

  }


    return (
        <>

            <DashPageContainer>
                {/* topNav */}




                {/* flexContainer for columns */}
                <DashContent>

                    {/* sidenav */}
                    <DashWrapper>

      <LogoContainer>
        <Box direction="row" gap="small">
          <Heading level="3" margin-bottom="5">
            <i
              class="fas fa-heartbeat fa-3x"
              style={{ color: "#FFC4D6", margin: "0 5px 0 4rem" }}
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
      <NavTitle key={1}  onClick={()=>handleDash("MedicalDiagnostics")}>
      <i class="fa fa-stethoscope fa-2x" aria-hidden="true" style={{margin:'0 .7rem 0 0', color:'#FFC4D6'}}></i> AI Symptoms Checker
</NavTitle>
      <NavTitle key={2} onClick={()=>handleDash("CountryStat")}>
      <i class="fa fa-line-chart fa-2x" aria-hidden="true" style={{margin:'0 .7rem 0 0', color:'#FFC4D6'}}></i> AI Trends Predictions
</NavTitle  >
      <NavTitle key={3} onClick={()=>handleDash("CustomizedStat")}>
      <i class="fa fa-bar-chart fa-2x" aria-hidden="true" style={{margin:'0 .7rem 0 0', color:'#FFC4D6'}}></i> Customized Reports
</NavTitle >
<NavTitle key={4} onClick={()=>handleDash("Global")}>
<i class="fa fa-globe fa-2x" aria-hidden="true" style={{margin:'0 .7rem 0 0', color:'#FFC4D6'}}></i>  Global Overview
</NavTitle  >
     
    

    </DashWrapper>

                    {/* <DashNav /> */}




                    {/* GLobal Stats */}
        {dashOption[0].active === true? <Country/> : dashOption[1].active ===true? <Global/>: dashOption[2].active ===true? <WorldStats/> :<MedicalDiagnostics/>}
    


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


const LogoContainer = styled.div` 
margin-bottom: 100px;
`;


const DashWrapper = styled.div`

width: 15%;
min-height: 100%;
min-height: 100vh;
//  border: 1px solid red;
padding: 1rem;
border-radius: 15px;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
background: #FFF1F1;
border: 1px solid #FFF1F1;

`;

const GoButton = styled.div`
  display: flex
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: white;
  border-radius: 0 10px 10px 0;
  background: #FE687D;
  border: 1px solid #FE687D;
  border-left: none;
  padding: 0 10px 0 10px;

`;

const GoButton1 = styled(Link)`
  display: flex
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #5243C0;
 
  border-radius: 0 10px 10px 0;
 
 
 
  padding: 0 10px 0 10px;
  &:hover {
    background: white;
    color:#FFC4D6;
  }
`;


const NavTitle = styled(GoButton)`
font-size: 1.2rem;
 border: none;
 background: none;
 color:#5243C0;
 margin: 2rem;
 margin-bottom: 7rem;
  width: 80%;
  &:hover {
    
    color:  #B6AAFE;
  }
  
;`
const DashContent = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;
// position:absolute;