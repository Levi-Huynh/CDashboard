// Include react
import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Chart from 'react-apexcharts';
import update from 'immutability-helper';

      class CustomNewCases extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            region:"",
            transmission:"",
            reportDate:"",
          
            series:  [ {
              name: 'New Cases',
              data: [1,2,3 ]
            },
          ],
            options: {
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              title: {
                text: ''
              },
              xaxis: {
                categories: ["a", "b", "c"],
                labels: {
                  formatter: function (val) {
                    return val 
                  }
                }
              },
              yaxis: {
                title: {
                  text: undefined
                },
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val 
                  }
                }
              },
              fill: {
                opacity: 1
              },
              legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
              }
            },
          
          
          };
        }

        componentDidUpdate(prevProps){
          if(this.props.graphInfo !== prevProps.graphInfo){
            this.setState({
              
                options: {...this.state.options, xaxis: {...this.state.xaxis, categories: this.props.graphInfo.xaxis}},
                region: this.props.graphInfo.region,
                transmission: this.props.graphInfo.transmissionType, 
                reportDate: this.props.graphInfo.reportDate
                
            })

            this.setState({
              series: update(this.state.series, { 0:{data:{$set: this.props.graphInfo.newCases}}  })
            })

        }
      
     

      }
      

        render() {
          console.log('GRAPHTEST CHART PROPS', this.props.graphInfo)
          return (
            

      <div id="chart">
        <h1>NEW CASES</h1>
     
  
  <Chart options={this.state.options} series={this.state.series} type="bar" height={700} width={1000} />
</div>
    
          )
        }}
    
    
        export default CustomNewCases;