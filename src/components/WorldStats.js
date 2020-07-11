//import libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import Chart from "react-apexcharts"
import CustomCases from "./MapComponents/CustomCases"
import CustomNewCases from "./MapComponents/CustomNewCases"
import CustomDeath from "./MapComponents/CustomDeaths" 


//import components
import DashNav from "./DashNav";
import Navigation from "./Navigation/index";



const WorldStats = props=>{
 

const Initial_State={
    death:null,
    newCases: null,
    transmissionType: null,
    region: null,
    cases: null,
    reportDate: null
}

const graph_Initial_State={
  Cases: [],
  newCases:[],
  Deaths:[],
  DaysLastCase:[],
  xaxis:[], 
  dateRangeStart:"",
  dateRangeEnd:"",
  transmissionType: null,
  reportDate: null, 
  region: null,
}

    const [formInputs, setFormData] = useState({
       death:null,
        newCases: null,
        transmissionType: null,
        region: null,
        cases: null,
        reportDate: null

    });

    const [graphData, setGraphData] = useState({
      Cases: [],
      newCases:[],
      Deaths:[],
      xaxis:[], 
      dateRangeStart:null,
      dateRangeEnd:null,
      transmissionType: null,
      reportDate: null, 
      region: null,
    })

    const [resStatus, setStatus] = useState("")

    function handleChange(e){
        const val= e.target.value;
      setFormData({
        ...formInputs,
        [e.target.name]:val 
       })
    }


const transmissionMap={
  0:{
    "name":"Community transmission",
  
    "desc":"Community transmission is evidenced by the inability to relate confirmed cases through chains of transmission for a large number of cases, or by increasing positive tests through sentinel samples (routine systematic testing of respiratory samples from established laboratories)."
    },
    1:{ 
      "name":"Local transmission",
  
      "desc":"Local transmission indicates locations where the source of infection is within the reporting location."
      },
      2:{
        "name":"Imported cases only",
"desc":"Imported cases only indicates locations where all cases have been acquired outside the location of reporting."
      },
3:{
  "name":"Under investigation",
"desc":"Under investigation indicates locations where type of transmission has not been determined for any cases."
},
4:{
  "name":"Interrupted transmission",
"desc":"Interrupted transmission indicates locations where interruption of transmission has been demonstrated."
},
5:{
  "name":"Sporadic cases",
  "desc":"Countries/territories/areas with one or more cases, imported or locally detected."
},
6:{
  "name":"Clusters of cases",
  "desc":"Countries/territories/areas experiencing cases, clustered in time, geographic location and/or by common exposures."
},
7:{
  "name":"No cases",
  "desc":"No confirmed cases."
}

}


  const onSubmit1 = (e)=>{
      console.log("FORMIPNUTS", formInputs)
      //reset status for new submit
      setStatus("")
      setGraphData({...graph_Initial_State})
      e.preventDefault()
      //handle request w/ correct URL parameters from state

  

    let formState= {...formInputs}
    let url1 = "https://who-covid-19-data.p.rapidapi.com/api/data?&"
    for (const formInputs in formState){
        if (formState[formInputs]!==null && formInputs[formInputs]!==""){
            url1+=`${formInputs}=${formState[formInputs]}&`
        }

       
    }
    console.log("URL", `! ${url1} !`)

   
    

    return axios({
        method: "GET",
        url: url1, 
        headers:{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"who-covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":"df660fcfb2msh8068165b821fa6ap1b7145jsn0967348c7cfc",
            "useQueryString":"true",
            "content-type": "application/octet-stream"
        } 
    })
    .then(res=>{
        console.log("then RES", res)
        let Data= res.data; //arr of objects

        //sort results data by cases number

        

        Data.sort((function(a, b){return b.cases - a.cases}));

      //grab only unique country names, grab only 12

      let uniqueData=[]
      let visitedCountry= new Set() 
      let uniqueIndex=0


        for (const data2 of Data){

          if(visitedCountry.has(data2.name) === false){

            visitedCountry.add(data2.name)
            uniqueData[uniqueIndex] = data2 
            uniqueIndex+=1
            

          }

          if(uniqueIndex === 12){
            break;
          }
        }

    

      console.log(" TOP 12 UNIQUE DATA:", uniqueData)

        //slice first 12 becomes arr of 12 objects

      
     

        let casesArr=[]
        let deathArr=[]
        let newCasesArr=[]
        let xaxisNames=[]
        let lastCaseDate=[]
        //date range = rportDate of Data[0], reportDate of Data[12]
        let startDate=uniqueData[0].reportDate.slice(0,10)
        let endDate=uniqueData[11].reportDate.slice(0,10)

      
                 //graph Transmissiontype & region for graphdata
                 //make sure all region & transmission types are equal before designating
       
          
        let transmissionTypeSet= new Set()
        let regionTypeSet = new Set() 


        console.log("END & START", startDate, endDate)

        for(const data2 of uniqueData){

            transmissionTypeSet.add(data2.transmissionType)
            regionTypeSet.add(data2.region)

            xaxisNames.push(data2.name)
            casesArr.push(data2.cases)
            deathArr.push(data2.deaths)
            newCasesArr.push(data2.newCases)
            lastCaseDate.push(data2.daysSinceLastCase)
          
        }

       

       

        setGraphData({...graphData, Cases:casesArr, newCases:newCasesArr, Deaths:deathArr, xaxis:xaxisNames, dateRangeStart:startDate, 
          dateRangeEnd:endDate, transmissionType: transmissionTypeSet.size===1? transmissionMap[uniqueData[0].transmissionType].name :null, region:regionTypeSet.size===1? uniqueData[0].region : null})

       
    console.log("GRAPHDATA:",   graphData)
         

        setFormData({...Initial_State})
 
    })
    .catch(err=>{
        setStatus("Requested Data Not Available. Change Search Limit")
        console.log("err", err)
        setFormData({...Initial_State})
    })

  
  }
  
function ButtonAlert(e){

  alert(" 1: Local Transmision, 2: Imported Cases Only, 3: Under Investigation, 4: Interrupted Transmission 5: Sporadic Cases, 6: Clusters of Cases, 7: No Cases")
  e.preventDefault()
}
 

  
        return(
           
            <>
            <CustomWrapper>

            <DashHeader>
                        <h2>Dashboard</h2>
                        <h6>Optional Customizations</h6>
                      
                    </DashHeader>
            
     
        <h2>{resStatus}</h2>
        
        <h2>{formInputs.cases !==null? `Limit Search Starting at ${formInputs.cases} number of Cases`: "" }</h2>
        <h2>{formInputs.newCases !==null? `Limit Search Starting at ${formInputs.newCases} number of New Cases`: "" }</h2>
        <h2>{formInputs.death !==null? `Limit Search Starting at ${formInputs.death} number of Deaths`: "" }</h2>
        <h2>{formInputs.transmissionType !== null ? `Search by Virus Transmission Type: ${transmissionMap[formInputs.transmissionType].name}`: ""} </h2>
        <h2>{formInputs.region !== null ? `Search by Region: ${formInputs.region}`: ""} </h2>
        <h2>{formInputs.reportDate !== null ? `Search by Report Date: ${formInputs.reportDate}`: ""} </h2>
           
         <GlobalStats>
      
 

                 {/* <Chart options={options1} serires={series1} type="bar" height={350} width={700}/> */}
                
                

         <CustomForm onSubmit={(e) => onSubmit1(e)}>
 
            <label>
            Limit Search to N Number of Confirmed Deaths (Number):
        
            <input type="text" name="death" value={formInputs.death} onChange={handleChange} />
            </label>

            <label>
            Limit Search to N Number of New Cases (Number):
          
            <input type="text" name="newCases" value={formInputs.newCases} onChange={handleChange} />
            </label>

           

            <label>
            Display on a specific method of virus transmission. (Number):
           <select name="transmissionType" value={formInputs.transmissionType} onChange={handleChange} >
           <option name="transmissionType" value=""></option>
           <option name="transmissionType" value="0">0</option>
          <option name="transmissionType" value="1">1</option>
    <option name= "transmissionType" value="2" >2</option>
    <option  name= "transmissionType"  value="3" >3</option>
    <option name= "transmissionType"  value="4" >4</option>
    <option name= "transmissionType"value="5" >5</option>
    <option name= "transmissionType" value="6"  >6</option>
    <option name= "transmissionType"  value="7" >7</option>

            </select>
            <button onClick={e => ButtonAlert(e)}>Transmission Type Description</button>
          
            
            </label>

            <label>
            Enter a valid region:
           <select name="region" value={formInputs.region} onChange={handleChange} >
           <option name="region" value=""></option>
          <option  name="region" value="Western Pacific Region">Western Pacific Region</option>
    <option  name="region" value="European Region">European Region</option>
    <option name="region" value="SouthEast Asia Region" >SouthEast Asia Region</option>
    <option  name="region" value="Eastern Mediterranean Region" >Eastern Mediterranean Region</option>
    <option  name="region" value="Region of the Americas" >Region of the Americas</option>
    <option  name="region" value="African Region" >African Region</option>
   
            </select>
            </label>

            <label>
           Limit search to n number of total confirmed cases:
          
            <input type="text" name="cases" value={formInputs.cases} onChange={handleChange} /> 
             </label>

            <label>
           Get data for a specific day (YYYY-MM-DD):
        
            <input type="text" name="reportDate" value={formInputs.reportDate} onChange={handleChange} />
            
            </label>

        <input type="submit" value="Submit" />
       
            </CustomForm>

<GraphDiv>
            <CustomCases graphInfo={graphData} />
            
            </GraphDiv>

<GraphDiv>
             
            <CustomNewCases graphInfo={graphData}/>
           
            </GraphDiv>
<GraphDiv>
            
            <CustomDeath graphInfo={graphData}/>
            </GraphDiv>

            </GlobalStats>
            </CustomWrapper>
            </>
        )

        };

const WorldStatsBase= withRouter(WorldStats);
export default WorldStatsBase;


const CustomWrapper = styled.div`
width: 85%;
height: 100%;
padding: 1rem;
background:#F6F4FC;
font-family: 'Poppins', sans-serif;
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;
border: 1px solid purple;

`;

const DashHeader = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
border: 1px solid red;
`;

const GlobalStats = styled.div`
 

width: 100%;
display: flex;
flex-direction: column; 
justify-content: center;
text-align: center;
margin-top: 30px;
// margin: 30px 1.5rem 0 8.5rem;
border-radius: 15px;
    color: #FE687D;
border: 1.5px solid green;
h1{

    font-weight: bold;
    font-family:'Poppins', sans-serif;

}
`;

//----divide map & form into 2 elements
const CustomForm = styled.form`
max-width: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
border: 1px solid blue;
background: blue;
 
font-family:'Poppins', sans-serif;
padding: .8rem;
color:  #4D4CAC; 
border-radius: 15px;
background: white;
// border: 1px solid  #636363;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
 

`;

const GraphDiv = styled.div`
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
 
background: white;
 
font-family: 'Poppins', sans-serif;
padding: .8rem;
color:  #4D4CAC; 
border-radius: 15px;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
// border: 1px solid  #636363;
`;

//-------------------------

const GlobalSum = styled.div`
//6 SQUARES ACROSS
// margin: 1rem .8rem 0 .8rem; 
width: 16%;
display: flex;
//column for stats in box 
flex-direction: column; 
align-items: center;
align-content: center;
justify-content: center;
text-align:center;
font-family: 'Poppins', sans-serif;
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
font-family: 'Poppins', sans-serif;
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
font-family: 'Poppins', sans-serif;
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

const ThirtyDayWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
margin-top: 30px;
width: 100%
font-family:'Poppins', sans-serif;
// padding: .8rem;
color:  #4D4CAC; 
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
color:  #4D4CAC; 
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

