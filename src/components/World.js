// STEP 1 - Include Dependencies

// Include react
import React from 'react';
import ReactDOM from 'react-dom';

//axios
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

// Adding the chart and theme as dependency to the core fusionchart
ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

//STEP 2 - Define the dataset and the colorRange of the map
// const dataset = [{
//     "id": "NA",
//     "value": ".82",
//     "showLabel": "1"
// }, {
//     "id": "SA",
//     "value": "2.04",
//     "showLabel": "1"
// }, {
//     "id": "AS",
//     "value": "1.78",
//     "showLabel": "1"
// }, {
//     "id": "EU",
//     "value": ".40",
//     "showLabel": "1"
// }, {
//     "id": "AF",
//     "value": "2.58",
//     "showLabel": "1"
// }, {
//     "id": "AU",
//     "value": "1.30",
//     "showLabel": "1"
// }];

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
    events:{
        "entityClick": function(e, data){
            console.log("label", data.label, data.value)
            let countryName= data.label

            //country total & percentage from last update
            //get country prefix
          
            return axios
            .get(`https://covid19-api.org/api/countries`)
            .then(res=>{
            
            console.log("RES.DATA", res.data, "RES.DATA.COUNTRIES", res.data.Countries)
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
                StateAbbrev : my 
            })
            return axios.get(`https://covid19-api.org/api/status/${my}`)
            //get country totals works




        })
        .then(res=>{
            console.log("res get abbrev:", res)
            //save ccountry total cases in state

            this.setState({
                CountryTotals :{...this.state.CountryTotals, Cases:res.cases, Recovered:res.recovered, Deaths:res.deaths }
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
            
                predictDates.push(predict[i].last_update.slice(5,10))
                
              }

            this.setState({
                Prediction:{...this.state.Prediction, next2weeks:predictCases, xaxisDates:predictDates },
                //clear abbrev for next click?
                // StateAbbrev: ""
            })

        })
        
        .catch(err=>{
            console.log("err", err)
        })

            

     


        }

    }
}




// STEP 3 - Creating the DOM element to pass the react-fusioncharts component
class Worldmap extends React.Component {
    state={
        errorMsg: " ",
        StateAbbrev:"",
        CountryTotals: {
            Cases: null,
            Recovered: null,
            Deaths: null 

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
        }
    }


    render() {
        return (<
            ReactFC {
            ...chartConfigs
            }
        />
        );
    }
}

export default Worldmap;