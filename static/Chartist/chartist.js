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
            labels: ['Suspended: 1%', 'Inverted: 2.3%', 'Flying: 0.4%', 'Wing: 0.4%', 'Bobsled: 0.3%', 'Stand Up: 0.2%', 'Pipeline: 0.1%', 'Sit Down: 95.2%'],
            series: [suspendedCounter, invertedCounter, flyingCounter, wingCounter, bobsledCounter, standUpCounter, pipelineCounter, sitdownCounter],
        }, {
        donut: true,
        showLabel: false,

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
    var designed = [{
        title: " "
    },{
        title: "Because of how the labels overlapped, the legend is described below."

    },{
        title:"Suspended(red) 1%, Inverted(peach): 2.3%, Flying(yellow): 0.4%, Wing(orange): 0.4%"
    },{
        title:"Bobsled(black): 0.3%, Stand Up(green): 0.2%, Pipeline(blue): 0.1%, Sit Down(purple): 95.2% "
    },{
        title:"Be sure to check the glossary for any terminology you don't understand."
    }]

    d3.select("thead")
    .selectAll("tr")
    .data(designed)
    .enter()
    .append("tr")
    .html(function(d) {
        return `<td>${d.title}</td>`;

  });

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
            labels: ['Suspended: 1%', 'Inverted: 2.3%', 'Flying: 0.4%', 'Wing: 0.4%', 'Bobsled: 0.3%', 'Stand Up: 0.2%', 'Pipeline: 0.1%', 'Sit Down: 95.2%'],
            series: [suspendedCounter, invertedCounter, flyingCounter, wingCounter, bobsledCounter, standUpCounter, pipelineCounter, sitdownCounter],
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

            var designed = [{
                title: " "
            },{
                title: "Because of how the labels overlapped, the legend is described below."
        
            },{
                title:"Suspended(red) 1%, Inverted(peach): 2.3%, Flying(yellow): 0.4%, Wing(orange): 0.4%"
            },{
                title:"Bobsled(black): 0.3%, Stand Up(green): 0.2%, Pipeline(blue): 0.1%, Sit Down(purple): 95.2% "
            },{
                title:"Be sure to check the glossary for any terminology you don't understand."
            }]

            d3.select("thead")
            .selectAll("tr")
            .remove()
        
            d3.select("thead")
            .selectAll("tr")
            .data(designed)
            .enter()
            .append("tr")
            .html(function(d) {
                return `<td>${d.title}</td>`;
        
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

        var chart = new Chartist.Pie('.ct-chart', {
            labels: ['Wood 12.6%', 'Steel: 87.4%'],
            series: [woodCounter, steelCounter],
            }, {
            donut: true,
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
            var typed = [{
                title: " "
            },{
                title: "Steel: 87.4%, Wood: 12.6%"
            },{
                title:"Be sure to check the glossary for any terminology you don't understand."
            }]

            d3.select("thead")
            .selectAll("tr")
            .remove()
            
            d3.select("thead")
            .selectAll("tr")
            .data(typed)
            .enter()
            .append("tr")
            .html(function(d) {
                return `<td>${d.title}</td>`;
        
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
                labels: ['Under Construction Coasters', 'Standing but Not Operating Coasters', 'In Storage Coasters', 'Relocated Coasters', 'Operating Coasters'],
                series: [constructionCounter, sbnoCounter, storageCounter, relocatedCounter, operatingCounter],
                }, {
                donut: true,
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
                var statused = [{
                title: " "
                },{
                    title: "Operating: 53.6%, Under Construction: 2.3%, Standing but Not Operating: 1.8%"
                },{
                    title: "In Storage: 0.1%, Relocated: 9.1%, Not Featured: 33%"
                },{
                    title: "Not featured was ommitted in the construction of the donut chart to expand on the known data."
                },{
                    title:"Be sure to check the glossary for any terminology you don't understand."
                }]
                    
                d3.select("thead")
                .selectAll("tr")
                .remove()
                
                d3.select("thead")
                .selectAll("tr")
                .data(statused)
                .enter()
                .append("tr")
                .html(function(d) {
                    return `<td>${d.title}</td>`;
            
              });
        }
    })
}

getData(coasterData);

function updatePlotly(newdata) {
  Plotly.restyle("ct-chart", "values", [newdata]);
}

