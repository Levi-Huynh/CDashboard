
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../components/Navigation/index";
import * as routes from "../routes/routes";
import { DASHBOARD } from "../routes/routes";

import cvbg2 from '../assets/cvbg2.jpg'
import day1 from '../assets/day1.jpg'
import cvbg3 from '../assets/cvbg3.jpg'
import news from '../assets/news.jpg'
import med from '../assets/med.jpg'
import landing from '../assets/path5137.png'


const Landing = props => {
  const [currentActivity, setCurrentActivity] = useState("AI Powered Symptom Checker");
  const [number, setNumber] = useState(1);

  const activity = ["AI Powered Symptom Checker", "Unbiased Symptom Analyses", "Physcian Evaluated Results", "Analyses Without Patient Private Data", "Suggestions on Patient Next Best Steps", "Categorized diagnoses","Track Global Covid19 Case Numbers", "Customize Covid19 Data By Country"];

  function updateText() {
    setCurrentActivity(activity[number]);
    return number === activity.length - 1
      ? setNumber(0)
      : setNumber(number + 1);
  }

  useEffect(() => {
    setTimeout(updateText, 2000);
  }, [number]);

 
  return (
    <LandingPageContainer>
     
 <Wave>
    <Navigation />
    <LandingTitle>
      <h2>
       Patienti <span>{currentActivity}</span>
        </h2>
        </LandingTitle>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,170.7C384,213,480,267,576,261.3C672,256,768,192,864,192C960,192,1056,256,1152,277.3C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
 </Wave>

      <LandingScreen>
    
      </LandingScreen>


      <FeaturesInfo>
        <InfoBox>
          <h3>Patient Dashboard </h3>
          <p>Access AI powered recommendations for the next best patient path.  Machine learning models build the recommendations based on patient provided inputs to increase accuracy of pre-diagnostic information, and
            and recommendations.  View the latest global stats on the Covid19 pandemic. Customize case analyses by country.  
          </p>
          <ExploreButton to={routes.DASHBOARD}  >Explore →</ExploreButton>
        </InfoBox>
        <FeatureBox>
          <FeaturePic src={med} />
          <h3>AI Powered Informational Pre-Diagnostics</h3>
          <p>Update features and symptom related information to get recommendations for the next best path towards wellness.</p>
        </FeatureBox>
        <FeatureBox>
          <FeaturePic src={day1} />
          <h3>Covid19 Global Pandemic</h3>
          <p>View live global stats of the current Covid19 pandemic</p>
        </FeatureBox>
        <FeatureBox>
          <FeaturePic src={news} />
          <h3>Customize Covid19 Analyses</h3>
          <p>Filter Covid19 stats by case types, transmission types, region, report dates to create customized analyses by country</p>
        </FeatureBox>
      </FeaturesInfo>
    </LandingPageContainer>
  )
};

export default withRouter(Landing);

const LandingPageContainer = styled.div`
// background: #222327;
max-width: 100%;
height: 100vh;
margin-bottom:0px;
border: .3px solid white;
`;

const Wave = styled.div`
border: .3px solid white;
margin-top: 0px;
background:  #FFCDCE;
// display: block;
svg{
  display: block;
}
`

const LandingTitle= styled.div`

h2 {
  margin: 100px 0 0px 0;
  color: #737AAE;
  font-family: "Roboto";
  font-size: 48px;
  font-weight: normal;
  span{
    font-weight: bold;
    color: #FE687D;
  }
@media(max-width: 500px){
height: 100vh;
}
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
height: 100%;
// border: 1px solid red;
`;

const LandingScreen = styled.div`
 
background-image: url(${landing});
// background-size:cover;
background-position: center;
background-repeat: no-repeat;
padding: 0 0 0 0;

// position: relative;
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
height: 70%;
margin-top:0px;
// border: 1px solid blue;

`;
const GoButton = styled(Link)`
  display: flex
  align-items: center;
  text-decoration: none;
  font-family: "Roboto";
  font-size: 2rem;
  color: white;
  border-radius: 0 10px 10px 0;
  background: #FE687D;
  border: 1px solid #FE687D;
  border-left: none;
  padding: 0 10px 0 10px;
  &:hover {
    background: white;
    color: #FE687D;
  }
`;


const ExploreButton = styled(GoButton)`
  font-size: 1.1rem;
  border-radius: 10px;
  border-left: 1px solid #FE687D;
  font-weight: bold;
  width: 125px;
  padding: 10px;
  
`;

const FeaturesInfo = styled.div`
  margin: 125px 2% 20px 2%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 500px){
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  width: 23%;
  margin: 0 1%;
  h3 {
    font-size: 32px;
    font-family: "Zilla Slab", serif;
    font-weight: bold;
    margin-top: 0;
    padding-left: 10px;
    color: #51C5DE;
  }
  p {
    font-size: 18px;
    font-family: "Zilla Slab", serif;
    color: #636363
    padding-left: 10px
  }
  @media(max-width: 500px){
    width: 95%;
    margin-bottom: 20px;
  }
`;

const FeatureBox = styled(InfoBox)`
  border: 1px solid #ECECEC;
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
`;
const FeaturePic = styled.img`
  width: 100%;
  height: 185px;
`;