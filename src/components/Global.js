import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "./Navigation/index";
import MainIcon from '../assets/globalban.png'
import axios from 'axios';
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
    }

    }


componentDidMount(){
    return axios
    .get('https://api.covid19api.com/summary', {signal: this.abortController.signal})
 
 .then(res => {
        console.log("res", res)
        const GRES = res.data.Global
        const DATE = res.data.Date

        this.setState({
          
            GlobalRes:GRES
            
 
        })
        return axios
        .get(`https://covid19-api.org/api/timeline`)
    })
    .then(res=>{
        console.log("RES TIMELINE", res.data)
        let Change=res.data
        let thirtyGlobal= res.data.slice(0,30)
        //new array with data & value

        let thirtyCases=[]
        let thirtyRecovered=[]
        let thirtyDeaths=[]
        let xAxis1=[]
      
        thirtyGlobal.map(data=>{
            thirtyCases.push([data.last_update.slice(5,10), data.total_cases])
            thirtyRecovered.push([data.last_update.slice(5,10), data.total_recovered])
            thirtyDeaths.push([data.last_update.slice(5,10), data.total_deaths])
            xAxis1.push(data.last_update.slice(5,10))

        })

       let findMax= thirtyGlobal
       
    findMax.sort(function(a,b){return b.cases -a.cases})
      console.log("FINDMAX", findMax)
        let maxD = findMax[0].total_cases
        let minD = findMax[findMax.length-1].total_deaths 
        console.log("GLOBAL30 SORTED", thirtyGlobal, "MAX:", maxD,  "MIN:", "CHANGE[1]:", Change[1], "CHANGE[2]:", Change[2])

        this.setState({
            GLobalChangeIncrease:{
                ...this.state.GLobalChangeIncrease, 
                total_cases: Change[1].total_cases > Change[0].total_cases? true: false,
                total_deaths: Change[1].total_deaths > Change[0].total_deaths? true: false,
                total_recovered: Change[1].total_recovered > Change[0].total_recovered? true: false,
            }, 
      
            GLobal30:{
                ...this.state.GLobal30,
                dataCases: thirtyCases,
                dataRecovered: thirtyRecovered,
                dataDeaths: thirtyDeaths,
                min : minD,
                max: maxD,
                xAxis: xAxis1
            }
        })

        console.log("GLOBAL30 STATE", this.state.GLobal30, this.state.GLobalChangeIncrease)
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
                        <h5><span>Covid19 Cases Overview</span></h5>
                   <h6> {this.state.Time}</h6>
                    </Title>

                    </GlobalStats>

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


                    <ThirtyDaySty>
         {/* <Global30Chart global30={this.state.Global30}/> */}
         <ThirtyDayElements>
<h6>GLOBAL 30 DAY TREND</h6>
</ThirtyDayElements>
        
         <Global30Chart global30={this.state.GLobal30}/>
         <button onClick={(e) =>this.getGlobal30(e)}>Get Global 30</button>
     </ThirtyDaySty>
  

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

