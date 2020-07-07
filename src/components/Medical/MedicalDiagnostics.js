import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../Navigation/index";
import SymptomOutput from "./SymptomsOutput"
import Test from "./TestOuput"

//input components
import InputRange from "./InputRange"


//import DashNav 
import DashNav from "../DashNav";

//import libraries
import axios from "axios";
import Modal, { ModalProvider } from 'styled-react-modal'


const MedicalDiagnostics1 = props => {


    // console.log("SYMPTOMSOUTPUT:", SymptomOutput)



    const [axiosParam, setAxiosParam] = useState(() => {
   
        //retursn object of TEST names= ""
        //for form
        return mapDataKeys(Test)
    });


    const [optionsList, setOptionsList] = useState(()=>{
        return mapDataKeys(Test)
    })

    
    function mapDataKeys(dataArr) {
        let copyData = {}
        dataArr.map(data => {
            copyData[data.name] = null
        })
        return copyData
    }


    // console.log("AXIOSPARAMS", axiosParam)
    // console.log("OPTIONSLIST", optionsList)

    const [modalIsOpen, setIsOpen] = useState(false)

    const [symptomChoosen, setSymptom] = useState(null)

    const [rangeText, setRangeText] = useState(0)

    const [sessId, setSessId] = useState({
        
        "sessId1": null})



    function onSubmit1(e) {

        setSymptom(e.target.name)

    }

    const symptomMap = {}

    Test.map((data, index) => {
        symptomMap[data.text] = index
    })

    // console.log("SYMP MAP", symptomMap)

    //----------------------------
    const symptomMapName = {}

    Test.map((data, index) => {
        symptomMapName[data.name] = index
    })

 

    const OptionsMap = {}

    Test.map((data, index) => {

        if (data.choices) { OptionsMap[data.name] = data.choices }
    })


    function onSubmitOption(e) {
   
        //convert text to name here in onsubmit?


        // console.log("ON SUBMIT OPTION CALLED: E.TARGET.VAL:", e.target.val, e.target.name)

        Object.keys(axiosParam).map(data1 => {
            var dataName = data1
            if (axiosParam[data1] !== null) {

             

     
                //   create object here to turn inxo axiosParam object? 
                //dataName needs be in []
               setOptionsList(prevState=> ({...prevState, [dataName]: axiosParam[data1]}) )
               
           
            }

         
        })

     setSymptom(null)
      
        e.preventDefault()

    }


  const analyzeSubmit=(e) =>{
     e.preventDefault()
        console.log("AXIOSPARAM OBJ:", axiosParam)

  return axios({
            "method":"GET",
            "url": "http://api.endlessmedical.com/v1/dx/InitSession",

        })
        .then(res=>{
            console.log("RES AFTER SESS INIT:", res)
            let ID= res.data.SessionID
            console.log("RES AFTER SESS INIT:", ID)
            localStorage.setItem('sessId', ID)
            setSessId({...sessId, sessId1:ID})
            console.log("STATE AFTER SESS INIT:", sessId)

         return axios({
                "method":"POST",
                "url": "http://api.endlessmedical.com/v1/dx/AcceptTermsOfUse",
                "params":{
                    "SessionID": ID,
                    "passphrase": "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com"
                }
            })

        })
        .then(res=>{
            console.log("RES AFTER ACCEPT TERMS:", res)
           let ID= res.config.params.SessionID
            console.log(res.config.params.SessionID)
            console.log("axiosParam:", axiosParam)
         
           
          
          function newObj1(params ) { 
        
            var params = new URLSearchParams()
            params.append("SessionID", res.config.params.SessionID)
            console.log("My params", params.get("SessionID"))            
            for(const data in axiosParam){
                console.log("DATA:", data, "VAL:", axiosParam[data])
                if(axiosParam[data] !==null){
                    console.log("DATA NOT EMPTY:", data, "VAL:", axiosParam[data])
                     params.append("name", data)
                     params.append("value", axiosParam[data])
                }
                 
            }
            
        return params 
        }

       

          let myParams=  newObj1( )

        //   myParams.append("SessionID",res.config.params.SessionID )
        //   console.log("My params", myParams.get("Age"))
 
            return axios({
                "method":"POST",
                "url": "http://api.endlessmedical.com/v1/dx/UpdateFeature",
                "params": myParams
                 
            })

            
             
        })
        .then(res =>{
          
            let ID =res.config.params.get("SessionID")
            console.log("RES AFTER SYMPTOM UPDATE", res)
             
            return axios({
                "method":"GET",
                "url": "http://api.endlessmedical.com/v1/dx/Analyze",
                "params": {
                    "SessionID": ID
                }
                 
            })
        }
        )
        .catch(err=>{
            console.log("ERR:", err)
        })

    
    }
    
    // console.log("OPTIONS MAP", OptionsMap)
 

    function handleChangeOption(e) {
        let val = e.target.value;
        const name = e.target.name;
        //only convert if not a number!
        setRangeText(val)

        // console.log("INSIDE HANDLECHANGE OPTION VAL:", val, name)

        if (name in OptionsMap) {
            OptionsMap[name].map(data => {
                if (data.text === val) {
                    val = data.value
                    return val
                }
            })


        }


        setAxiosParam({
            ...axiosParam,
            [e.target.name]: val
        })

        // console.log("AXIOSPARAM.NAME",  "AXIOSPARAM OBJ:", axiosParam)
    }





    function handleChange(e) {
        const val = e.target.value;
 
        // console.log("IN HANDLECHANGE2", e.target.value)
    
        setSymptom(val)


    
    }







    function toggleModal(e) {
        setIsOpen(!modalIsOpen)
        //clearn symptom state on form
        setSymptom(null)


    }


    return (
        <>

            <CustomWrapper>

                <DashHeader>
                    <h2>Dashboard</h2>

                </DashHeader>
                <GlobalStats>
                    <h1>Medical Diagnostics</h1>
                    <button onClick={toggleModal}>ADD SYMPTOMS</button>
                    <button onClick={(e)=>analyzeSubmit(e)}>ANALYZE </button>
                    {/* //list should be about 45% & stay to left of modal */}
                    <SymptomListWrapper>

                 

                        { 
                        
                        Object.keys(optionsList).map(data => { 
                    
                            // console.log("ENTIRE OBJECT:",  OptionsMap["Chills"][1])
                           
                            if ( optionsList[data] !== null) {
                                // console.log("INSIDE SYMPTOM WRAPPER LIST OPTIONSLIST  DATA NOT NULL:",  data, optionsList[data])

                                return <><h6>{Test[symptomMapName[data]].category}</h6>
                                    <p>{Test[symptomMapName[data]].text} {"choices" in Test[symptomMapName[data]]? OptionsMap[data][axiosParam[data]-1].text: axiosParam[data] }</p>
                                </>
                            }
                        })
                        }



                    </SymptomListWrapper>
                    <StyledModal
                        isOpen={modalIsOpen}
                    >

                        <h2>ADD SYMPTOMS</h2>
                        <button onClick={toggleModal}>Close</button>

                        {symptomChoosen === null ?

                            (<SymptomForm onSubmit={(e) => onSubmit1(e)} >




                                <input
                                    onChange={handleChange}
                                    placeholder="select symptom"
                                    list="symptlist"


                                />
                                <datalist id="symptlist">
                                    {Test.map((data, key) => {
                                        return <option key={key} value={data.text} name={data.name} />
                                    })}

                                </datalist>
                            </SymptomForm>) :
                            (<>
                                {/* {console.log("CHECK SYMPTOM STATE:", symptomChoosen)} */}

                                {/* WORK ON SYMPTOM OPTIONS FOR DATALIST 
-CLEARING AFTER CLOSE/SUBMIT SYMPTOM */}


                                <h1>SYMPTOM OPTIONS FORM</h1>
                                {!Test[symptomMap[symptomChoosen]] ? <h1>Symptom Choosen still loading...</h1>

                                    : ("choices" in Test[symptomMap[symptomChoosen]] ? <>

                    <SymptomOptionsForm onSubmit={(e) => onSubmitOption(e)}>

                                        <h2>CHOOSE SYMPTOM OPTIONS FOR {Test[symptomMap[symptomChoosen]].name} </h2>

                                        <input  onChange={(e)=>handleChangeOption(e)}
                                            placeholder="select options"
                                            name={Test[symptomMap[symptomChoosen]].name} list="options" />

                                        <datalist id="options">{Test[symptomMap[symptomChoosen]].choices.map((data, key) => {
                                            return <option value={data.text} name={Test[symptomMap[symptomChoosen]].name} key={key}  onChange={(e)=>handleChangeOption(e)}/>
                                        })} </datalist> <button onSubmit={(e) => onSubmitOption(e)}>Add Symptom</button>
                                        </SymptomOptionsForm>
                                        </> : <>  
                                        <SymptomOptionsForm onSubmit={(e) => onSubmitOption(e)}>
                                         <h2>CHOOSE SYMPTOM OPTIONS FOR {Test[symptomMap[symptomChoosen]].name} </h2> <input onChange={(e)=>handleChangeOption(e)}  type="range"
                                            name={Test[symptomMap[symptomChoosen]].name} min={Test[symptomMap[symptomChoosen]].min} max={Test[symptomMap[symptomChoosen]].max} />
                                            <input  id="textInput"  name={Test[symptomMap[symptomChoosen]].name} type="text" value={rangeText} /> <button onSubmit={(e) => onSubmitOption(e)}>Add Symptom</button>
                                       
                                            </SymptomOptionsForm>
                                        </>)}

                            </>)

                        }




                    </StyledModal>

                </GlobalStats>
            </CustomWrapper>

        </>
    )

};

const MedicalDiagnostics = withRouter(MedicalDiagnostics1);
export default MedicalDiagnostics;

const SymptomForm = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center; 
`;

const SymptomOptionsForm = styled(SymptomForm)`
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

const SymptomListWrapper = styled.div`
width: 40%;
display: flex;
flex-direction: column; 
`;

const SymptomList = styled.div`
width: 100%;
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