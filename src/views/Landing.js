
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


const Landing = props => {
  const [currentActivity, setCurrentActivity] = useState("AI Powered Symptom Checker");
  const [number, setNumber] = useState(1);

  const activity = ["AI Powered Symptom Checker", "Unbiased Symptom Analyses", "Physcian Evaluated Results", "Analyses Withou Patient Private Data", "Suggestions on Patient Next Best Steps", "Categorized diagnoses","Track Global Covid19 Case Numbers", "Customize Covid19 Data By Country"];

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
      <Navigation />
      <LandingScreen>
        <h2>
       Patienti <span>{currentActivity}</span>
        </h2>
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
`;


const LandingScreen = styled.div`
background: url(${cvbg3});
background-size:cover;
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
height: 100vh;

h2 {
    margin: -200px 0 32px 0;
    color: white;
    font-family: "Roboto";
    font-size: 48px;
    font-weight: normal;
    span{
      font-weight: bold;
      color: #FE687D;
    }
@media(max-width: 500px){
  height: 98vh;
}
`
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
  
`

const FeaturesInfo = styled.div`
  margin: 125px 2% 20px 2%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 500px){
    flex-direction: column;
  }
`

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
`

const FeatureBox = styled(InfoBox)`
  border: 1px solid #ECECEC;
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
`
const FeaturePic = styled.img`
  width: 100%;
  height: 185px;
`

