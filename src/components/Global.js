import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "./Navigation/index";
import SearchBar from "./SearchForm";
import axios from "axios";
import Worldmap from "./World"



// const Global = props => {
//     const [GlobalRes, setGlobal] = useState({});


//     useEffect(() => {
//         axios.get('https://api.covid19api.com/summary')
//             .then(res => {
//                 const RES = res.data;
//                 console.log("res", RES.Global.NewConfirmed)
//                 setGlobal(RES)
//                 // console.log("state", { GlobalRes })
//             })
//             .catch(err => {
//                 console.log("err", err)
//             });

//     }, []);

class Global extends React.Component {
    state = {
        GlobalRes: {},
        Date: '',
    };

    componentDidMount() {
        return axios
            .get('https://api.covid19api.com/summary')
            .then(res => {
                console.log("res", res)
                const GRES = res.data.Global
                const DATE = res.data.Date

                this.setState({
                    GlobalRes: GRES,
                    Date: DATE,

                })

                console.log("state", this.state.GlobalRes.TotalConfirmed)

            })
            .catch(err => {
                console.log("err", err)
            })
    }

    render() {


        return (

            <>
                <GlobalWrapper>
                    <DashHeader>
                        <h2>Dashboard</h2>
                        <h2>{this.state.Date}</h2>
                    </DashHeader>

                    <GlobalStats>
                        {/* pinkcolorcontainer in here */}
                        <h1>DAILY GLOBAL SUMMARY <span>{this.state.Date}</span></h1>

                        <GlobalSum>

                            <h2>New Confirmed: <span>{this.state.GlobalRes.NewConfirmed}</span></h2>
                            <h2>New Deaths: <span>{this.state.GlobalRes.NewDeaths}</span></h2>
                            <h2>New Recovered: <span>{this.state.GlobalRes.NewRecovered}</span></h2>
                            <h2>Total Confirmed: <span>{this.state.GlobalRes.TotalConfirmed}</span></h2>
                            <h2>Total Deaths: <span>{this.state.GlobalRes.TotalDeaths}</span></h2>
                            <h2>Total Recovered: <span>{this.state.GlobalRes.TotalRecovered}</span></h2>

                        </GlobalSum>

                        {/* pinkcolorcontainer in here */}
                    </GlobalStats>

                    {/* <SearchBar /> */}
                    {/* <LargestRecovered /> */}
                    <Worldmap />


                </GlobalWrapper>
            </>
        )

    }
}

export default withRouter(Global);

// TOP
const GlobalWrapper = styled.div`
width: 85%;
height: 100vh;
padding: 1rem;
background:#F6F4FC;
font-family: Roboto;
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;

`;

const DashHeader = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`;

const GlobalStats = styled.div`
background: #F8E5E9;

width: 80%;
display: flex;
flex-direction:column; 
text-align: center;
margin-top: 30px;
margin: 30px 1.5rem 0 8.5rem;
border-radius: 15px;
    color: #FE687D;
h1{

    font-weight: bold;
    font-family: "Roboto";

}
`;

const GlobalSum = styled.div`
margin-top: 15px; 
display: flex;
flex-direction: column;
font-family: "Roboto";
padding: .8rem;
color:  #4D4CAC; 

h2{
 
font-weight: normal;

span{
    color: #FE687D;
    font-weight: bold;
}
}



`;

//LARGEST TOTALS PIE

