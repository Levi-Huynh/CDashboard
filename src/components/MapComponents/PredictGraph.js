// Include react
import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Chart from 'react-apexcharts';
import update from 'immutability-helper';



class PredictGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: '14 Day Prediction',
        data: []
      }, {
        name: 'Previous 14 Days',
        data: []
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: []
        },
        tooltip: {
          x: {
            format: 'MM/dd'
          },
        },
      },
    
    
    };
  

  }

  componentDidUpdate(prevProps){
    if(this.props.predict !== prevProps.predict){
      this.setState({
        
          options: {...this.state.options, xaxis: {...this.state.xaxis, categories: this.props.predict.xaxisDates}}
          
      })

      this.setState({
        series: update(this.state.series, { 1:{data:{$set: this.props.predict.prev2weeks}}, 0:{data:{$set: this.props.predict.next2weeks}}  })
      })

   
  
}

console.log("CDU SERIES STATE:",  this.state.series, "CDU PREDICT PROPS:", this.props.predict)

  }


  render() {
    console.log("RENDER SERIES STATE:", this.state.series, "PROPS", this.props.predict)
    return (
      

<div id="chart">
<Chart options={this.state.options} series={this.state.series} type="area"  height={350} width={700}  />
</div>
    )}}

export default PredictGraph;