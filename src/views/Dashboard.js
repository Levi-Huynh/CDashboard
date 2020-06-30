
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../components/Navigation/index";
import DashNav from "../components/DashNav"
import * as routes from "../routes/routes";
import { Box, Button, Heading } from "grommet";
import Global from "../components/Global"
import WorldStats from "../components/WorldStats"
import LatestNews from "../components/LatestNews"

const Dashboard = props => {

 const [dashOption, setDash] = useState([

    {name: "CountryStat", active: true},
    {name: "CustomizedStat", active:false},
    {name: "LatestNews", active: false }
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
              class="fas fa-heartbeat"
              style={{ color: "#FE687D", margin: "0 5px 0 20px" }}
            ></i>
            <Button

              label="CovidTrackS"
              color=" #636363"
              plain="true"
            />
          </Heading>
        </Box>
      </LogoContainer>
      <NavTitle key={1} onClick={()=>handleDash("CountryStat")}>
        Statistics By Country
</NavTitle  >
      <NavTitle key={2} onClick={()=>handleDash("CustomizedStat")}>
        Customized Statistics Search 
</NavTitle >
      <NavTitle key={3}  onClick={()=>handleDash("LatestNews")}>
      Covid19 Latest News 
</NavTitle>
    

    </DashWrapper>

                    {/* <DashNav /> */}




                    {/* GLobal Stats */}
        {dashOption[0].active === true? <Global/> : dashOption[1].active ===true? <WorldStats/>: <LatestNews/>}
    


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
height: 100vh;
 
padding: 1rem;
 


`;

const GoButton = styled.div`
  display: flex
  align-items: center;
  text-decoration: none;
  font-family: "Roboto";
  font-size: 2rem;
  color: #636363;
  border-radius: 0 10px 10px 0;
  background: #FE687D;
  border: 1px solid #FE687D;
  border-left: none;
  padding: 0 10px 0 10px;

`;


const NavTitle = styled(GoButton)`
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
const DashContent = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;
// position:absolute;