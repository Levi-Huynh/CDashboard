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
          
            series: [{
                name: 'Total Cases',
                data: []
              },
              {
                name: 'Total Deaths',
                data: []
              },
              {
                name: 'Total Recovered',
                data: []
              },
            
            ],
            options: {
              chart: {
                height: 350,
                type: 'scatter',
                zoom: {
                  type: 'xy'
                }
              },
              dataLabels: {
                enabled: false
              },
              grid: {
                xaxis: {
                  lines: {
                    show: true
                  }
                },
                yaxis: {
                  lines: {
                    show: true
                  }
                },
              },
              xaxis: {
                type: 'datetime',
              },
              yaxis: {
                max: null 
              }
            },
          
          
          };
        }

        componentDidUpdate(prevProps){
            if(this.props.global30 !== prevProps.global30){
                console.log('CDU INVOKED', this.props.global30)
              this.setState({
                
                  options: {...this.state.options, yaxis: {...this.state.uaxis, max: this.props.global30.max}
                  
                }
                  
              })
        
              this.setState({
                series: update(this.state.series, { 0:{data:{$set: this.props.global30.dataCases}}, 1:{data:{$set: this.props.global30.dataDeaths}}, 2:{data:{$set: this.props.global30.dataRecovered}}  })
              })
        
           
          
        }
        
        console.log("30 CDU SERIES STATE GLOBAL 30:",  this.state.series, "CDU global30 PROPS:", this.props.global30, this.state.options.yaxis)
        
          }
        

        render() {
          return (
            

      <div id="chart">
  <Chart options={this.state.options} series={this.state.series} type="scatter" height={350} width={700} />
</div>
        )}}
    export default Global30Chart;