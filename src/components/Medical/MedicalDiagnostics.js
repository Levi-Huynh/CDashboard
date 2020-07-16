import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../Navigation/index";
import SymptomOutput from "./SymptomsOutput"
import Test from "./TestOuput"
import Symp from "./SymptomsOutput"

//assets
import medicalIcon from '../../assets/medCon.png'

//input components
import InputRange from "./InputRange"


//import DashNav 
import DashNav from "../DashNav";

//import libraries
import axios from "axios";
import Modal, { ModalProvider } from 'styled-react-modal'
import { updateLocale } from "moment";


const MedicalDiagnostics1 = props => {


    const [Time, setTime]= useState( new Date().toLocaleTimeString('en-US'))
const [Date1, setDate]=useState( new Date().toDateString())
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

    
    const [displaySymp, setDisplaySymp] = useState(false)


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
            "url": "https://api.endlessmedical.com/v1/dx/InitSession",

        })
        .then(res=>{
            console.log("RES AFTER SESS INIT:", res)
            let ID= res.data.SessionID
            console.log("RES AFTER SESS INIT:", ID)
            // localStorage.setItem('sessId', ID)
         

         return axios({
                "method":"POST",
                "url": "https://api.endlessmedical.com/v1/dx/AcceptTermsOfUse",
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
            "url": "https://api.endlessmedical.com/v1/dx/GetSuggestedTests", 
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
             "url": "https://api.endlessmedical.com/v1/dx/GetSuggestedFeatures_PatientProvided", 
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
             "url": "https://api.endlessmedical.com/v1/dx/GetSuggestedFeatures_PhysicianProvided", 
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
                "url": "https://api.endlessmedical.com/v1/dx/UpdateFeature",
                "params": myParams
                 
            })
            .then(res=>{
                console.log("UPDATE FEAT OK", res.data)
            })
            .catch(err=>
                console.log("ERR", err))

    }

    useEffect(() => {
        (async () => {
          await updateFeature();
        })();
      }, [analysis.display]);
 

        //@@@---------------------------------SUBMIT ANALYZE AXIOS REQUEST 
  const analyzeSubmit=async() =>{
     
updateFeature()
 
          
            let ID =localStorage.getItem("SessionID")
            // console.log("LOCAL STRG ID", ID)
             
            var res=await axios({
                "method":"GET",
                "url": "https://api.endlessmedical.com/v1/dx/Analyze",
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

        setDisplaySymp(true)
    

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
                    <h2>{Date1}</h2>
                </DashHeader>
                <GlobalStats>
                    <Title>
                        <h5><span>Symptoms Checker</span></h5>
                    <h6>{Time}</h6>
                    </Title>

              
                <TermsButton onClick={(e)=>toggleTermsModal(e)}>View Terms of Use <i class="fa fa-user" aria-hidden="true" style={{margin: '0px 0rem 0px 1.5rem'}}></i></TermsButton>
           
                    {termsAccept === false? <h1>Please Accept Terms of Use to Access Symptoms Checker</h1>:
                   <>
                   <SympAndResults1>
                   <SessionFunctionality>

                        <SympAndResults2>
                            <h4>INITIATE BRAND NEW SESSION</h4>
                     <MainButton onClick={(e)=>InitiateNewSession(e)}> <i class="fa fa-mouse-pointer" aria-hidden="true" ></i></MainButton>
                     </SympAndResults2>
                   
                     <SympAndResults2>
                     <h4>ADD SYMPTOMS</h4>
                    <MainButton onClick={toggleModal}><i class="fa fa-mouse-pointer" aria-hidden="true"></i></MainButton>
                    </SympAndResults2>

                    <SympAndResults2>    
                    <h4>SYMPTOM QUESTIONS (PATIENT PROVIDED)</h4>                
                    <MainButton onClick={(e)=>setPatientRec(prevState =>({...prevState, modal:!prevState.modal}))}><i class="fa fa-mouse-pointer" aria-hidden="true"></i></MainButton>
                    </SympAndResults2>
                   
                    </SessionFunctionality>
            


          
                <SessionFunctionality>

                    <SympAndResults1> 
                        <h4> SYMPTOM QUESTIONS (PHYSCIAN PROVIDED)</h4>
                    <MainButton onClick={(e)=>setPhyscianRec(prevState =>({...prevState, modal:!prevState.modal}))}><i class="fa fa-mouse-pointer" aria-hidden="true"></i></MainButton>
                    </SympAndResults1>
                    
                    <SympAndResults1>
                        <h4>SUGGESTED TESTS BASED ON SYMPTOMS</h4>
                    <MainButton onClick={(e)=>setTestRec(prevState =>({...prevState, modal:!prevState.modal}))}><i class="fa fa-mouse-pointer" aria-hidden="true"></i></MainButton>
                    </SympAndResults1>
                    

                    <SympAndResults1> 
                        <h4>ANALYZE SYMPTOMS</h4>
                    <MainButton onClick={(e)=>setAnalysis(prevState =>({...prevState, display:!prevState.display}))}><i class="fa fa-mouse-pointer" aria-hidden="true"></i></MainButton>
       </SympAndResults1>
                   
                    </SessionFunctionality>
                    </SympAndResults1>
                   </> 
                    }

                    {/* //list should be about 45% & stay to left of modal */}

                    <StyledTermsModal
                    isOpen={termsModal}>
                     <h1>Accept The Terms</h1>
                     <h4>I have read, understood and I accept and agree to comply with the <a style={{display: "table-cell"}} href = "https://endlessmedical.com/TermsOfUse/" target = "_blank" 
rel = "noopener noreferrer">Terms of Use.</a> </h4>
                   
             <SympAndResults>
                   <TermsModalButton onClick={(e)=>AcceptTerms(e)}>Accept</TermsModalButton>

                          {/* should close terms modal keep state false for terms*/}
                   <TermsModalButton onClick={(e)=>toggleTermsModal(e)}>Decline</TermsModalButton>

                   </SympAndResults>
                   
                    </StyledTermsModal>

               

                    <SuggestedTestModal isOpen={testRec.modal}>
                             
                    {/* RECOMMENDED TESTS  MODAL */}
                        <MainButton onClick={(e)=>setTestRec(prevState =>({...prevState, modal:!prevState.modal}))}>Close</MainButton>
               
                 {
                      testRec.data && testRec.data.length > 0? ( <>
                       <h4> Recommended Tests to increase diagnosis accuracies:
            (Recommended Tests with percentages less than 50% may likely not be recommended)
                       </h4>
                       
                       {testRec.data.slice(0,5).map(data=>{
                           return <><p>{Object.keys(data)[0]}:</p> <p>{Object.values(data)[0]}%</p>
                           </>
                       })}
                     </>): <h1>No Suggested Tests Available</h1>
                 }

                   
                    </SuggestedTestModal>

                    <StyledRecsModal isOpen={patientRec.modal}>
                             
                             {/* PATIENT TESTS  MODAL */}
                                 <MainButton onClick={(e)=>setPatientRec(prevState =>({...prevState, modal:!prevState.modal}))}>Close</MainButton>
                        
                          {
                               patientRec.data && patientRec.data.length > 0? ( <>
                                <h4> Recommended Symptom questions (patient provided) to increase diagnosis accuracies:
                     (Recommended Tests with percentages less than 50% likely not recommended)
                                </h4>
                                
                                {patientRec.data.map(data=>{
                                    return <><p>{Object.keys(data)[0]}:</p> <p>{Object.values(data)[0]}%</p>
                                    </>
                                })}
                              </>): <h1>No Recommended Symptom Questions Available</h1>
                          }
         
                            
                             </StyledRecsModal>


                             <StyledRecsModal isOpen={physcianRec.modal}>
                             
                             {/* DR TESTS  MODAL */}
                                 <MainButton onClick={(e)=>setPhyscianRec(prevState =>({...prevState, modal:!prevState.modal}))}>Close</MainButton>
                        
                          {
                               physcianRec.data && physcianRec.data.length > 0? ( <>
                                <h4> Recommended Symptom questions (physcian provided) to increase diagnosis accuracies:
                     (Recommended Tests with percentages less than 50% may likely not recommended)
                                </h4>
                                
                                { physcianRec.data.map(data=>{
                                    return <><p>{Object.keys(data)[0]}:</p> <p>{Object.values(data)[0]}%</p>
                                    </>
                                })}
                              </>): <h1>No Recommended Symptom Questions Available</h1>
                          }
         
                            
                             </StyledRecsModal>


<SympAndResults>
                    <SymptomListWrapper>
{/* 
                    SET MAP TO SHOW THIS HEADER INSIDE OPTIONSLIST MAP? */}
                    {displaySymp? <> 
                    
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
                        } </>: <></>

                    }

                    </SymptomListWrapper>


                    {analysis.display && analysis.data.length>0? <SymptomListWrapper>
                        <h3>Possible Diagnosis</h3>
                        
                        {analysis.data.map(data1=>{
                            return <><p>{Object.keys(data1)[0]}: {Object.values(data1)[0]}%</p></>
                        })}


                    </SymptomListWrapper>:<SymptomListWrapper><h3></h3></SymptomListWrapper>}

                    </SympAndResults>



                    <StyledModal
                        isOpen={modalIsOpen}
                    >
                        <SympAndResults>
                        <h2>ADD SYMPTOMS</h2>
                        <MainButton onClick={toggleModal}>Close <i class="fa fa-times" aria-hidden="true" style={{margin:'0px 0rem 0px .7rem'}}></i></MainButton>
                        </SympAndResults>

                        {symptomChoosen === null ?
   (<SymptomForm onSubmit={(e) => onSubmit1(e)} >




   <SymptomInput
       onChange={handleChange}
       placeholder="select symptom"
       list="symptlist"/>

   <datalist id="symptlist">
       {Symp.map((data, key) => {
           return <option key={key} value={data.text} name={data.name} />
       })}

                                </datalist>
   
</SymptomForm>)
                     
                           :
                            (<>
                                {/* {console.log("CHECK SYMPTOM STATE:", symptomChoosen)} */}

                                {/* WORK ON SYMPTOM OPTIONS FOR DATALIST 
-CLEARING AFTER CLOSE/SUBMIT SYMPTOM */}

{/* 
                                <h3>SYMPTOM OPTIONS FORM</h3> */}
                                {!Symp[symptomMap[symptomChoosen]] ? <h1>Symptom Choosen still loading...</h1>

                                    : ("choices" in Symp[symptomMap[symptomChoosen]] ? <>

                    <SymptomOptionsForm onSubmit={(e) => onSubmitOption(e)}>

                                        <h4>CHOOSE SYMPTOM OPTIONS FOR {Symp[symptomMap[symptomChoosen]].name} </h4>

                                       

                                        <SympSelect  onChange={(e)=>handleChangeOption(e)}  name={Symp[symptomMap[symptomChoosen]].name} value={axiosParam.symptomChoosen}>
                                        <option value="" selected>select options</option>
                                            {Symp[symptomMap[symptomChoosen]].choices.map((data, key) => {
                                             
                                            return <option value={data.text} name={Symp[symptomMap[symptomChoosen]].name} key={key}>{data.text}</option>
                                        })} </SympSelect> <MainButton onSubmit={(e) => onSubmitOption(e)}>Add Symptom  </MainButton>
                                        </SymptomOptionsForm>
                                        </> : <>  
                                        <SymptomOptionsForm onSubmit={(e) => onSubmitOption(e)}>
                                         <h2>CHOOSE SYMPTOM OPTIONS FOR {Symp[symptomMap[symptomChoosen]].name} </h2> <SymptomInput onChange={(e)=>handleChangeOption(e)}  type="range"
                                            name={Symp[symptomMap[symptomChoosen]].name} min={Symp[symptomMap[symptomChoosen]].min} max={Symp[symptomMap[symptomChoosen]].max} />
                                            <SymptomInput id="textInput"  name={Symp[symptomMap[symptomChoosen]].name} type="number" onChange={(e)=>handleChangeOption(e)} value={rangeText!==0?rangeText:Symp[symptomMap[symptomChoosen]].default} /> <MainButton onSubmit={(e) => onSubmitOption(e)}>Add Symptom</MainButton>
                                       
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

const TermsButton = styled.button`
text-decoration: none;
align-items: center;
text-decoration: none;
font-family: 'Poppins', sans-serif;
border: 1px solid #FFC4D6;
color: white;
border-radius:10px;
background: #FFC4D6;
padding: 0 10px 0 10px;
border:1px solid  #FFC4D6;

box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 

font-size: 1.1rem;
// border-radius: 10px;
// border-left: 1px solid #FE687D;
font-weight: bold;
width: 30%;
height: 50px;
padding: 10px;
 margin-bottom: 70px;

`;

const SympAndResults = styled.div` 
width: 100%;
display: flex;
flex-direction: row; 
 justify-content: space-around; 
 color:#5243C0;
 padding: 3rem;
`;
const SympAndResults1 = styled(SympAndResults)` 
width: 100%;
display: flex;
flex-direction: row; 
 justify-content: space-between; 
 color:#5243C0;
 text-align:left;
 padding: 0 4.5rem 0 .5rem;
//   border: 1px solid black;
 margin-right: 2rem;
 h2{
     1.5rem;
     font-weight: normal;
 }
 
`;

const SympAndResults2 = styled(SympAndResults1)`
margin-left: 4rem;

`;

const MainButton = styled(TermsButton)`
width: 20%
`;

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
color:#5243C0;
`;

const SymptomInput = styled.input`
width: 60%;
height: 10%;
color:#5243C0;
background: #FFF3F3;
border-radius: 15px;
border: 1px solid  #FFF3F3;
margin-bottom: 50px;
font-size: 1.5rem;
::placeholder{
    text-align center;
    margin: 0px 2rem 0px 2rem;
    font-size: 1.4rem;
    color:#5243C0;
}

option{
    width: 60%;
    height: 10%;
color:#5243C0;
background: #FFF3F3;
border-radius: 15px;
border: 1px solid  #FFF3F3;
font-size: 1.5rem;
}

`;



const SympSelect = styled.select`
width: 60%;
height: 10%;
color:#5243C0;
background: #FFF3F3;
border-radius: 15px;
border: 1px solid  #FFF3F3;
margin-bottom: 50px;
font-size: 1.5rem;
::placeholder{
    text-align center;
    margin: 0px 2rem 0px 2rem;
    font-size: 1.4rem;
    color:#5243C0;
    max-width: 40%;
}
option{
    width: 60%
    height: 20%;
color:#5243C0;
background: #FFF3F3;
border-radius: 15px;
border: 1px solid  #FFF3F3;
font-size: 1.5rem;
 
}
`;

const SymptomOptionsForm = styled(SymptomForm)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center; 
color:#5243C0;
`;

const StyledModal = Modal.styled`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;

  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;

  box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
`;


const StyledTermsModal = Modal.styled`
width: 70%;
height: 35%;
display: flex;
flex-direction: column;
background-color: white;
opacity: ${props => props.opacity};
transition: opacity ease 500ms;
justify-content: center;
text-align: center;
align-items: center;
// margin: 30px 1.5rem 0 8.5rem;
border-radius: 15px;
    color:  #5243C0;
    box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
 padding: 3rem;
h1{
    margin-top: 100px;
    font-weight: bold;
    font-family:'Poppins', sans-serif;
}
h4{
    font-size: 1.3rem;
    margin-bottom: 120px;
}
`;
const TermsModalButton = styled(TermsButton)`
width: 20%
margin: 85px 7rem 0px 7rem;

`;



const StyledRecsModal = Modal.styled`
width: 60%;
min-height: 100%;
display: flex;
flex-direction: column;
background-color: white;
opacity: ${props => props.opacity};
transition: opacity ease 500ms;
justify-content: center;
text-align: left;
align-items: center;
border-radius: 15px;
    color:  #5243C0;
    box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
 padding: 3rem;
h1{
  
    font-weight: normal;
    font-family:'Poppins', sans-serif;
    margin-bottom: 10px;
}
p{
    font-size: 1.4rem;
    font-weight: normal;
}
h4{
    font-size: 1.6rem;
    margin-bottom: 120px;
}
`;

const SuggestedTestModal= styled(StyledRecsModal)`
padding: 2.3rem;
h1{
  
    font-weight: normal;
    font-family:'Poppins', sans-serif;
    margin-bottom: 10px;
}
p{
    font-size: 1rem;
    font-weight: normal;
}
h4{
    font-size: 1.3rem;
    margin-bottom: 120px;
}
`;












const CustomWrapper = styled.div`
width: 85%;
height: 100%;
padding: 1rem;
background:white;
font-family:'Poppins', sans-serif;
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;
margin-left: .8rem;
// border: 1px solid blue;
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

}
`;

const Title = styled.div`
background-image: url(${medicalIcon});
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


const GlobalStats = styled.div`
 
width: 100%;
display: flex;
flex-direction: column; 
justify-content: center;
text-align: center;
align-items: center;
margin-top: 30px;
// margin: 30px 1.5rem 0 8.5rem;
border-radius: 15px;
    color:  #5243C0;
// border: 1.5px solid green;
h1{
    font-weight: bold;
    font-family:'Poppins', sans-serif;
}
`;


const SymptomListWrapper = styled.div`
width: 40%;
display: flex;
flex-direction: column; 
text-align: left
`;