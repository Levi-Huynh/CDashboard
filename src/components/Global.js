import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "./Navigation/index";
import MainIcon from '../assets/globalban.png'
import axios from 'axios';


//CHARTS
import Cases from './MapComponents/GlobalCases3';
import Deaths from './MapComponents/GlobalDeaths3';
import Recovered from './MapComponents/GlobalRecovered3';

import Global30Chart from './MapComponents/Global30Day';

//import graphs country summary
import Chart from 'react-apexcharts'



class Global extends React.Component{
    constructor(props) {
        super(props);

    this.state={
        Date: new Date().toDateString(),
        Time: new Date().toLocaleTimeString('en-US'),
        GlobalRes: {},
        Change:{
            cases: null,
            deaths: null,
            recovered: null

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
         Global90:{
            dataCases: [], //nested arr [[date, value]...]
            dataRecovered: [],
            dataDeaths:[],
            xAxis:[],
         }
    }

    }


componentDidMount(){
    return axios
    .get('https://api.covid19api.com/summary', {signal: this.abortController.signal})
 
 .then(res => {
        console.log("res", res)
        const GRES = res.data.Global
        const DATE = res.data.Date

        let newRes={}

        for(const val in GRES){
           let myVal=GRES[val].toString()
            if(myVal.length > 6){
                myVal= parseInt(myVal)
                var zero= 6;
                var rounded = Math.round(myVal/Math.pow(10, zero))
                newRes[val] = rounded.toString()+'M'
            }else if(myVal.length <= 6){
                myVal= parseInt(myVal)
                var zero= 3;
                var rounded = Math.round(myVal/Math.pow(10, zero))
                newRes[val] = rounded.toString() + 'K'
            }
        }

        console.log('NEWRES:', newRes)
        this.setState({
          
            GlobalRes:newRes
            
 
        })
        return axios
        .get(`https://covid19-api.org/api/timeline`)
    })
    .then(res=>{
        // console.log("RES TIMELINE", res.data)
        let Change=res.data
        let thirtyGlobal= res.data.slice(0,90)
        //new array with data & value

        // let thirtyCases=[]
        // let thirtyRecovered=[]
        // let thirtyDeaths=[]
        // let xAxis1=[]

        
        let thirtyCases90=[]
        let thirtyRecovered90=[]
        let thirtyDeaths90=[]
        let xAxis190=[]
      
      
        thirtyGlobal.map(data=>{
        

            // thirtyCases.push(data.total_cases)
            // thirtyRecovered.push( data.total_recovered)
            // thirtyDeaths.push( data.total_deaths)
            // xAxis1.push(data.last_update.slice(5,10))

            

            thirtyCases90.push(data.total_cases)
            thirtyRecovered90.push( data.total_recovered)
            thirtyDeaths90.push( data.total_deaths)
            xAxis190.push(data.last_update.slice(5,10))

        })

       let findMax= thirtyGlobal
       
    findMax.sort(function(a,b){return b.cases -a.cases})
       
        let maxD = findMax[0].total_cases
        let minD = findMax[findMax.length-1].total_deaths 
        // console.log("GLOBAL30 SORTED", thirtyGlobal, "MAX:", maxD,  "MIN:", "CHANGE[1]:", Change[1], "CHANGE[2]:", Change[2])

        function convertChange(today, yesterday){
           let val= today-yesterday
           val=val.toString()
           if(val.length >6){
               let result = parseInt(val)
               var zero = 6;
               var rounded = Math.round(result/Math.pow(10, zero))
               return rounded.toString() + 'M'
           }else if(val.length > 3 && val.length <= 6){
            let result = parseInt(val)
            var zero = 3;
            var rounded = Math.round(result/Math.pow(10, zero))
            return rounded.toString() + 'K'
           } else if(val.length <= 3){
            let result = parseInt(val)
            var zero = 0;
            var rounded = Math.round(result/Math.pow(10, zero))
            return rounded.toString() 
           }
        }

        this.setState({
            GLobalChangeIncrease:{
                ...this.state.GLobalChangeIncrease, 
                total_cases: Change[0].total_cases > Change[1].total_cases? true: false,

                total_deaths: Change[0].total_deaths > Change[1].total_deaths? true: false,
                total_recovered: Change[0].total_recovered > Change[1].total_recovered? true: false,
            }, 
            Change:{
                ...this.state.Change,
                cases:  convertChange(Change[0].total_cases, Change[1].total_cases),
                deaths: convertChange(Change[0].total_deaths, Change[1].total_deaths),
                recovered: convertChange(Change[0].total_recovered, Change[1].total_recovered)

            },
            GLobal30:{
                ...this.state.GLobal30,
                dataCases: thirtyCases90.slice(0,30),
                dataRecovered: thirtyRecovered90.slice(0,30),
                dataDeaths: thirtyDeaths90.slice(0,30),
                min : minD,
                max: maxD,
                xAxis: xAxis190.slice(0,30)
            },
            Global90:{
                ...this.state.GLobal90,
                dataCases: thirtyCases90,  
                dataRecovered: thirtyRecovered90, 
                dataDeaths: thirtyDeaths90, 
                xAxis: xAxis190 
            }
        })

        console.log("GLOBAL30 STATE",   this.state.Global90)
    })
    .catch(err => {
        console.log("err", err)
    })

}

// componentWillUnmount = () => this.abortController.abort();

// abortController = new window.AbortController();
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
                        <h5><span>Covid19 Global</span></h5>
                   <h6> {this.state.Time}</h6>
                    </Title>

                    </GlobalStats>

                    <GlobalStats>
                        {/* pinkcolorcontainer in here */}
                        {/* <h1>DAILY GLOBAL SUMMARY <span>{this.state.Date}</span></h1> */}

                        <GlobalSum>
                        <h1><span>{this.state.GlobalRes.NewConfirmed}</span></h1>
                            <h2>NEW CONFIRMED</h2>
                           
                        </GlobalSum>

                        <GlobalSum>
                        <h1><span>{this.state.GlobalRes.NewDeaths}</span></h1>
                            <h2>NEW DEATHS</h2>
                         
                        </GlobalSum>

                        <GlobalSum>
                        <h1><span>{this.state.GlobalRes.NewRecovered}</span></h1>
                            <h2>NEW RECOVERED</h2>
                       
                        </GlobalSum>

                        <GlobalSum>
                        <h1><span>{this.state.GlobalRes.TotalConfirmed}</span></h1>
                            <h2>TOTAL CONFIRMED</h2>
                      
                        </GlobalSum>

                        <GlobalSum>
                        <h1><span>{this.state.GlobalRes.TotalDeaths}</span></h1>
                            <h2>TOTAL DEATHS</h2>
                       
                        </GlobalSum>

                        <GlobalSum>
                        <h1> <span>{this.state.GlobalRes.TotalRecovered}</span></h1>
                            <h2>TOTAL RECOVERED</h2>
                     
                        </GlobalSum>




                        {/* pinkcolorcontainer in here */}
                    </GlobalStats>


<ThirtyDayWrapper>

{/* CASES */}
<ThirtyDaySty>
      
         <ThirtyDayElements>
<h6>90 DAY TREND: CASES</h6>
</ThirtyDayElements>
 

</ThirtyDaySty>

<ThirtyDaySty>
        
         <Cases  global90={this.state.Global90}/>

         <ThirtyDayPercents>
         <h6>CASE CHANGES FROM PREVIOUS DAY</h6>
         {this.state.GLobalChangeIncrease.total_cases? (
                   <ThirtyDayElementsInner>
               <h6>
               <i class="fas fa-sort-up "
               style={{ color: "red" }} 
               ></i> {this.state.Change.cases} Case Increase From Previous Day</h6> 
                </ThirtyDayElementsInner>
            ):(    <ThirtyDayElementsInner><i class="fas fa-sort-down"
            style={{ color: "red" }} 
            ></i> <h6>  {this.state.Change.cases} Case Decrease From Previous Day</h6>)
          </ThirtyDayElementsInner>
              
           )}
               
                   

         </ThirtyDayPercents>
         </ThirtyDaySty>

         </ThirtyDayWrapper>

         {/* RECOVERED */}

      <ThirtyDayWrapper>
   
<ThirtyDaySty>
      
      <ThirtyDayElements>
      <h6>90 DAY TREND: RECOVERED</h6>
</ThirtyDayElements>
</ThirtyDaySty>

<ThirtyDaySty>
        
         <Recovered global90R={this.state.Global90}/>

         <ThirtyDayPercents>
         <h6>RECOVERED CHANGES FROM PREVIOUS DAY</h6>
         {this.state.GLobalChangeIncrease.total_recovered? (
                   <ThirtyDayElementsInner>
               <h6>
               <i class="fas fa-sort-up "
               style={{ color: "red" }} 
               ></i> {this.state.Change.recovered} Recovered Increase From Previous Day</h6> 
                </ThirtyDayElementsInner>
            ):(    <ThirtyDayElementsInner><i class="fas fa-sort-down"
            style={{ color: "red" }} 
            ></i> <h6>  {this.state.Change.recovered} Recovered Decrease From Previous Day</h6>)
          </ThirtyDayElementsInner>
              
           )}
                   

         </ThirtyDayPercents>
         </ThirtyDaySty>
         </ThirtyDayWrapper>
         {/* DEATHS */}

      <ThirtyDayWrapper>      
<ThirtyDaySty>
      
      <ThirtyDayElements>
      <h6>90 DAY TREND: DEATHS</h6>
</ThirtyDayElements>
</ThirtyDaySty>

<ThirtyDaySty>
     
      <Deaths global90={this.state.Global90}/>

      <ThirtyDayPercents>
      <h6>DEATH CHANGES FROM PREVIOUS DAY</h6>
      {this.state.GLobalChangeIncrease.total_deaths? (
                   <ThirtyDayElementsInner>
               <h6>
               <i class="fas fa-sort-up "
               style={{ color: "red" }} 
               ></i> {this.state.Change.deaths} Deaths Increase From Previous Day</h6> 
                </ThirtyDayElementsInner>
            ):(    <ThirtyDayElementsInner><i class="fas fa-sort-down"
            style={{ color: "red" }} 
            ></i> <h6>  {this.state.Change.deaths} Deaths Decrease From Previous Day</h6>)
          </ThirtyDayElementsInner>
              
           )}
      </ThirtyDayPercents>
      </ThirtyDaySty>
      </ThirtyDayWrapper>


<ThirtyDayWrapper>
<ThirtyDaySty>
      
         <ThirtyDayElements>
<h6>GLOBAL 30 DAY TREND</h6>
</ThirtyDayElements>
</ThirtyDaySty>

<ThirtyDaySty>
        
         <Global30Chart global30={this.state.GLobal30}/>

         
         </ThirtyDaySty>
         </ThirtyDayWrapper>

                    </GlobalWrapper>
    </>)

}}

export default withRouter(Global)


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
width: 95%;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
margin-top: 30px;
width: 100%
font-family: 'Poppins', sans-serif;
padding: .5rem;
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
font-family: 'Poppins', sans-serif;
 //border: 1px solid black;
color: #5243C0; 
 
background: white;

//box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
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
    font-size: 1.4rem;

}

`; 

