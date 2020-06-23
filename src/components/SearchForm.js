
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Navigation from "../components/Navigation/index";
import * as routes from "../routes/routes";
import axios from 'axios';


const SearchBar = props => {

    const [searchVal, setSearch] = useState("");

    const onSubmit = e => {

        axios
            .get(`https://api.covid19api.com/total/dayone/country/${searchVal}`)
            .then(res => {

                const Val = res.data
                console.log("res[-1]", res)
                setSearch("");
            })
            .catch(err => {
                console.log("err", err)
            })
        e.preventDefault();
    }

    //   show error text next to bar?

    return (
        <SearchContainer>
            <Searchform onSubmit={onSubmit}>
                <SearchInput
                    name="search"
                    value={searchVal}
                    onChange={e => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search Summaries by Country"

                />
                <StyledButton onClick={onSubmit} label="Search" >
                    Search
                    </StyledButton>


            </Searchform>


        </SearchContainer>

    )
};
export default withRouter(SearchBar);

const SearchContainer = styled.div`
width: 65%;
display:flex;
flex-direction:row;
justify-content:space-around;
text-align:center;
align-items:center;
//  border: 1px solid black;
margin: 30px 2rem 0 14rem;


`;

const Searchform = styled.div` 
width: 80%;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center
text-align: center;
align-content:center;
// border: 1px solid red;


`;

const SearchInput = styled.input` 
opacity=0.5;
border: none;
padding: 10px;
font-family: "Poppins", serif;
text-align: right;
::placeholder: black;
height: 30px;
width: 80%;
border-radius: 10px;


`;

const StyledButton = styled.button`
width: 15%;
border-radius: 8px;
background: #F8E5E9;
color: #FE687D;
text-align:center;
height: 30px;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
border: none;
font-family: "Zilla Slab", serif;
margin: 10px;
`;