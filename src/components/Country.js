import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "./Navigation/index";
import update from 'immutability-helper';
import PredictGraph from './MapComponents/PredictGraph'
import Global30Chart from './MapComponents/Global30Day';
import ReactApexChart from './MapComponents/Global30Day'

import MainIcon from '../assets/globalban.png'

 
import axios from 'axios';

 
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
import Chart from 'react-apexcharts'

 

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
            "entityFillHoverColor": "#9F8EFF",
            "entityFillColor": "#B6AAFE",
            "theme": "gammel",

            "palette": "1"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        "data": dataset
    },

 
}





class Country extends React.Component {
    constructor(props) {
        super(props);

    this.state={
        Date: new Date().toDateString(),
        Time: new Date().toLocaleTimeString('en-US'),
        GlobalRes: {
      
        },
        GLobalChangeIncrease:{
            total_cases: false,
            total_deaths: false,
            total_recovered: false 
        },
        GLobal30:{
           dataCases: [], //nested arr [[date, value]...]
           dataRecovered: [],
           dataDeaths:[],
           xAxis:[],
        
            max: null, 

        },
        errorMsg: " ",
        StateAbbrev:"",
        CountryFullName: "USA",
        CountryTotals: {
            Cases: null,
            newCasePercent: null,
            Recovered: null,
            newRecoveredPercent: null,
            Deaths: null, 
            newDeathsPercent: null }, 
  
        series30: [{
            name: "Cases",
            data: []
          },
          {
            name: "Recovered",
            data:  []
          },
          {
            name: 'Deaths',
            data: []
          }
        ],

        options30: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [2, 2, 2],
            curve: 'smooth',
            // dashArray: [0, 5, 5]
          },
          title: {
            // text: `PREVIOUS 30 DAYS`,
            // style:{
            //     fontFamily: 'Roboto',
            //     color:'#4D4CAC',
            //     fontSize: '1rem',
            //     floating: true
            // },
            // align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories:[]
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val ; 
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val ;
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            borderColor: '#f1f1f1',
          }
        },
    

  
        Prediction:{
            next2weeks:[],
            xaxisDates:[], 
            prev2weeks:[],
            trendPercent: null
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
        
        // console.log("RES.DATA", res.data)
        let allNames= res.data;
       
        console.log("countrName from label:", countryName)
        console.log("allnames obj:", allNames)
     
       function findAbbrev() {
          
           for(const countries of allNames){
            if(countries.name === countryName){
                // console.log(countries.name === countryName, "name in obj is found")
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
        // console.log("time, resdata,", res.data)
       let time=res.data 
        let cases1 =[]
    let deaths1=[]
    let recovered1=[]
    let xaxis1=[]
        //can make this 30 dynamic if user wnats to see farther back. set it on state.
    for(let i=0; i<=30; i++) {

        cases1.push(time[i].cases)
        deaths1.push(time[i].deaths)
        recovered1.push(time[i].recovered)
        xaxis1.push(time[i].last_update.slice(5,10))
        
      }

      cases1= cases1.reverse()
      deaths1=deaths1.reverse()
      recovered1=recovered1.reverse()
      xaxis1 = xaxis1.reverse()

      this.setState({
          series30: update(this.state.series30, {0:{data:{$set: cases1}}, 1:{data:{$set: recovered1}},  2:{data:{$set: deaths1}} }),
        options30: {...this.state.options30, xaxis: {...this.state.options30.xaxis, categories:xaxis1} },
  
      })




    
    //   console.log("30 STATS:", this.state.series30[0],this.state.series30[1], this.state.series30[2] )
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

          predictDates=predictDates.reverse()
          predictCases=predictCases.reverse()
          let prev2weeks1= this.state.series30[0].data
          prev2weeks1 = prev2weeks1.slice(0,14)

          let currDayTotal= this.state.series30[0].data[this.state.series30[0].data.length-1]
        //   console.log("Curr Day", currDayTotal)
        //   console.log("all predict cases", predictCases)
          let predictLastDay=predictCases[0]
        //   console.log("LAST-PREDICT-DAY", predictLastDay)

          let predictPercent= predictLastDay- currDayTotal
          predictPercent=  (predictPercent / currDayTotal).toFixed(2); 


        //   console.log("LAST-PREDICT-DAY", predictLastDay, "Curr Day", currDayTotal, "final percent", predictPercent)
          

          this.setState({
            Prediction:{...this.state.Prediction, next2weeks:predictCases, xaxisDates:predictDates, prev2weeks:prev2weeks1, trendPercent:predictPercent },
            //clear abbrev for next click?
            // StateAbbrev: ""
        })


      
        //ADDING MORE

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
    .then(res=>{
        axios({
            method:"GET",
            url:"https://who-covid-19-data.p.rapidapi.com/api/data",
            headers:{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"who-covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":"df660fcfb2msh8068165b821fa6ap1b7145jsn0967348c7cfc",
            "useQueryString":true
            },
            params:{ //these all need to be set on state to be recieved from form  
            "region":"European Region",
            "cases":"35000",  
            "reportDate":"2020-03-25",
            }})
})
    
    .catch(err=>{
        console.log("err", err)
    })
}




    componentDidMount() {

        FusionCharts.addEventListener('entityClick', this.entityClick);
      
        return axios
            .get('https://api.covid19api.com/summary', {signal: this.abortController.signal})
            .then(res => {
                console.log("res", res)
                const GRES = res.data.Global
                const DATE = res.data.Date

                this.setState({
                  
                    GlobalRes:
                       
                    GRES
                    
            })

                // console.log("state", this.state.GlobalRes.TotalConfirmed)
                return axios.get(`https://covid19-api.org/api/status/US`)

            })
            .then(res=>{
               
        //save ccountry total cases in state
                let totalRes=res.data
                // console.log("initial US country totals:", totalRes)
        this.setState({
            CountryTotals :{...this.state.CountryTotals, Cases:totalRes.cases, Recovered:totalRes.recovered, Deaths:totalRes.deaths }
        })
        // console.log("state Countrytotals here:", this.state.CountryTotals)
        return axios
        .get(`https://covid19-api.org/api/diff/US`)
        //returns obj 

            })
            .then(res=>{
                console.log("RES AFTER GET PERCENTS FOR US", res)
                let percents = res.data
                // console.log("PERCENTS", percents)



        
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


 

    componentWillUnmount = () => this.abortController.abort();

  abortController = new window.AbortController();

    render() {


        return (

            <>
                <GlobalWrapper>
                    <DashHeader>
                        <h2>Dashboard</h2>
                        <h2>{this.state.Date}</h2> 
                    </DashHeader>

                <GlobalStats>
                    <Title >
                        <h5><span>Covid19 Cases Overview</span></h5>
                   <h6> {this.state.Time}</h6>
                    </Title>

                    </GlobalStats>

                  
                    <MapDiv>
                        <h6>Choose A Country On the Map to Overview</h6>
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

                        <ThirtyDayWrapper>


                    <ThirtyDaySty>
                        {/* row container*/}
                    <ThirtyDayElements>
                    <h6>{this.state.CountryFullName} PREVIOUS 30 DAYS</h6>
                     </ThirtyDayElements>   
                    
                    <ThirtyDayElements>
                    <h6> CHANGE IN TOTALS</h6>
                    </ThirtyDayElements>   
                           {/* row container end*/}
                    </ThirtyDaySty>

                    <ThirtyDaySty>
                         {/* row container*/}
                    <Chart options={this.state.options30} series={this.state.series30} type="line" height={350} width={700} />
                    
                    {/* container with column for each change total */}
                    
                    
                    
                    
                    <ThirtyDayPercents>
                    
 {Math.sign(this.state.CountryTotals.newCasePercent) === -1? (
                                  <ThirtyDayElementsInner>        
                        <h6>
                        <i class="fas fa-sort-down fa-3x"
                        style={{ color: "red" , margin: "10px 10px  2px 2px", }} 
                        ></i> ({this.state.CountryTotals.newCasePercent}%) Decrease in Cases</h6>
                     </ThirtyDayElementsInner>
                    ):  (
                        <ThirtyDayElementsInner>      
                            <i class="fas fa-sort-up fa-3x"
                        style={{ color: "red",  margin: "10px 0 10px 0", border: "1px solid black" , padding:"5px,0"}} 
                        ></i>
                    <h6>
                         ({this.state.CountryTotals.newCasePercent}%) Increase in Cases</h6>
                    
                    </ThirtyDayElementsInner>)}

                {Math.sign(this.state.CountryTotals.newRecoveredPercent) === -1? (

<ThirtyDayElementsInner>     
                        <h6>
                        <i class="fas fa-sort-down fa-3x"
                        style={{ color: "red" , margin: "10px 10px 2px 2px",}} 
                        ></i> ({this.state.CountryTotals.newRecoveredPercent}%) Decrease in Recovered</h6>
                        </ThirtyDayElementsInner>
                    ):(
                        <ThirtyDayElementsInner>     
                    <h6>
                        <i class="fas fa-sort-up fa-3x mt-10"
                        style={{ color: "red", margin: "10px 10px  2px 2px", }} 
                        ></i> ({this.state.CountryTotals.newRecoveredPercent}%) Increase in Recovered</h6>
                            </ThirtyDayElementsInner>
                        )}

{Math.sign(this.state.CountryTotals.newDeathsPercent) === -1? (
    <ThirtyDayElementsInner>     
                        <h6>
                        <i class="fas fa-sort-down fa-3x"
                        style={{ color: "red" , margin: "10px 10px  2px 2px",}} 
                        ></i> ({this.state.CountryTotals.newDeathsPercent}%) Decrease in Deaths</h6>
                      </ThirtyDayElementsInner>
                    ):(
                        <ThirtyDayElementsInner>     
                    <h6>
                        <i class="fas fa-sort-up mt-10 fa-3x"
                        style={{ color: "red" , margin: "10px 10px 2px 2px",}} 
                        ></i> ({this.state.CountryTotals.newDeathsPercent}%) Increase in Deaths</h6>
                         </ThirtyDayElementsInner>
                        )}

                    </ThirtyDayPercents>
                    
                    {/* row container end*/}
                    </ThirtyDaySty>

                    </ThirtyDayWrapper>

{/* PREDICTION */}

<ThirtyDayWrapper>


                        
<ThirtyDaySty>
<ThirtyDayElements>
<h6>{this.state.CountryFullName} 14 DAY PREDICTION</h6>
</ThirtyDayElements>   

<ThirtyDayElements>
<h6>PREDICTION TREND</h6>
</ThirtyDayElements>
</ThirtyDaySty>


<ThirtyDaySty>
{/* <Chart  options={this.state.optionsPredict} series={this.state.seriesPredict} type="area" height={350} width={700} /> */}
<PredictGraph predict={this.state.Prediction}/>


{/* 
PREDICTION PERCENTAGE */}

  <ThirtyDayPercents>
                    
                    {Math.sign(this.state.Prediction.trendPercent) === -1? (
                                                     <ThirtyDayElementsInner>        
                                           <h6>
                                           <i class="fas fa-sort-down fa-3x"
                                           style={{ color: "red" , margin: "10px 10px  2px 2px", }} 
                                           ></i> ({this.state.Prediction.trendPercent}%) Decrease in Cases</h6>
                                        </ThirtyDayElementsInner>
                                       ):  (
                                           <ThirtyDayElementsInner>      
                                               <i class="fas fa-sort-up fa-3x"
                                           style={{ color: "red",  margin: "10px 0 10px 0", border: "1px solid black" , padding:"5px,0"}} 
                                           ></i>
                                       <h6>
                                            ({this.state.Prediction.trendPercent}%) Increase in Cases</h6>
                                       
                                       </ThirtyDayElementsInner>)}


     </ThirtyDayPercents>
     </ThirtyDaySty>

  
  
 </ThirtyDayWrapper>

                </GlobalWrapper>

            </>
        )

    }
}

export default withRouter(Country);

// TOP
const GlobalWrapper = styled.div`
width: 85%;
height: 100%;
// padding: 1rem;
background:white;
font-family: 'Poppins', sans-serif;
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;
margin-left: .8rem;
`;

const DashHeader = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
color: #5243C0; 
h2{
    margin-left: 2rem;
    margin-right: 2rem;
}
`;

const GlobalStats = styled.div`
 

width: 100%;
display: flex;
flex-direction:row; 
justify-content: space-between;
text-align: center;
 
margin: 30px 0rem 0 0rem;
border-radius: 15px;
     
// border: 1px solid red;
h1{

    font-weight: bold;
    font-family: 'Poppins', sans-serif;

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
font-family:'Poppins', sans-serif;
padding: .8rem;
color:  #5243C0;  
border-radius: 15px;
background: white;
// border: 1px solid  #636363;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
 

h2{
 
font-weight: normal;
font-size: 1rem;

span{
    color:#5243C0; 
    font-weight: bold;
}
}

`;

const Title = styled.div`
background-image: url(${MainIcon});
 background-size: cover;
background-position: center;
background-repeat: no-repeat;
padding: 0 0 0 0;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: space around;
 
width: 100%;
height: 45vh;

 h5{
  color: white;
    font-weight: normal;
    font-size: 3rem;
    margin-left: 30rem;
    margin-top: 13rem;
    margin-bottom: 0px;
    span{
    
        font-weight: bold;
    };
};

    h6{
        color: white;
        font-weight: normal;
        font-size: 2.5rem;
        margin-left: 40rem;
        margin-top: 0px;
        span{
    
            font-weight: bold;
        };
    };


// border: 1px solid red;
`;

const TitleImage = styled.img`
width: 100%;
 
 
`;

const MapDiv = styled.div`
width: 100%
font-family:'Poppins', sans-serif;
// padding: .8rem;
color: #5243C0; 
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
font-family: 'Poppins', sans-serif;
// padding: .8rem;
color:  #5243C0; 
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

const ThirtyDayWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
margin-top: 30px;
width: 100%
font-family: 'Poppins', sans-serif;
// padding: .8rem;
color:  #5243C0; 
border-radius: 15px;
background: white;

box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
margin: 30px .8rem 0 .8rem; 
text-align:center;
h6{
    font-size: 1.7rem;
    font-weight: normal;
}
`;


const ThirtyDaySty = styled.div`
width: 100%;
display: flex;
flex-direction: row; 
justify-content: space-between;
// margin-top: 30px;
 
font-family: 'Poppins', sans-serif;
// padding: .8rem;
color: #5243C0; 
// border-radius: 15px;
background: white;

// box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
// margin: 30px .8rem 0 .8rem; 
text-align:center;
h6{
    font-size: 1.5rem;
    font-weight: normal;
}
`;


const ThirtyDayElements = styled.div`
//title 2 total

width: 46%;
padding: 1rem;
`; 

const ThirtyDayElementsInner = styled.div`
//title 2 total

width: 46%;
display: flex;
flex-direction: row;
justify-content: space-around;

`; 


const ThirtyDayPercents = styled.div`
width: 46%;
display: flex;
flex-direction: column;
align-items: center;

h6{
    font-size: 1rem;

}

`; 

