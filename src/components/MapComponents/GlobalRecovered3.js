// Include react
import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Chart from 'react-apexcharts';
import update from 'immutability-helper';


class Recovered extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
          name: "Global Recovered",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: ' ',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        tooltip: {
          x: {
            format: 'MM/dd'
          },
        },
        xaxis: {
          type: 'datetime',

          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        yaxis: {
          // show: false,
          title: {
            text: 'Totals'
          },
           
           labels: {
     
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
        }
      
  }
      }}}

    componentDidUpdate(prevProps){
      console.log('RECOVERED CDU!!!',this.props.global90R)
        if(this.props.global90R !== prevProps.global90R){
   console.log('CDU RECOVERED:', this.props.global90R)
          this.setState({
            
              options: {...this.state.options,   xaxis:{...this.state.options.xaxis, categories: this.props.global90R.xAxis}}
              
                      
              
          })
    
          this.setState({
            series: update(this.state.series, { 0:{data:{$set: this.props.global90R.dataRecovered}} })
          })
    
       
      
    }
    
    console.log("RECOVERED CASES:",  this.state.series)
    
      }
    
    
  

    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="line" height={450} width={1300} />
</div>

      )}}

export default Recovered;