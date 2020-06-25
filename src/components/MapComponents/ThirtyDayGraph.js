// Include react
import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Chart from 'react-apexcharts'



class ThirtyDayGraph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                name: "Cases",
                data: this.props.thirtyDays.cases
              },
              {
                name: "Recovered",
                data:  this.props.thirtyDays.recovered
              },
              {
                name: 'Deaths',
                data: this.props.thirtyDays.deaths
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
              },
              title: {
                text: `${this.props.country} PREVIOUS 30 DAYS`,
                align: 'left'
              },
              legend: {
                tooltipHoverFormatter: function(val, opts) {
                  return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
              },
              markers: {
                size: 0,
                hover: {
                  sizeOffset: 6
                }
              },
              xaxis: {
                categories:this.props.thirtyDays.xaxisCats,
              },
              tooltip: {
                y: [
                  {
                    title: {
                      formatter: function (val) {
                        return val ; 
                      }
                    }
                  },
                  {
                    title: {
                      formatter: function (val) {
                        return val ;
                      }
                    }
                  },
                  {
                    title: {
                      formatter: function (val) {
                        return val;
                      }
                    }
                  }
                ]
              },
              grid: {
                borderColor: '#f1f1f1',
              }
            },
          
          
          };
        }

 
        
    render() {
        console.log("30 day PROPS IN 30DAY GRAPH:", this.props)
        return (<>
     <div id="chart">
  <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
            
        </>)
    }
}

export default ThirtyDayGraph;



