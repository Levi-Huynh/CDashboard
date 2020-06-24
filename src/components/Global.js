import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "./Navigation/index";
import SearchBar from "./SearchForm";
import axios from "axios";
import Worldmap from "./World"
import TopConfirmed from "./TopConfirmed"
import NewConfirmed from "./NewConfirmed"
import TopDeaths from "./TopDeaths"
import TopRecovered from "./TopRecovered"

import BarNewConfirmed from "./BarNewConfirmed"
import BarDeaths from "./BarDeaths"
import BarRecovered from "./BarRecovered"
import BarTotalConfirmed from "./BarTotalConfirmed"


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

                    <GlobalStats>

                        <FiveBar>
                            <h6>Highest Confirmed Cases </h6>
                            <BarTotalConfirmed />
                        </FiveBar>

                        <FiveBar>
                            <h6>Highest Recovered Cases </h6>
                            <BarRecovered />
                        </FiveBar>
                    </GlobalStats>

                    <GlobalStats>
                        <FiveBar>
                            <h6>Highest New Cases </h6>
                            <BarNewConfirmed />
                        </FiveBar>

                        <FiveBar>
                            <h6>Highest Death Cases </h6>
                            <BarDeaths />
                        </FiveBar>
                    </GlobalStats>

                    {/* 
                    <GlobalStats>

                        <TopFive>
                            <h6>Highest Confirmed Cases </h6>
                            <TopConfirmed />
                        </TopFive>

                        <TopFive>
                            <h6>Highest Recovered Cases</h6>
                            <TopRecovered />
                        </TopFive>

                        <TopFive>
                            <h6>Highest Death Cases</h6>
                            <TopDeaths />
                        </TopFive>

                        <TopFive>
                            <h6>Highest New Cases</h6>
                            <NewConfirmed />
                        </TopFive>

                    </GlobalStats> */}


                    {/* <SearchBar /> */}
                    {/* <LargestRecovered /> */}
                    {/* <Worldmap /> */}



                </GlobalWrapper>

            </>
        )

    }
}

export default withRouter(Global);

// TOP
const GlobalWrapper = styled.div`
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

`;

const DashHeader = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`;

const GlobalStats = styled.div`
 

width: 80%;
display: flex;
flex-direction:row; 
justify-content: space-around;
text-align: center;
margin-top: 30px;
margin: 30px 1.5rem 0 8.5rem;
border-radius: 15px;
    color: #FE687D;
// border: 1px solid red;
h1{

    font-weight: bold;
    font-family: "Roboto";

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

const TopFive = styled(GlobalSum)`
//4 ACROSS 
width: 25%;
font-size: .5rem;

h6{
    font-size: 1rem;
}
`;
//LARGEST TOTALS PIE

const FiveBar = styled.div`
width: 45%
font-family: "Roboto";
// padding: .8rem;
color:  #4D4CAC; 
border-radius: 15px;
background: white;
// border: 1px solid  #636363;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
margin: 1rem .8rem 0 .8rem; 
h6{
    font-size: 1rem;
}
`;
