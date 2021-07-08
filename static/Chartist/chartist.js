var svgWidth = 960;
var svgHeight = 660;

var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

var svg = d3
  .select(".chartist-data")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);



d3.json("../WebScraping/fulldatajsons/rcdbjson_dtformat_updated.json").then((importedData) => {
    var coasterData = importedData;

    //var coasterName = coasterData['Roller Coaster'];
    //var coasterPark = coasterData['Amusement Park'];
    var coasterType = coasterData['Type'];
    var coasterDesign = coasterData['Design'];
    var coasterStatus = coasterData['Status'];
    //var coasterOpened = coasterData['Opened'];

    //Pie Chart 1 
    var suspendedCounter = 0;
    var sitdownCounter = 0;
    var invertedCounter = 0;
    var flyingCounter = 0;
    var wingCounter = 0;
    var bobsledCounter = 0;
    var standUpCounter = 0;
    var pipelineCounter = 0;

    for (var i = 0; i < coasterData.length; i++) {
        if (coasterDesign[i] === 'Suspended') {
            suspendedCounter = suspendedCounter + 1;
        } else if (coasterDesign[i] === 'Sit Down') {
            sitdownCounter = sitdownCounter + 1;
        } else if (coasterDesign[i] === 'Inverted') {
            invertedCounter = invertedCounter + 1; 
        } else if (coasterDesign[i] === 'Flying') {
            flyingCounter = flyingCounter + 1;
        } else if (coasterDesign[i] === 'Wing') {
            wingCounter = wingCounter + 1;
        } else if (coasterDesign[i] === 'Bobsled') {
            bobsledCounter == bobsledCounter + 1;
        } else if (coasterDesign[i] === 'Stand Up') {
            standUpCounter == standUpCounter + 1;
        } else if (coasterDesign === 'Pipeline') {
            pipelineCounter = pipelineCounter + 1;
        } else {

        }
    };

    var trace1 = {
        labels: ['Suspended', 'Sit Down', 'Inverted', 'Flying', 'Wing', 'Bobsled', 'Stand Up', 'Pipeline'],
        values: [suspendedCounter, sitdownCounter, invertedCounter, flyingCounter, wingCounter, bobsledCounter, standUpCounter, pipelineCounter],
        type: 'pie'
    };
     
    var data1 = [trace1];
     
    var layout1 = {
     title: "Sit Down vs. Suspended",
    };
     
    Plotly.newPlot("plot1", data1, layout1);

    console.log('Hello testing')

    



});


// for (var i = 0; i < coasterData.length; i++) {}


