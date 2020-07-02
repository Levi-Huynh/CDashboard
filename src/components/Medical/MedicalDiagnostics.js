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
import Modal, { ModalProvider } from 'styled-react-modal'


const MedicalDiagnostics1 = props=>{
 

console.log("SYMPTOMSOUTPUT:", SymptomOutput )

 

    const [axiosParam, setAxiosParam] = useState(()=>{
        //SETS ALL SYMPTOM NAMES TO INTIAL = 0 
        return mapDataKeys(Test)
    });

    const [modalIsOpen, setIsOpen] = useState(false)

    const [symptomChoosen, setSymptom] =useState(null)

     

    //form state should hold symptom name & value


    function onSubmit1(e){
        setSymptom(e.target.name)
    }
    
    const symptomMap= {}

    Test.map((data, index)=>{
        symptomMap[data.name] = index 
    })

    console.log("SYMPTMAP", symptomMap)

    function mapDataKeys(dataArr){
        let copyData= {}
        dataArr.map(data=>{
            copyData[data.name] =""
        })
        return copyData 
    }

    function handleChange(e){
        const val= e.target.value;
      setAxiosParam({
        ...axiosParam,
        [e.target.name]:val 
       })
    }

 



 
 
 
 
function toggleModal(e){
    setIsOpen(!modalIsOpen)
}
  

        return(
            <>
            
            <CustomWrapper>

            <DashHeader>
                        <h2>Dashboard</h2>
                      
                    </DashHeader>
                    <GlobalStats>
     <h1>Medical Diagnostics</h1>
     <button onClick={toggleModal}>ADD SYMPTOMS</button>

     <StyledModal
      isOpen={modalIsOpen}
     >
     
     <h2>ADD SYMPTOMS</h2>
     <button onClick={toggleModal}>Close</button>

     {symptomChoosen === null?

<SymptomForm onSubmit={(e) => onSubmit1(e)} > 
{/* submit here should rerender options for symptom */}

     <input
    
    placeholder="select symptom"
     list="symptlist"

   
     
     />
     <datalist id="symptlist">
       {Test.map((data, key)=>{
           return <option key={key} value={data.text} name={data.name}  />
       })}

     </datalist>
     </SymptomForm>: <h2>options</h2>
}
     {/* //addsympotom clears symptom state && adds symptom to AXIOS PARAMETER OBJECT W/KEY VALUES,. X ABOVE enter symptom x's out of sympt clearns symptom state, exits modal*/}
{/*      
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



 </CustomForm>  */}
   

 </StyledModal>

            </GlobalStats>
            </CustomWrapper>
         
            </>
        )

        };

const MedicalDiagnostics= withRouter(MedicalDiagnostics1);
export default MedicalDiagnostics;

const SymptomForm = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center; 
`;

const StyledModal = Modal.styled`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 50%;
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
// justify-content: center;
// text-align: center;
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

