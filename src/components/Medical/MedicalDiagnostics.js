import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../Navigation/index";
import SymptomOutput from "./SymptomsOutput"
import Test  from "./TestOuput"
//import DashNav 
import DashNav from "../DashNav";

//import libraries
import axios from "axios";
import { ModalProvider } from 'styled-react-modal'
import Modal from 'styled-react-modal'

const MedicalDiagnostics1 = props=>{
 
    //handle form inputs 
    //   const [reportNumber, setReportNum] = useState("");
//   const [territory, setTerritory] = useState("");
//   const [newCases, setNewCases] = useState("");
//   const [newDeaths, setNewDeaths] = useState("");
//   const [transmissionType, setTransmissionType] = useState("");
//   const [region, setRegion] = useState("");
//   const [cases, setCases] = useState("");
//   const [name, setName] = useState("");
//   const [reportDate, setReportDate] = useState("");
console.log("SYMPTOMSOUTPUT:", SymptomOutput )

    const [formInputs, setFormData] = useState(()=>{
        return mapDataKeys(Test)
    });

    const [modalIsOpen, setIsOpen] = useState(false)

    function mapDataKeys(dataArr){
        let copyData= {}
        dataArr.map(data=>{
            copyData[data.name] =""
        })

    }

    function handleChange(e){
        const val= e.target.value;
      setFormData({
        ...formInputs,
        [e.target.name]:val 
       })
    }


  //GRAPH STATES FOR TOP 20 
    //cases
    //deaths
    //newCases
    //newDeaths
    // region
    //report id
    //transmissiontype
    //reportDate
    //country name 

    //pass props to StackedBar chart
    //update props by the new states


  const onSubmit1 = e=>{
      //handle request w/ correct parameters from state

      //setState 
      //handle graph states 

    //   setDatas( series & options
    //     datas.map(item => 
    //         item.id === index 
    //         ? {...item, someProp : "changed"} 
    //         : item 
    // ))

    //SORT DATA RES BY TOP 10
    //PUSH ALL TO ARRAY FIRST
    //SORT ARRAY BY CASES 
    //SLICE TOP 10
    // var maxSpeed = {
    //     car: 300, 
    //     bike: 60, 
    //     motorbike: 200, 
    //     airplane: 1000,
    //     helicopter: 400, 
    //     rocket: 8 * 60 * 60
    // };
    // var sortable = [];
    // for (var vehicle in maxSpeed) {
    //     sortable.push([vehicle, maxSpeed[vehicle]]);
    // }
    
    // sortable.sort(function(a, b) {
    //     return a[1] - b[1];
    // });

  }
  
function ButtonAlert(e){

  alert("CHOOSE THE FOLLOWING NUMBERS TO FILTER GRAPH BY TRANSMISSION TYPE: 1: Local Transmision, 2: Imported Cases Only, 3: Under Investigation, 4: Interrupted Transmission 5: Sporadic Cases, 6: Clusters of Cases, 7: No Cases")
  e.preventDefault()
}
 
 
function toggleModal(e){
    setIsOpen(!modalIsOpen)
}
  

        return(
            <>
            <ModalProvider>
            <CustomWrapper>

            <DashHeader>
                        <h2>Dashboard</h2>
                      
                    </DashHeader>
                    <GlobalStats>
     <h1>Medical Diagnostics</h1>
     <button onClick={toggleModal}>ADD SYMPTOMS</button>

     <StyledModal>
     <CustomForm onSubmit={(e) => onSubmit1(e)}>
 
 {Test.map(data=>{

     if(!data.min && !data.max){
         //create select dropdown
        return <label>
             {data.text}
            <select name={data.name} value={`${formInputs}.${data.name}`} onChange={handleChange}>
            {data.choices.map(choice=>{
              return   <option name={data.name} value={choice.value}>{choice.text}</option>
            })}

            </select>
         </label>
     }
 })}



 </CustomForm>

 </StyledModal>

            </GlobalStats>
            </CustomWrapper>
            </ModalProvider>
            </>
        )

        };

const MedicalDiagnostics= withRouter(MedicalDiagnostics1);
export default MedicalDiagnostics;



const StyledModal = Modal.styled`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
`;


const CustomWrapper = styled.div`
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
    font-family: "Roboto";

}
`;

//----divide map & form into 2 elements
const CustomForm = styled.form`
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
border: 1px solid blue;
background: blue;
 
font-family: "Roboto";
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
 
font-family: "Roboto";
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

const ThirtyDayWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
margin-top: 30px;
width: 100%
font-family: "Roboto";
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
 
font-family: "Roboto";
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

