// Include react
import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Chart from 'react-apexcharts';
import update from 'immutability-helper';

      class CustomCases extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            region:"",
            transmission:"",
            reportDate:"",
          
            series:  [{
              name: 'Cases',
              data: [ ]
            }
          ],
            options: {
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                zoom: {
                  enabled: true
                }
                
              },
              noData:{
                text: "Customize Data & Graph Report",
                style: {
                  color: ' #5243C0; ',
                  fontSize: '1rem',
              
                }
              },
              colors: '#B6AAFE',
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
                categories: [],
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
              },
              yaxis: {
                title: {
                  text: undefined
                },
                labels:{
      
               
              
                }},
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
              series: update(this.state.series, { 0:{data:{$set: this.props.graphInfo.Cases}} })
            })

        }
      
     

      }
      

        render() {
          console.log('GRAPHTEST CHART PROPS', this.props.graphInfo)
          return (
            
<>
{this.props.graphInfo.Cases.length > 0? (<>
<GraphDiv>
  <ChartWrap>

  <h2>OPTIONS SELECTED:</h2>
        <h2>{this.props.graphInfo.dateRangeStart !==null && this.props.graphInfo.dateRangeEnd !==null?`Report Date Range: ${this.props.graphInfo.dateRangeStart} to ${this.props.graphInfo.dateRangeEnd}`:"" }</h2>
          <h2>{this.props.graphInfo.transmissionType !==null? `Transmission Type Selected: ${this.props.graphInfo.transmissionType}`: ""}</h2>
          <h2>{this.props.graphInfo.region !==null ? `Region Selected: ${this.props.graphInfo.region}`: ""}</h2>
          <h2>{this.props.graphInfo.reportDate !==null? `Report Date Selected: ${this.props.graphInfo.reportDate}`: ""}</h2>
  
  <h1>Case Totals</h1>
  <Chart options={this.state.options} series={this.state.series} type="bar" height={470} width={1000} /> 
  </ChartWrap>
  </GraphDiv>
  </>):""}
    </>
          )
        }}
    
    
        export default CustomCases;


        const ChartWrap=styled.div`
        text-align: left;
        padding: 1.4rem;
        h2{
          font-size: 1.rem;
          font-weight: normal;
        }

    
        `;

        const GraphDiv = styled.div`
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
 padding: 1rem;
background: white;
 
font-family: 'Poppins', sans-serif;

color:  #5243C0;  
border-radius: 15px;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
margin: 1rem;
// border: 1px solid  #636363;
box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
`;