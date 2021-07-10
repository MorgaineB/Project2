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

var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

function init() {
    d3.json("../WebScraping/fulldatajsons/chartist.json").then((coasterData) => {
        var suspendedCounter = 0;
        var sitdownCounter = 0;
        var invertedCounter = 0;
        var flyingCounter = 0;
        var wingCounter = 0;
        var bobsledCounter = 0;
        var standUpCounter = 0;
        var pipelineCounter = 0;

        
        function designCounter(testCounter) {
            console.log('Test Before!')
            for (var i = 0; i < testCounter.length; i++) {
                var designer = testCounter[i]['Design'];

                if (designer === 'Suspended') {
                    suspendedCounter += 1;
                } else if (designer === 'Sit Down') {
                    sitdownCounter += 1;
                } else if (designer === 'Inverted') {
                    invertedCounter += 1; 
                } else if (designer === 'Flying') {
                    flyingCounter += 1;
                } else if (designer === 'Wing') {
                    wingCounter += 1;
                } else if (designer === 'Bobsled') {
                    bobsledCounter += 1;
                } else if (designer === 'Stand Up') {
                    standUpCounter += 1;
                } else if (designer === 'Pipeline') {
                    pipelineCounter += 1;
                } 
            }
        }

        designCounter(coasterData);
        console.log(`Suspended Coasters: ${suspendedCounter}`);
        console.log(`Sit Down Coasters: ${sitdownCounter}`);
        console.log(`Inverted Coasters: ${invertedCounter}`);
        console.log(`Flying Coasters: ${flyingCounter}`);
        console.log(`Wing Coasters: ${wingCounter}`);
        console.log(`Bobsled Coasters: ${bobsledCounter}`);
        console.log(`Stand Up Coasters: ${standUpCounter}`);
        console.log(`PipelineCoasters: ${pipelineCounter}`);
          
        var chart = new Chartist.Pie('.ct-chart', {
            labels: ['Suspended', 'Sit Down', 'Inverted', 'Flying', 'Wing', 'Bobsled', 'Stand Up', 'Pipeline'],
            series: [suspendedCounter, sitdownCounter, invertedCounter, flyingCounter, wingCounter, bobsledCounter, standUpCounter, pipelineCounter],
        }, {
        donut: true,
        showLabel: false
        });
        
        chart.on('draw', function(data) {
        if(data.type === 'slice') {
            var pathLength = data.element._node.getTotalLength();

            data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });
        
            var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to:  '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            }
            };
        
            if(data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
            });

            data.element.animate(animationDefinition, false);
        }
          });
          
          chart.on('created', function() {
            if(window.__anim21278907124) {
              clearTimeout(window.__anim21278907124);
              window.__anim21278907124 = null;
            }
            window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
          });

    })
}

init();

d3.selectAll("#selDataset").on("change", getData);

function getData() {
  var dropdownMenu = d3.select("#selDataset");
  var dataset = dropdownMenu.property("value");
  var data = [];
  d3.json("../WebScraping/fulldatajsons/chartist.json").then((coasterData) => {
    console.log(dataset);

    if (dataset == 'designPiePlot') {
        var suspendedCounter = 0;
        var sitdownCounter = 0;
        var invertedCounter = 0;
        var flyingCounter = 0;
        var wingCounter = 0;
        var bobsledCounter = 0;
        var standUpCounter = 0;
        var pipelineCounter = 0;

        
        function designCounter(testCounter) {
            console.log('Test Before!')
            for (var i = 0; i < testCounter.length; i++) {
                var designer = testCounter[i]['Design'];

                if (designer === 'Suspended') {
                    suspendedCounter += 1;
                } else if (designer === 'Sit Down') {
                    sitdownCounter += 1;
                } else if (designer === 'Inverted') {
                    invertedCounter += 1; 
                } else if (designer === 'Flying') {
                    flyingCounter += 1;
                } else if (designer === 'Wing') {
                    wingCounter += 1;
                } else if (designer === 'Bobsled') {
                    bobsledCounter += 1;
                } else if (designer === 'Stand Up') {
                    standUpCounter += 1;
                } else if (designer === 'Pipeline') {
                    pipelineCounter += 1;
                } 
            }
        }

        designCounter(coasterData);
        console.log(`Suspended Coasters: ${suspendedCounter}`);
        console.log(`Sit Down Coasters: ${sitdownCounter}`);
        console.log(`Inverted Coasters: ${invertedCounter}`);
        console.log(`Flying Coasters: ${flyingCounter}`);
        console.log(`Wing Coasters: ${wingCounter}`);
        console.log(`Bobsled Coasters: ${bobsledCounter}`);
        console.log(`Stand Up Coasters: ${standUpCounter}`);
        console.log(`PipelineCoasters: ${pipelineCounter}`);
        
        var chart = new Chartist.Pie('.ct-chart', {
            labels: ['Suspended', 'Sit Down', 'Inverted', 'Flying', 'Wing', 'Bobsled', 'Stand Up', 'Pipeline'],
            series: [suspendedCounter, sitdownCounter, invertedCounter, flyingCounter, wingCounter, bobsledCounter, standUpCounter, pipelineCounter],
        }, {
        donut: true,
        showLabel: false
        });
        
        chart.on('draw', function(data) {
        if(data.type === 'slice') {
            var pathLength = data.element._node.getTotalLength();

            data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });
        
            var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to:  '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            }
            };
        
            if(data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
            });

            data.element.animate(animationDefinition, false);
        }
            });
            
            chart.on('created', function() {
            if(window.__anim21278907124) {
                clearTimeout(window.__anim21278907124);
                window.__anim21278907124 = null;
            }
            window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
            });
    }
    else if (dataset == 'typePiePlot') {
        var steelCounter = 0;
        var woodCounter = 0;

        function typeCounter(testCounter) {
            console.log('Test Before!')
            for (var i = 0; i < testCounter.length; i++) {
                var typer = testCounter[i]['Type'];

                if (typer === 'Steel') {
                    steelCounter += 1;
                } else if (typer === 'Wood') {
                    woodCounter += 1;
                } 
            }
        }
        
        typeCounter(coasterData);
        console.log(`Steel Coasters: ${steelCounter}`);
        console.log(`Wood Coasters: ${woodCounter}`);
        
        var data = {
            labels: ['Steel', 'Wood'],
            series: [steelCounter, woodCounter],
        }

        var chart = new Chartist.Pie('.ct-chart', {
            labels: ['Steel', 'Wood'],
            series: [steelCounter, woodCounter],
            }, {
            donut: true,
            showLabel: false
        });
            
        chart.on('draw', function(data) {
        if(data.type === 'slice') {
            var pathLength = data.element._node.getTotalLength();

            data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });
        
            var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to:  '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            }
            };
        
            if(data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
            });

            data.element.animate(animationDefinition, false);
            }
              });
              
              chart.on('created', function() {
                if(window.__anim21278907124) {
                  clearTimeout(window.__anim21278907124);
                  window.__anim21278907124 = null;
                }
                window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
              }); 

        }
        else if (dataset == 'statusPiePlot') {
            var operatingCounter = 0;
            var constructionCounter = 0;
            var sbnoCounter = 0;
            var storageCounter = 0;
            var relocatedCounter = 0;
            var unknownCounter = 0;

            function statusCounter(testCounter) {
                for (var i = 0; i < testCounter.length; i++) {
                    var statuser = testCounter[i]['Status'];

                    if (statuser === 'Operating') {
                        operatingCounter += 1;
                    } else if (statuser === 'Under Construction') {
                        constructionCounter += 1;
                    } else if (statuser === 'SBNO') {
                        sbnoCounter += 1;
                    } else if (statuser === 'In Storage') {
                        storageCounter += 1;
                    } else if (statuser === 'Relocated') {
                        relocatedCounter += 1;
                    } else if (statuser === 'Unknown') {
                        unknownCounter += 1;
                    }
                }
            }

            statusCounter(coasterData);
            console.log(`Operating Coasters: ${operatingCounter}`);
            console.log(`Under Construction Coasters: ${constructionCounter}`);
            console.log(`SBNO Coasters: ${sbnoCounter}`);
            console.log(`Storage Coasters: ${storageCounter}`);
            console.log(`Relocated: ${relocatedCounter}`);
            console.log(`Else: ${unknownCounter}`);

            var chart = new Chartist.Pie('.ct-chart', {
                labels: ['Operating Coasters', 'Under Construction Coasters', 'Standing but Not Operating Coasters', 'In Storage Coasters', 'Relocated Coasters', 'Unknown Coasters'],
                series: [operatingCounter, constructionCounter, sbnoCounter, storageCounter, relocatedCounter, unknownCounter],
            }, {
                donut: true,
                showLabel: false
                });
                
                chart.on('draw', function(data) {
                if(data.type === 'slice') {
                    var pathLength = data.element._node.getTotalLength();
        
                    data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                    });
                
                    var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1000,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                    };
                
                    if(data.index !== 0) {
                    animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                    }
        
                    data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                    });
        
                    data.element.animate(animationDefinition, false);
                }
                  });
                  
                  chart.on('created', function() {
                    if(window.__anim21278907124) {
                      clearTimeout(window.__anim21278907124);
                      window.__anim21278907124 = null;
                    }
                    window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
                  }); 
        }
    })
}

getData(coasterData);

function updatePlotly(newdata) {
  Plotly.restyle("ct-chart", "values", [newdata]);
}

