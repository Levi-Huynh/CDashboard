import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputRange = props =>{

    const initialState={
        min1: null,
        max1: null, 
        name: null,


    }

    const [inputVals, setVals] = useState(...initialState)

    
    useEffect(()=>{
        setVals({...inputVals, min1: props.min, max1: props.max, name: props.name} )

    } ,[])

    return(
        <>
          <input type="range" min={inputVals.min1} max={inputVals.max1} name={inputVals.name} value={`${axiosParam}.${data.name}`}  onChange={handleChange}/>
                <input type="text"  name={data.name}  value={`${axiosParam}.${data.name}`} onChange={handleChange}/>
        </>
    )

}

export default InputRange; 