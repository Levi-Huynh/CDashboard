// STEP 1 - Include Dependencies

// Include react
import React from 'react';
import ReactDOM from 'react-dom';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

//Import FusionMaps
import FusionMaps from 'fusioncharts/maps/es/fusioncharts.worldwithcountries';
import World from 'fusioncharts/fusioncharts.maps'

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
function dataClicked(eventObj, dataObj) {
    console.log("country", dataObj.categoryLabel)
    console.log("Coutnry2", dataObj.displayValue)
    console.log("event", dataObj.label)
}

FusionCharts.addEventListener('dataClick', dataClicked)

ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

//STEP 2 - Define the dataset and the colorRange of the map
// const dataset = [{
//     "id": "NA",
//     "value": ".82",
//     "showLabel": "1"
// }, {
//     "id": "SA",
//     "value": "2.04",
//     "showLabel": "1"
// }, {
//     "id": "AS",
//     "value": "1.78",
//     "showLabel": "1"
// }, {
//     "id": "EU",
//     "value": ".40",
//     "showLabel": "1"
// }, {
//     "id": "AF",
//     "value": "2.58",
//     "showLabel": "1"
// }, {
//     "id": "AU",
//     "value": "1.30",
//     "showLabel": "1"
// }];

const dataset = []

const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    // "gradient": "1",
    // "color": [{
    //     "minvalue": "0.5",
    //     "maxvalue": "1.0",
    //     "color": "#FFD74D"
    // }, {
    //     "minvalue": "1.0",
    //     "maxvalue": "2.0",
    //     "color": "#FB8C00"
    // }, {
    //     "minvalue": "2.0",
    //     "maxvalue": "3.0",
    //     "color": "#E65100"
    // }]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'map/worldwithcountries', // The chart type

    width: '100%', // Width of the chart
    height: '700', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Map Configuration
        "chart": {
            "caption": "",
            "showCanvasBorder": "0",
            "showlegend": "0",
            "palettecolors": "#008ee4",
            "subcaption": "",
            // "numbersuffix": "%",
            // "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "entityFillColor": "#F0F5FF",
            "theme": "gammel",

            "palette": "1"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        "data": dataset
    }
}




// STEP 3 - Creating the DOM element to pass the react-fusioncharts component
class Worldmap extends React.Component {



    render() {
        return (<
            ReactFC {
            ...chartConfigs
            }
        />
        );
    }
}

export default Worldmap;