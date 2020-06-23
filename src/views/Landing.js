
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


const Landing = props => {
  const [currentActivity, setCurrentActivity] = useState("updates");
  const [number, setNumber] = useState(1);

  const activity = ["new cases", "confirmed cases", "recovered cases", "stats by country", "live totals", "global totals", "news headlines", "updates"];

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
          Stay Current on Covid-19 <span>{currentActivity}</span>
        </h2>
      </LandingScreen>


      <FeaturesInfo>
        <InfoBox>
          <h3>Track Covid-19 </h3>
          <p>Easily track the status on Covid-19 cases anywhere on the globe. Discover the latest news headlines regarding the progress of treatment and responses.</p>
          <ExploreButton to={routes.DASHBOARD}  >Explore →</ExploreButton>
        </InfoBox>
        <FeatureBox>
          <FeaturePic src={cvbg2} />
          <h3>Day One by Country</h3>
          <p>Discover all cases by case type for a country from the first recorded case. Cases include: confirmed, recovered, deaths</p>
        </FeatureBox>
        <FeatureBox>
          <FeaturePic src={day1} />
          <h3>Newest Totals</h3>
          <p>A summary of new and total cases per country updated daily.</p>
        </FeatureBox>
        <FeatureBox>
          <FeaturePic src={news} />
          <h3>The Headlines</h3>
          <p>Browse the latest new articles from various sources of Covid19 headlines</p>
        </FeatureBox>
      </FeaturesInfo>
    </LandingPageContainer>
  )
};

export default withRouter(Landing);

const LandingPageContainer = styled.div`
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

