import React, { PureComonent } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Chart from 'react-apexcharts'

import * as routes from "../routes/routes";
import axios from 'axios';



//GlobalPie





class BarNewConfirmed extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            FiveValues: [],
            FiveNames: [],

            // labels: ['A', 'B', 'C', 'D', 'E'],
            series: [{

                data: [1, 2, 3, 4, 5],

            }],

            options: {
                dataLabels: { enabled: true },
                chart: {
                    type: 'bar',
                    // width: 300,
                    height: 350
                },

                // legend: {
                //     position: 'bottom'
                // },
                // labels: ["loading", "loading", "loading", "loading", "loading"],

                plotOptions: {
                    bar: {
                        horizontal: true,
                    },

                },
                xaxis: {
                    categories: [
                    ],
                }


            }
        }
    }

    // seperate onSubmit that does the same?

    getData() {
        return axios
            .get('https://api.covid19api.com/summary')
            .then(res => {
                const RES = res.data.Countries;
                console.log(RES)

                //arr of objects
                function top5(data) {
                    let dObj = {}
                    let d1 = data.map(d => {
                        if (d.NewConfirmed !== null) {
                            dObj[d.NewConfirmed] = d.Country
                        }
                    }
                    )


                    console.log("d1", dObj)

                    let ordered = {}
                    let ob = Object.keys(dObj).sort().forEach((k) =>
                        ordered[k] = dObj[k]
                    );

                    console.log("ob", ordered)
                    let ans = Object.entries(ordered).slice(-4)
                    console.log("ans", ans)

                    let revObj = []
                    let creatObj = ans.map((d, i) => {
                        revObj[i] = { "name": ans[i][1], "value": ans[i][0] }

                    })
                    console.log("answer1", revObj)
                    return revObj


                }

                //arry of objects
                let calcTop5 = top5(RES)
                console.log("c", calcTop5)
                let newFiveValues = []
                let newFiveNames = []
                calcTop5.forEach((ele) => {
                    //append num vals  
                    newFiveValues.push(parseInt(ele.value))
                    //append name
                    newFiveNames.push(ele.name)

                })

                this.setState({

                    FiveValues: newFiveValues,
                    FiveNames: newFiveNames,
                    series: { ...this.state.series, data: newFiveValues },
                    options: {
                        ...this.state.options, labels: newFiveNames,
                        xaxis: {
                            ...this.state.options.xaxis,
                            categories: newFiveNames
                        }
                    },

                })
                console.log("top", this.state.FiveValues, this.state.FiveNames, this.state.options.labels)


            })
            .catch(err => {
                console.log("err", err)
            })


    }




    componentDidMount() {
        return this.getData()
    }

    render() {
        console.log("top2", this.state.FiveValues, this.state.FiveNames, this.state.series)
        return (<>
            <div className="bar">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        </>)
    }
}

export default withRouter(BarNewConfirmed);