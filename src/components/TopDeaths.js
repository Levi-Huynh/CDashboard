import React, { PureComonent } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Chart from 'react-apexcharts'

import * as routes from "../routes/routes";
import axios from 'axios';



//GlobalPie





class TopDeaths extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            FiveValues: [1, 2, 3, 4, 5],
            FiveNames: [],

            // labels: ['A', 'B', 'C', 'D', 'E'],
            options: {
                dataLabels: { enabled: true },
                chart: {
                    width: 300
                },
                series: [],
                legend: {

                    position: 'bottom'
                },
                labels: ["loading", "loading", "loading", "loading", "loading"],

                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                fontSize: '.5rem',
                                name: {
                                    show: false,
                                    // fontSize: '12px',
                                    fontFamily: 'Rubik',
                                    color: "#636363",
                                    offsetY: -10
                                },
                                value: {
                                    show: true,
                                    // fontSize: '12px',
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    color: "#636363",
                                    offsetY: 16,
                                    // formatter: function (val) {
                                    //     return val
                                    // }
                                },
                                total: {
                                    show: true,
                                    label: 'Total',
                                    color: "blue",

                                    // formatter: function (w) {
                                    //     if (this.state.FiveValues.length !== 0) {
                                    //         return this.state.FiveValues.reduce((a, b) => {
                                    //             return a + b
                                    //         }, 0)
                                    //     }
                                    // }
                                }
                            }
                        }
                    }
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
                //console.log(RES)

                //arr of objects
                function top5(data) {
                    let dObj = {}
                    let d1 = data.map(d => {
                        if (d.TotalDeaths !== null) {
                            dObj[d.TotalDeaths] = d.Country
                        }
                    }
                    )


                    //console.log("d1", dObj)

                    let ordered = {}
                    let ob = Object.keys(dObj).sort().forEach((k) =>
                        ordered[k] = dObj[k]
                    );

                    //console.log("ob", ordered)
                    let ans = Object.entries(ordered).slice(-4)
                    //console.log("ans", ans)

                    let revObj = []
                    let creatObj = ans.map((d, i) => {
                        revObj[i] = { "name": ans[i][1], "value": ans[i][0] }

                    })
                    //console.log("answer1", revObj)
                    return revObj


                }

                //arry of objects
                let calcTop5 = top5(RES)
                //console.log("c", calcTop5)
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
                    options: { ...this.state.options, labels: newFiveNames }
                })
                //console.log("top", this.state.FiveValues, this.state.FiveNames, this.state.options.series)


            })
            .catch(err => {
                console.log("err", err)
            })


    }




    componentDidMount() {
        return this.getData()
    }

    render() {
        //console.log("top2", this.state.FiveValues, this.state.FiveNames, this.state.options.series)
        return (<>
            <div className="donut">
                <Chart options={this.state.options} series={this.state.FiveValues} type="donut" width="300" />
            </div>
        </>)
    }
}

export default withRouter(TopDeaths);