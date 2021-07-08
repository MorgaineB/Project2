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
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("./WebScraping/CSVs/rcdb_w_years_dtformat.csv", function(coasterData) {
    var coasterName = coasterData['Roller Coaster'];
    var coasterPark = coasterData['Amusement Park'];
    var coasterType = coasterData['Type'];
    var coasterDesign = coasterData['Design'];
    var coasterStatus = coasterData['Status'];
    var coasterOpened = coasterData['Opened'];

    //Pie Chart 1 
    var suspended = coasterDesign['Suspended'];
    var sitdown = coasterDesign['Sit Down'];

    var trace1 = {
        labels: [suspended, sitdown],
        values: coasterData['Design'],
        type: 'pie'
    };
     
    var data1 = [trace1];
     
    var layout1 = {
     title: "Sit Down vs. Suspended",
    };
     
    Plotly.newPlot("plot", data1, layout1);

    //Pie Chart 2 
    var steel = coasterType['Steel'];
    var wood = coasterType['Wood'];

    var trace2 = {
        labels: [steel, wood],
        values: coasterData['Type'],
        type: 'pie'
    };
     
    var data2 = [trace2];
     
    var layout2 = {
     title: "Steel vs. Wood",
    };
     
    Plotly.newPlot("plot", data2, layout2);

    //Pie Chart 3 
    var operating = coasterStatus['Operating'];
    var relocated = coasterStatus['Relocated'];
    var noStatus = coasterStatus[''];

    var trace3 = {
        labels: [operating, relocated, noStatus],
        values: coasterData['Status'],
        type: 'pie'
    };
     
    var data3 = [trace3];
     
    var layout3 = {
     title: "Steel vs. Wood",
    };
     
    Plotly.newPlot("plot", data3, layout3);

});


// for (var i = 0; i < coasterData.length; i++) {}