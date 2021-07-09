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

d3.json("../WebScraping/fulldatajsons/chartist.json").then((coasterData) => {
    console.log(coasterData);
    console.log(coasterData.length);

    var suspendedCounter = 0;
    var sitdownCounter = 0;
    var invertedCounter = 0;
    var flyingCounter = 0;
    var wingCounter = 0;
    var bobsledCounter = 0;
    var standUpCounter = 0;
    var pipelineCounter = 0;

    function printNumber(number) {
        console.log(number);
    }
    
    for (var i = 0; i < coasterData.length; i++) {
        if (coasterData[i] === 'Suspended') {
            suspendedCounter = suspendedCounter + 1;
        } else if (coasterData[i] === 'Sit Down') {
            sitdownCounter = sitdownCounter + 1;
        } else if (coasterData[i] === 'Inverted') {
            invertedCounter = invertedCounter + 1; 
        } else if (coasterData[i] === 'Flying') {
            flyingCounter = flyingCounter + 1;
        } else if (coasterData[i] === 'Wing') {
            wingCounter = wingCounter + 1;
        } else if (coasterData[i] === 'Bobsled') {
            bobsledCounter == bobsledCounter + 1;
        } else if (coasterData[i] === 'Stand Up') {
            standUpCounter == standUpCounter + 1;
        } else if (coasterData === 'Pipeline') {
            pipelineCounter = pipelineCounter + 1;
        } else {

        }
    };

    coasterData.forEach(printNumber);
    console.log(suspendedCounter);

    
    var trace1 = {
        labels: ['Suspended', 'Sit Down', 'Inverted', 'Flying', 'Wing', 'Bobsled', 'Stand Up', 'Pipeline'],
        values: coasterData.map(row => row.Type),
        type: 'pie'
    }

    var data1 = [trace1];

    var layout1= {
        title: 'Different Types of Roller Coasters'
    };

    Plotly.newPlot("plot1", data1, layout1);

    console.log('Hello testing')

    //var coasterName = coasterData['Roller Coaster'];
    //var coasterPark = coasterData['Amusement Park'];
    var coasterType = coasterData['Type'];
    var coasterDesign = coasterData['Design'];
    var coasterStatus = coasterData['Status'];
    //var coasterOpened = coasterData['Opened'];

    // Pie Chart 1 
    

    // var suspended = coasterDesign['Suspended']
    // var sitdown = coasterDesign['Sit Down']



});


// // for (var i = 0; i < coasterData.length; i++) {}

// // relocated status should be gone!

