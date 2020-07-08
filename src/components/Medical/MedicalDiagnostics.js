import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../Navigation/index";
import SymptomOutput from "./SymptomsOutput"
import Test from "./TestOuput"
import Symp from "./SymptomsOutput"

//input components
import InputRange from "./InputRange"


//import DashNav 
import DashNav from "../DashNav";

//import libraries
import axios from "axios";
import Modal, { ModalProvider } from 'styled-react-modal'
import { updateLocale } from "moment";


const MedicalDiagnostics1 = props => {


    // console.log("SYMPTOMSOUTPUT:", SymptomOutput)



    const [axiosParam, setAxiosParam] = useState(() => {
   
        //retursn object of Symp names= ""
        //for form
        return mapDataKeys(Symp)
    });


    const [optionsList, setOptionsList] = useState(()=>{
        return mapDataKeys(Symp)
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
    
    const [termsModal, setTermsModal] = useState(false)

    const [termsAccept, setTermsAccept] = useState(false)
    const [symptomChoosen, setSymptom] = useState(null)

    const [rangeText, setRangeText] = useState(0)

    const [patientRec, setPatientRec] = useState({
        "modal":false,
        "data": []
    })
    const [physcianRec, setPhyscianRec] = useState({
        "modal":false,
        "data": []
    })
    const [testRec, setTestRec] = useState({
        "modal":false,
        "data": [], 
        "fetch1": false
    })

    


    function AcceptTerms(e){
        e.preventDefault()
        setTermsAccept(true)
        toggleTermsModal(e)
    }




    function onSubmit1(e) {

        setSymptom(e.target.name)

    }

    const symptomMap = {}

    Symp.map((data, index) => {
        symptomMap[data.text] = index
    })

    // console.log("SYMP MAP", symptomMap)

    //----------------------------
    const symptomMapName = {}

    Symp.map((data, index) => {
        symptomMapName[data.name] = index
    })

 

    const OptionsMap = {}

    Symp.map((data, index) => {

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

    function InitiateNewSession(e){
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
            // localStorage.setItem('sessId', ID)
         

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
            console.log("RES AFTER ACCEPT TERMS", res)
            let ID= res.config.params.SessionID
          localStorage.setItem("SessionID", ID)
        })
        .catch(err=>
            console.log("ERR", err)
        )

    }


  


    const RecPatientFeatures =(e)=>{
        e.preventDefault()
        updateFeature(e)

        let ID= localStorage.getItem("SessionID")   
        console.log('ID CHECK', ID)


        return axios({
            "method": "GET",
            "url": "http://api.endlessmedical.com/v1/dx/GetSuggestedFeatures_PatientProvided", 
            "params":{
                "sessionID":ID
            }
        })
        .then(res=>{

            console.log("GET PATIENT REC FEATURES", res)
            // if(res.data.SuggestedFeatures.length > 0){
            //     setPatientRec({...patientRec, [data]:res.data.SuggestedFeatures})
            //     togglePatientModal(e)
            // }

        })
        .catch(err=>{
            console.log("ERR", err)
        })

    }

    const RecPhyscianFeatures=(e)=>{
        e.preventDefault()

        let ID= localStorage.getItem("SessionID")   
        console.log('ID CHECK', ID)

        return axios({
            "method": "GET",
            "url": "http://api.endlessmedical.com/v1/dx/GetSuggestedFeatures_PhysicianProvided", 
            "params":{
                "sessionID":ID
            }
        })
        .then(res=>{

            console.log("GET DR REC FEATURES", res)
        })
        .catch(err=>{
            console.log("ERR", err)
        })


    }

    const handleTestClick= (e)=>{
        e.preventDefault()
      
        setTestRec(prevState => ({
            ...prevState,
            fetch: true 
         }));
        console.log('HANDLE CLICK TEST', testRec.fetch1)
    }
  
    function toggleTestRecModal(){
 
        setTestRec(!testRec.modal)
        console.log("TEST REC MODAL TOGGLED:", testRec.modal)
    }

 
    
    const SuggestedTests=async()=>{

    
        console.log("SUGG TEST COUNT:")
         
        let ID= localStorage.getItem("SessionID")   
  
        var res= await axios({
             "method": "GET",
            "url": "http://api.endlessmedical.com/v1/dx/GetSuggestedTests", 
            "params":{
                "sessionID":ID
            }
        })
        console.log("GET SUGGESTED TESTS", res)

        let name = "data"
               
            if(res.data.Tests.length > 0){
               setTestRec(prevState=> ({
                   ...prevState, [name]: res.data.Tests

               }))
               
            //    toggleTestRecModal()
                
            }

       
      

          
        // .then(res=>{

        //     console.log("GET SUGGESTED TESTS", res)
        //     if(res.data.Tests.length > 0){
        //        setTestRec({...testRec, data:res.data.Tests})
               
        //         toggleTestRecModal(e)
        //     }

        //     console.log('TESTREC:', testRec)
        // })
        // .catch(err=>{
        //     console.log("ERR", err)
        // })

    }

    useEffect(() => {
        (async () => {
          await SuggestedTests();
        })();
      }, [testRec.fetch1]);

    function updateFeature(e){
        e.preventDefault()
        // console.log("AXIOSPARAM OBJ:", axiosParam)
 
          function newObj1(params ) { 
        
            var params = new URLSearchParams()
            console.log("localStorage ID",localStorage.getItem("SessionID") )
            params.append("SessionID", localStorage.getItem("SessionID"))
            console.log("My params", params.get("SessionID"))            
            for(const data in axiosParam){
                // console.log("DATA:", data, "VAL:", axiosParam[data])
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
            .then(res=>{
                console.log("UPDATE FEAT OK", res.data)
            })
            .catch(err=>
                console.log("ERR", err))

    }


  const analyzeSubmit=(e) =>{
     e.preventDefault()
updateFeature(e)
 
          
            let ID =localStorage.getItem("SessionID")
            console.log("LOCAL STRG ID", ID)
             
            return axios({
                "method":"GET",
                "url": "http://api.endlessmedical.com/v1/dx/Analyze",
                "params": {
                    "SessionID": ID
                }
                 
            })
        .then(res=>{
            console.log("ANALYZE OK", res.data)
        })
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



    
function toggleTermsModal(){
    
    setTermsModal(!termsModal)
}


function togglePatientModal(){
    
    setPatientRec(!patientRec.modal)
}
function togglePhyModal(){
    
    setPhyscianRec(!physcianRec.modal)
}


    function toggleModal(e) {
        setIsOpen(!modalIsOpen)
        //clearn symptom state on form
        setSymptom(null)


    }

    console.log('TESTREC AT RETURN:', testRec.data, testRec.modal)

    return (
        <>

            <CustomWrapper>

                <DashHeader>
                    <h2>Dashboard</h2>

                </DashHeader>
                <GlobalStats>

                <h1>Medical Diagnostics</h1>
                <button onClick={(e)=>toggleTermsModal(e)}>TERMS OF USE</button>
           
                    {termsAccept === false? <h6>PLEASE ACCEPT TERMS TO USE SYMPTOM CHECKER</h6>:
                    <SessionFunctionality>
                     <button onClick={(e)=>InitiateNewSession(e)}>INITIATE NEW SESSION</button>
                    <button onClick={toggleModal}>ADD SYMPTOMS</button>
                  
                    <button onClick={(e)=>RecPatientFeatures(e)}>GET RECOMMENDATIONS FOR ADDITIONAL SYPTOM STATS (PATIENT PROVIDED)</button>
                    <button onClick={(e)=>RecPhyscianFeatures(e)}>GET RECOMMENDATIONS FOR ADDITIONAL SYPTOM STATS (PHYSCIAN PROVIDED)</button>
                    <button onClick={(e)=>handleTestClick(e)}>GET SUGGESTED TESTS</button>
                    <button onClick={(e)=>analyzeSubmit(e)}>ANALYZE </button>
                    </SessionFunctionality>
                    
                    }

                    {/* //list should be about 45% & stay to left of modal */}

                    <StyledTermsModal
                    isOpen={termsModal}>
                     <h1>Accept The Terms</h1>
                     <h6>I have read, understood and I accept and agree to comply with the <a style={{display: "table-cell"}} href = "https://endlessmedical.com/TermsOfUse/" target = "_blank" 
rel = "noopener noreferrer">Terms of Use.</a> </h6>
                   
             
                   <button onClick={(e)=>AcceptTerms(e)}>Accept</button>

                          {/* should close terms modal keep state false for terms*/}
                   <button onClick={(e)=>toggleTermsModal(e)}>Decline</button>
                   
                    </StyledTermsModal>

                    <StyledRecsModal isOpen={testRec.data.length>0?true:false}>
               
                 {
                     testRec.data && testRec.data.length > 0? ( <>
                       <h6> Recommended Tests to increase diagnosis accuracies:
            (Recommended Tests with percentages less than 50% may not be accurate recommendation)
                       </h6>
                       
                       {testRec.data.map(data=>{
                           return <><p>{Object.keys(data)[0]}</p>
                           </>
                       })}
                     </>): <h5>No Suggested Tests Available</h5>
                 }

                   
                    </StyledRecsModal>

                    <SymptomListWrapper>

                 

                        { 
                        
                        Object.keys(optionsList).map(data => { 
                    
                            // console.log("ENTIRE OBJECT:",  OptionsMap["Chills"][1])
                           
                            if ( optionsList[data] !== null) {
                                // console.log("INSIDE SYMPTOM WRAPPER LIST OPTIONSLIST  DATA NOT NULL:",  data, optionsList[data])

                                return <><h6>{Symp[symptomMapName[data]].category}</h6>
                                    <p>{Symp[symptomMapName[data]].text} {"choices" in Symp[symptomMapName[data]]? OptionsMap[data][axiosParam[data]-1].text: axiosParam[data] }</p>
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
                                    {Symp.map((data, key) => {
                                        return <option key={key} value={data.text} name={data.name} />
                                    })}

                                </datalist>
                            </SymptomForm>) :
                            (<>
                                {/* {console.log("CHECK SYMPTOM STATE:", symptomChoosen)} */}

                                {/* WORK ON SYMPTOM OPTIONS FOR DATALIST 
-CLEARING AFTER CLOSE/SUBMIT SYMPTOM */}


                                <h1>SYMPTOM OPTIONS FORM</h1>
                                {!Symp[symptomMap[symptomChoosen]] ? <h1>Symptom Choosen still loading...</h1>

                                    : ("choices" in Symp[symptomMap[symptomChoosen]] ? <>

                    <SymptomOptionsForm onSubmit={(e) => onSubmitOption(e)}>

                                        <h2>CHOOSE SYMPTOM OPTIONS FOR {Symp[symptomMap[symptomChoosen]].name} </h2>

                                        <input  onChange={(e)=>handleChangeOption(e)}
                                            placeholder="select options"
                                            name={Symp[symptomMap[symptomChoosen]].name} list="options" />

                                        <datalist id="options">{Symp[symptomMap[symptomChoosen]].choices.map((data, key) => {
                                            return <option value={data.text} name={Symp[symptomMap[symptomChoosen]].name} key={key}  onChange={(e)=>handleChangeOption(e)}/>
                                        })} </datalist> <button onSubmit={(e) => onSubmitOption(e)}>Add Symptom</button>
                                        </SymptomOptionsForm>
                                        </> : <>  
                                        <SymptomOptionsForm onSubmit={(e) => onSubmitOption(e)}>
                                         <h2>CHOOSE SYMPTOM OPTIONS FOR {Symp[symptomMap[symptomChoosen]].name} </h2> <input onChange={(e)=>handleChangeOption(e)}  type="range"
                                            name={Symp[symptomMap[symptomChoosen]].name} min={Symp[symptomMap[symptomChoosen]].min} max={Symp[symptomMap[symptomChoosen]].max} />
                                            <input  id="textInput"  name={Symp[symptomMap[symptomChoosen]].name} type="text" value={rangeText!==0?rangeText:Symp[symptomMap[symptomChoosen]].default} /> <button onSubmit={(e) => onSubmitOption(e)}>Add Symptom</button>
                                       
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

const SessionFunctionality = styled.div`
display: flex;
flex-direction: column; 
`;

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

const StyledTermsModal = Modal.styled`
width: 70%;
height: 35%;
display: flex;
flex-direction: column;
background-color: white;
opacity: ${props => props.opacity};
transition: opacity ease 500ms;

`;

const StyledRecsModal = Modal.styled`
width: 70%;
height: 80%;
display: flex;
flex-direction: column;
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