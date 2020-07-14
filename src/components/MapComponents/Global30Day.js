// Include react
import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Chart from 'react-apexcharts';
import update from 'immutability-helper';




class Global30Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: "Total Cases",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Total Deaths",
          data: [12, 11, 14, 18, 17, 13, 13]
        },
        {
          name: "Total Recovered",
          data: [20, 21, 23, 40, 30, 23, 12]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: true
          }
        },
        colors: ['#77B6EA', 'red', 'blue'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          // text: 'Global 30 Day Overview',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          // size: 1
        },
        xaxis: {
          // show: false,
          type: 'datetime',
          categories: [],
          title: {
            // text: 'Date'
          }
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
          },
          min: 5,
          max: 40,
        },
        tooltip: {
          x: {
            format: 'MM/dd'
          },
        },
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
          
      
        }
      },
      zoom: {
        enabled: true,
        type: 'x',  
        autoScaleYaxis: false,  
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 1
          }
        }
    }
    
    };
  }

       

        componentDidUpdate(prevProps){
            if(this.props.global30 !== prevProps.global30){
                console.log('CDU INVOKED', this.props.global30)
              this.setState({
                
                  options: {...this.state.options,  yaxis: {...this.state.options.yaxis, max: this.props.global30.max, min:this.props.global30.min}, xaxis:{...this.state.options.xaxis, categories: this.props.global30.xAxis}}
                  
                          
                  
              })
        
              this.setState({
                series: update(this.state.series, { 0:{data:{$set: this.props.global30.dataCases}}, 1:{data:{$set: this.props.global30.dataDeaths}}, 2:{data:{$set: this.props.global30.dataRecovered}}  })
              })
        
           
          
        }
        
        console.log("30 CDU SERIES STATE GLOBAL 30:",  this.state.series, "CDU global30 PROPS:", this.props.global30, this.state.options.xaxis, this.state.options.yaxis)
        
          }
        



  render() {
    return (
      

<div id="chart">
<Chart options={this.state.options} series={this.state.series} type="area" height={600} width={2000} />
</div>
    )}}
    
    export default Global30Chart;