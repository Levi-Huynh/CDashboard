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
         
    })

    const [analysis, setAnalysis] = useState({
        "display": false,
        "data":[]
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


        console.log("ON SUBMIT OPTION CALLED: E.TARGET.VAL:", e.target.val, e.target.name)

        Object.keys(axiosParam).map(data1 => {
            var dataName = data1
            if (axiosParam[data1] !== null) {

             

     
                //   create object here to turn inxo axiosParam object? 
                //dataName needs be in []
               setOptionsList(prevState=> ({...prevState, [dataName]: axiosParam[data1]}) )
               console.log("updated optionslist:", optionsList.dataName)
           
            }

         
        })

     setSymptom(null)
      
        e.preventDefault()

    }


    //@@@--------------------------INITIATE NEW SESSION

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


  



  
  

 
       //@@@---------------------- TEST RECOMMENDATIONS FETCH
    
    const SuggestedTests=async()=>{
         
        let ID= localStorage.getItem("SessionID")   
  
        var res= await axios({
             "method": "GET",
            "url": "http://api.endlessmedical.com/v1/dx/GetSuggestedTests", 
            "params":{
                "sessionID":ID
            }
        })
        console.log("SUGGESTED TESTS INVOKED. RES:", res)

        let name = "data"
               
            if(res.data.Tests.length > 0){
               setTestRec(prevState=> ({
                   ...prevState, [name]: res.data.Tests

               }))
               
         
                
            }


    }

    useEffect(() => {
        (async () => {
          await SuggestedTests();
        })();
      }, [testRec.modal]);



         //@@@---------------------- PATIENT RECOMMENDATION FETCH
      const PatientFeatures=async()=>{
         
        let ID= localStorage.getItem("SessionID")   
  
        var res= await axios({
             "method": "GET",
             "url": "http://api.endlessmedical.com/v1/dx/GetSuggestedFeatures_PatientProvided", 
            "params":{
                "sessionID":ID
            }
        })
        console.log("SUGGESTED TESTS INVOKED. RES:", res)

        let name = "data"
               
            if(res.data.SuggestedFeatures.length > 0){
               setTestRec(prevState=> ({
                   ...prevState, [name]: res.data.SuggestedFeatures

               }))
               
         
                
            }


    }

    useEffect(() => {
        (async () => {
          await PatientFeatures();
        })();
      }, [patientRec.modal]);


    //@@@---------------------- DR RECOMMENDATION FETCH

      const DoctorFeatures=async()=>{
         
        let ID= localStorage.getItem("SessionID")   
  
        var res= await axios({
             "method": "GET",
             "url": "http://api.endlessmedical.com/v1/dx/GetSuggestedFeatures_PhysicianProvided", 
            "params":{
                "sessionID":ID
            }
        })
        console.log("SUGGESTED TESTS INVOKED. RES:", res)

        let name = "data"
               
            if(res.data.SuggestedFeatures.length > 0){
               setTestRec(prevState=> ({
                   ...prevState, [name]: res.data.SuggestedFeatures

               }))
               
         
                
            }


    }

    useEffect(() => {
        (async () => {
          await DoctorFeatures();
        })();
      }, [physcianRec.modal]);


      //@@@---------------------------------UPDATE FEATURE 
    function updateFeature(){
        
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



        //@@@---------------------------------SUBMIT ANALYZE AXIOS REQUEST 
  const analyzeSubmit=async() =>{
     
updateFeature()
 
          
            let ID =localStorage.getItem("SessionID")
            // console.log("LOCAL STRG ID", ID)
             
            var res=await axios({
                "method":"GET",
                "url": "http://api.endlessmedical.com/v1/dx/Analyze",
                "params": {
                    "SessionID": ID
                }
                 
            })

            console.log("ANALYZE INVOKED. RES.DATA:", res.data)
            let data="data"
  
            if(res.data.Diseases.length>0){
                setAnalysis(prevState=>({...prevState, [data]: res.data.Diseases}))
            }
    }
    
    useEffect(() => {
        (async () => {
          await analyzeSubmit();
        })();
      }, [analysis.display]);
 
 
        //@@@---------------------------------CHANGE HANDLER FOR SYMPTOM OPTION VALUES 

    function handleChangeOption(e) {
        let val = e.target.value;
        const name = e.target.name;
        //only convert if not a number!
        //ONLY SET RANGE TEXT IF NUM. VALIDATE THAT NUM VAL A NUMB STRING OR REAL NUM
        console.log("TYPE CHECK FOR VALS THAT ARE NUMS:", typeof(val), val)
        setRangeText(val)

        console.log("INSIDE HANDLECHANGE OPTION VAL:", val, name)

        if (name in OptionsMap) {
            OptionsMap[name].map(data => {
                if (data.text === val) {
                    val = data.value
                    console.log("VAL in optionsmap loop:", val)
                }
            })


        }
        console.log("VAL outside optionsMap loop, before setAxiosParam:", val)

        setAxiosParam({
            ...axiosParam,
            [e.target.name]: val
        })
    
        //CLEAR SETRANGE???
        
    }


        //@@@---------------------------------CONVERT CHOICES VALUES BACK TO TEXT FOR LIST UI RENDER
    function convertValToText(name, val){
  
        let text=""
        OptionsMap[name].map(data=>{
            if(data.value ===val){

                 text= data.text 
               
                
            }
        })
        return text
    }


    //@@@---------------------------------HANDLE CHANGE TO CHOOSE SYMPTOM

    function handleChange(e) {
        const val = e.target.value;
        setSymptom(val)
    }


        //@@@---------------------------------MODAL TOGGLES FOR TERMS & SYMPTOM CHOICES

    
function toggleTermsModal(){
    
    setTermsModal(!termsModal)
}

    function toggleModal(e) {
        setIsOpen(!modalIsOpen)
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
                <button onClick={(e)=>toggleTermsModal(e)}>TERMS OF USE</button>
           
                    {termsAccept === false? <h6>PLEASE ACCEPT TERMS TO USE SYMPTOM CHECKER</h6>:
                    <SessionFunctionality>
                     <button onClick={(e)=>InitiateNewSession(e)}>INITIATE NEW SESSION</button>
                    <button onClick={toggleModal}>ADD SYMPTOMS</button>
                  
                    <button onClick={(e)=>setPatientRec(prevState =>({...prevState, modal:!prevState.modal}))}>GET RECOMMENDATIONS FOR ADDITIONAL SYMPTOM QUESTIONS (PATIENT PROVIDED)</button>
                    <button onClick={(e)=>setPhyscianRec(prevState =>({...prevState, modal:!prevState.modal}))}>GET RECOMMENDATIONS FOR ADDITIONAL SYMPTOM QUESTIONS (PHYSCIAN PROVIDED)</button>
                    <button onClick={(e)=>setTestRec(prevState =>({...prevState, modal:!prevState.modal}))}>SUGGESTED TESTS BASED ON SYMPTOMS</button>
                    <button onClick={(e)=>setAnalysis(prevState =>({...prevState, display:!prevState.display}))}>ANALYZE SYMPTOMS</button>
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

               

                    <StyledRecsModal isOpen={testRec.modal}>
                             
                    {/* RECOMMENDED TESTS  MODAL */}
                        <button onClick={(e)=>setTestRec(prevState =>({...prevState, modal:!prevState.modal}))}>Close</button>
               
                 {
                      testRec.data && testRec.data.length > 0? ( <>
                       <h6> Recommended Tests to increase diagnosis accuracies:
            (Recommended Tests with percentages less than 50% may not be likely recommended)
                       </h6>
                       
                       {testRec.data.map(data=>{
                           return <><p>{Object.keys(data)[0]}:</p> <p>{Object.values(data)[0]}%</p>
                           </>
                       })}
                     </>): <h5>No Suggested Tests Available</h5>
                 }

                   
                    </StyledRecsModal>

                    <StyledRecsModal isOpen={patientRec.modal}>
                             
                             {/* PATIENT TESTS  MODAL */}
                                 <button onClick={(e)=>setPatientRec(prevState =>({...prevState, modal:!prevState.modal}))}>Close</button>
                        
                          {
                               patientRec.data && patientRec.data.length > 0? ( <>
                                <h6> Recommended Symptom questions (patient provided) to increase diagnosis accuracies:
                     (Recommended Tests with percentages less than 50% likely not recommended)
                                </h6>
                                
                                {patientRec.data.map(data=>{
                                    return <><p>{Object.keys(data)[0]}:</p> <p>{Object.values(data)[0]}%</p>
                                    </>
                                })}
                              </>): <h5>No Recommended Symptom Questions Available</h5>
                          }
         
                            
                             </StyledRecsModal>


                             <StyledRecsModal isOpen={physcianRec.modal}>
                             
                             {/* DR TESTS  MODAL */}
                                 <button onClick={(e)=>setPhyscianRec(prevState =>({...prevState, modal:!prevState.modal}))}>Close</button>
                        
                          {
                               physcianRec.data && physcianRec.data.length > 0? ( <>
                                <h6> Recommended Symptom questions (physcian provided) to increase diagnosis accuracies:
                     (Recommended Tests with percentages less than 50% may likely not recommended)
                                </h6>
                                
                                { physcianRec.data.map(data=>{
                                    return <><p>{Object.keys(data)[0]}:</p> <p>{Object.values(data)[0]}%</p>
                                    </>
                                })}
                              </>): <h5>No Recommended Symptom Questions Available</h5>
                          }
         
                            
                             </StyledRecsModal>


<SympAndResults>
                    <SymptomListWrapper>
{/* 
                    SET MAP TO SHOW THIS HEADER INSIDE OPTIONSLIST MAP? */}
                    <h3>Selected Symptoms</h3>

                        { 

                        // RENDER LIST OF USERS'S SYMTOM CHOCIES
                        
                        Object.keys(optionsList).map(data => { 
                    
                            // console.log("ENTIRE OBJECT:",  OptionsMap["Chills"][1])
                           
                            if ( optionsList[data] !== null) {
                                // console.log("INSIDE SYMPTOM WRAPPER LIST OPTIONSLIST  DATA NOT NULL:",  data, optionsList[data])
                                // console.log("symptomMapName[data] (index for Symp.text):", symptomMapName[data])
                                return <><p><span>Category: {Symp[symptomMapName[data]].category}</span></p>
                                    <p>{Symp[symptomMapName[data]].text} {"choices" in Symp[symptomMapName[data]]? convertValToText(data, axiosParam[data]): axiosParam[data] }</p>
                                </>
                            }
                        })
                        }



                    </SymptomListWrapper>


                    {analysis.display && analysis.data.length>0? <SymptomListWrapper>
                        <h3>Possible Diagnosis</h3>
                        
                        {analysis.data.map(data1=>{
                            return <><p>{Object.keys(data1)[0]}: {Object.values(data1)[0]}%</p></>
                        })}


                    </SymptomListWrapper>:<SymptomListWrapper><h3>Possible Diagnosis</h3></SymptomListWrapper>}

                    </SympAndResults>



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

                                       

                                        <select  onChange={(e)=>handleChangeOption(e)}  name={Symp[symptomMap[symptomChoosen]].name} value={axiosParam.symptomChoosen}>
                                        <option value="" selected>select options</option>
                                            {Symp[symptomMap[symptomChoosen]].choices.map((data, key) => {
                                             
                                            return <option value={data.text} name={Symp[symptomMap[symptomChoosen]].name} key={key}>{data.text}</option>
                                        })} </select> <button onSubmit={(e) => onSubmitOption(e)}>Add Symptom</button>
                                        </SymptomOptionsForm>
                                        </> : <>  
                                        <SymptomOptionsForm onSubmit={(e) => onSubmitOption(e)}>
                                         <h2>CHOOSE SYMPTOM OPTIONS FOR {Symp[symptomMap[symptomChoosen]].name} </h2> <input onChange={(e)=>handleChangeOption(e)}  type="range"
                                            name={Symp[symptomMap[symptomChoosen]].name} min={Symp[symptomMap[symptomChoosen]].min} max={Symp[symptomMap[symptomChoosen]].max} />
                                            <input  id="textInput"  name={Symp[symptomMap[symptomChoosen]].name} type="number" onChange={(e)=>handleChangeOption(e)} value={rangeText!==0?rangeText:Symp[symptomMap[symptomChoosen]].default} /> <button onSubmit={(e) => onSubmitOption(e)}>Add Symptom</button>
                                       
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
height: 100%;
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

const SympAndResults = styled.div` 
width: 100%;
display: flex;
flex-direction: row; 
justify-content: space-between;
`;

const SymptomListWrapper = styled.div`
width: 40%;
display: flex;
flex-direction: column; 
text-align: left
`;

