import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "./Navigation/index";

import axios from "axios";

 
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

//Import FusionMaps
import FusionMaps from 'fusioncharts/maps/fusioncharts.worldwithcountries';
import World from 'fusioncharts/fusioncharts.maps'

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//import graphs country summary
import ThirtyDayGraph from './MapComponents/ThirtyDayGraph'

// Adding the chart and theme as dependency to the core fusionchart
ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);


const dataset = []

const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    // "gradient": "1",
    // "color": [{
    //     "minvalue": "0.5",
    //     "maxvalue": "1.0",
    //     "color": "#FFD74D"
    // }, {
    //     "minvalue": "1.0",
    //     "maxvalue": "2.0",
    //     "color": "#FB8C00"
    // }, {
    //     "minvalue": "2.0",
    //     "maxvalue": "3.0",
    //     "color": "#E65100"
    // }]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'map/worldwithcountries', // The chart type

    width: '100%', // Width of the chart
    height: '700', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Map Configuration
        "chart": {
            "caption": "",
            "showCanvasBorder": "0",
            "showlegend": "0",
            "palettecolors": "#008ee4",
            "subcaption": "",
            // "numbersuffix": "%",
            // "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "entityFillColor": "#F0F5FF",
            "theme": "gammel",

            "palette": "1"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        "data": dataset
    },

 
}





class Global extends React.Component {
    constructor(props) {
        super(props);
    

    this.state={
        GlobalRes: {},
        Date: '',
        errorMsg: " ",
        StateAbbrev:"",
        CountryFullName: "USA",
        CountryTotals: {
            Cases: null,
            newCasePercent: null,
            Recovered: null,
            newRecoveredPercent: null,
            Deaths: null, 
            newDeathsPercent: null 

        }, 
        ThirtyDays:{
            //what does fusionchart/apex line graph need?
            //Seperate arr for cases, deaths, recovered for line grph data
            //grab arr of objects of dates w/ case types
            // CREATE new arr for cases, deaths, recovered, xaxiscats 

            cases:[],
            deaths:[],
            recovered:[], 
            xaxisCats: [], //get the dates & modify to 06-25 last_update.slice(5,10)
            last2weeksCases: [] //use as 
        },   

        Prediction:{
            next2weeks:[],
            xaxisDates:[]
        },

    }

    
    this.entityClick = this.entityClick.bind(this)
    }


    entityClick(eventObj, dataObj) {

        
        console.log("label", dataObj.label, dataObj.value)
        let countryName= dataObj.label

        //country total & percentage from last update
        //get country prefix
      
        return axios
        .get(`https://covid19-api.org/api/countries`)
        .then(res=>{
        
        console.log("RES.DATA", res.data)
        let allNames= res.data;
       
        console.log("countrName from label:", countryName)
        console.log("allnames obj:", allNames)
     
       function findAbbrev() {
          
           for(const countries of allNames){
            if(countries.name === countryName){
                console.log(countries.name === countryName, "name in obj is found")
                let abbrev=countries.alpha2
                return abbrev
            }
            
        
        }}

      let my= findAbbrev()



        //else if country data exists get total:
        console.log("check abbrev:", my)
        if(my == null){
            console.log("data not available")
        }

        this.setState({
            StateAbbrev : my, 
            CountryFullName: countryName
        })
        return axios.get(`https://covid19-api.org/api/status/${my}`)
        //get country totals works




    })
    .then(res=>{
        console.log("res get abbrev:", res)
        //save ccountry total cases in state

        this.setState({
            CountryTotals :{...this.state.CountryTotals, Cases:res.data.cases, Recovered:res.data.recovered, Deaths:res.data.deaths }
        })

               //30 day trend for cases, recovered, deaths

        return axios.get(`https://covid19-api.org/api/timeline/${this.state.StateAbbrev}`)

    })
    .then(res=> {
        console.log("time, resdata,", res.data)
       let time=res.data 
        let cases1 =[]
    let deaths1=[]
    let recovered1=[]
    let xaxis=[]
        //can make this 30 dynamic if user wnats to see farther back. set it on state.
    for(let i=0; i<=30; i++) {

        cases1.push(time[i].cases)
        deaths1.push(time[i].deaths)
        recovered1.push(time[i].recovered)
        xaxis.push(time[i].last_update.slice(5,10))
        
      }

      this.setState({
          ThirtyDays: {...this.state.ThirtyDays, cases:cases1, deaths:deaths1, recovered: recovered1, xaxisCats: xaxis,
        last2weeksCases:cases1.slice(0, 15)}
      })

        //ML 2 week prediction 
            return axios
            .get(`https://covid19-api.org/api/prediction/${this.state.StateAbbrev}`) //area spline chart compare last 2 & next 2 weeks trends


    })
    .then(res =>{
        console.log("Pred", res.data)

        let predict=res.data

       let predictCases=[]
        let predictDates=[]

        for(let i=0; i<predict.length; i++) {

            predictCases.push(predict[i].cases)
        
            predictDates.push(predict[i].date.slice(5,10))
            
          }

        this.setState({
            Prediction:{...this.state.Prediction, next2weeks:predictCases, xaxisDates:predictDates },
            //clear abbrev for next click?
            // StateAbbrev: ""
        })

        return axios
        .get(`https://covid19-api.org/api/diff/${this.state.StateAbbrev}`)
        //returns obj 

    })
    .then(res=>{
        console.log("PERCENTS", res.data)
        let percents = res.data

            //update percent uptakes for main country summs 
        this.setState({
            CountryTotals:{
                ...this.state.CountryTotals, newCasePercent: percents.new_cases_percentage, 
                newRecoveredPercent: percents.new_recovered_percentage, newDeathsPercent: percents.new_deaths_percentage
            }
        })

    })
    
    .catch(err=>{
        console.log("err", err)
    })
}

    componentDidMount() {

        FusionCharts.addEventListener('entityClick', this.entityClick);
      
        return axios
            .get('https://api.covid19api.com/summary')
            .then(res => {
                console.log("res", res)
                const GRES = res.data.Global
                const DATE = res.data.Date

                this.setState({
                    GlobalRes: GRES,
                    Date: DATE,

                })

                console.log("state", this.state.GlobalRes.TotalConfirmed)
                return axios.get(`https://covid19-api.org/api/status/US`)

            })
            .then(res=>{
               
        //save ccountry total cases in state
                let totalRes=res.data
                console.log("initial US country totals:", totalRes)
        this.setState({
            CountryTotals :{...this.state.CountryTotals, Cases:totalRes.cases, Recovered:totalRes.recovered, Deaths:totalRes.deaths }
        })
        console.log("state Countrytotals here:", this.state.CountryTotals)
        return axios
        .get(`https://covid19-api.org/api/diff/US`)
        //returns obj 

            })
            .then(res=>{
                console.log("RES AFTER GET PERCENTS FOR US", res)
                let percents = res.data
                console.log("PERCENTS", percents)
        
                    //update percent uptakes for main country summs 
                this.setState({
                    CountryTotals:{
                        ...this.state.CountryTotals, newCasePercent: percents.new_cases_percentage, 
                        newRecoveredPercent: percents.new_recovered_percentage, newDeathsPercent: percents.new_deaths_percentage
                    }
                })
        
            })

            .catch(err => {
                console.log("err", err)
            })
    }


    render() {


        return (

            <>
                <GlobalWrapper>
                    <DashHeader>
                        <h2>Dashboard</h2>
                        <h2>{this.state.Date}</h2>
                    </DashHeader>

                    <GlobalStats>
                        {/* pinkcolorcontainer in here */}
                        {/* <h1>DAILY GLOBAL SUMMARY <span>{this.state.Date}</span></h1> */}

                        <GlobalSum>

                            <h2>NEW CONFIRMED</h2>
                            <h4><span>{this.state.GlobalRes.NewConfirmed}</span></h4>
                        </GlobalSum>

                        <GlobalSum>
                            <h2>NEW DEATHS</h2>
                            <h4><span>{this.state.GlobalRes.NewDeaths}</span></h4>
                        </GlobalSum>

                        <GlobalSum>
                            <h2>NEW RECOVERED</h2>
                            <h4><span>{this.state.GlobalRes.NewRecovered}</span></h4>
                        </GlobalSum>

                        <GlobalSum>
                            <h2>TOTAL CONFIRMED</h2>
                            <h4><span>{this.state.GlobalRes.TotalConfirmed}</span></h4>
                        </GlobalSum>

                        <GlobalSum>
                            <h2>TOTAL DEATHS</h2>
                            <h4><span>{this.state.GlobalRes.TotalDeaths}</span></h4>
                        </GlobalSum>

                        <GlobalSum>
                            <h2>TOTAL RECOVERED</h2>
                            <h4> <span>{this.state.GlobalRes.TotalRecovered}</span></h4>
                        </GlobalSum>




                        {/* pinkcolorcontainer in here */}
                    </GlobalStats>

                    <MapDiv>
                        <h6>Choose Country to View Cases Summary</h6>
                        <ReactFC {...chartConfigs} {...this.state} onClick={this.dataplotclick}/>
                    </MapDiv>

            <CountryStats>
               
                    <CountryTotal>
                    <h4>{this.state.CountryFullName} CASES</h4>
                    <h5>{this.state.CountryTotals.Cases}</h5>

                    {Math.sign(this.state.CountryTotals.newCasePercent) === -1? (
                        <h6>
                        <i class="fas fa-sort-down "
                        style={{ color: "red" }} 
                        ></i> ({this.state.CountryTotals.newCasePercent}%)</h6>
                     
                    ):(<h6>
                        <i class="fas fa-sort-up "
                        style={{ color: "red" }} 
                        ></i> ({this.state.CountryTotals.newCasePercent}%)</h6>)}

                    </CountryTotal>

                    <CountryTotal>
                    <h4>{this.state.CountryFullName} RECOVERED</h4>
                    <h5>{this.state.CountryTotals.Recovered}</h5>

                    {Math.sign(this.state.CountryTotals.newRecoveredPercent) === -1? (
                        <h6>
                        <i class="fas fa-sort-down"
                        style={{ color: "red" }} 
                        ></i> ({this.state.CountryTotals.newRecoveredPercent}%)</h6>
                     
                    ):(<h6>
                        <i class="fas fa-sort-up "
                        style={{ color: "red" }} 
                        ></i> ({this.state.CountryTotals.newRecoveredPercent}%)</h6>)}

                    </CountryTotal>

                    <CountryTotal>
                    <h4> {this.state.CountryFullName} DEATHS</h4>
                    <h5>{this.state.CountryTotals.Deaths}</h5>

                    {Math.sign(this.state.CountryTotals.newDeathsPercent) === -1? (
                        <h6>
                        <i class="fas fa-sort-down "
                        style={{ color: "red" }} 
                        ></i> ({this.state.CountryTotals.newDeathsPercent}%)</h6>
                     
                    ):(<h6>
                        <i class="fas fa-sort-up "
                        style={{ color: "red" }} 
                        ></i> ({this.state.CountryTotals.newDeathsPercent}%)</h6>)}

                    </CountryTotal>

                    </CountryStats>

                    <ThirtyDaySty>
                        <ThirtyDayGraph country={this.CountryFullName} thirtyDays={this.state.ThirtyDays} />

                    </ThirtyDaySty>


                </GlobalWrapper>

            </>
        )

    }
}

export default withRouter(Global);

// TOP
const GlobalWrapper = styled.div`
width: 85%;
height: 100%;
padding: 1rem;
background:#F6F4FC;
font-family: Roboto;
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;

`;

const DashHeader = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`;

const GlobalStats = styled.div`
 

width: 80%;
display: flex;
flex-direction:row; 
justify-content: space-between;
text-align: center;
margin-top: 30px;
margin: 30px 1.5rem 0 8.5rem;
border-radius: 15px;
    color: #FE687D;
// border: 1px solid red;
h1{

    font-weight: bold;
    font-family: "Roboto";

}
`;

const GlobalSum = styled.div`
//6 SQUARES ACROSS
margin: 1rem .8rem 0 .8rem; 
width: 16%;
display: flex;
//column for stats in box 
flex-direction: column; 
align-items: center;
align-content: center;
justify-content: center;
text-align:center;
font-family: "Roboto";
padding: .8rem;
color:  #4D4CAC; 
border-radius: 15px;
background: white;
// border: 1px solid  #636363;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
 

h2{
 
font-weight: normal;
font-size: 1rem;

span{
    color: #FE687D;
    font-weight: bold;
}
}

`;


const MapDiv = styled.div`
width: 100%
font-family: "Roboto";
// padding: .8rem;
color:  #4D4CAC; 
border-radius: 15px;
background: white;
// border: 1px solid  #636363;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
margin: 1rem .8rem 0 .8rem; 
text-align:center;
h6{
    font-size: 1.7rem;
    font-weight: normal;
}
`;



const CountryStats = styled.div`
width: 100%;

font-size: .5rem;
display:flex;
display: flex;
flex-direction:row; 
justify-content: space-between;
text-align: center;
margin-top: 30px;
// margin: 30px 1.5rem 0 1.5rem;
justify-content: space-around;


`;

const CountryTotal = styled.div`
//3 big buttons across under map
width: 40%

display:flex;
flex-direction: column;
align-items:center;
text-align: center;
font-family: "Roboto";
// padding: .8rem;
color:  #4D4CAC; 
border-radius: 15px;
background: white;

padding: .5rem;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 

h4{
    font-size: 1.5rem;
}
h5{
    font-size: 1.3rem;
}
h6{
    font-size: 1rem;
}
`;



const ThirtyDaySty = styled.div`
width: 80%;
display: flex;
flex-direction:row; 
justify-content: center;
margin-top: 30px;
`;

