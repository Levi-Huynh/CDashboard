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
        yaxis:{
          labels: {
            style: {colors: '#5243C0',
          },
            formatter: function(val) {
             val=val.toString()
             
           if(val.length >6){
               let result = parseInt(val)
               var zero = 6;
               var rounded = Math.round(result/Math.pow(10, zero))
               return rounded.toString() + 'M'
           }else if(val.length > 3 && val.length <= 6){
            let result = parseInt(val)
            var zero = 3;
            var rounded = Math.round(result/Math.pow(10, zero))
            return rounded.toString() + 'K'
           } else if(val.length <= 3){
            let result = parseInt(val)
            var zero = 0;
            var rounded = Math.round(result/Math.pow(10, zero))
            return rounded.toString() 
           }
            }
          },

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
<Chart options={this.state.options} series={this.state.series} type="area" height={400} width={1000}  />
</div>
    )}}

export default PredictGraph;