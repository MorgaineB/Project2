legend = swatches({color, columns: "130px 4", marginLeft: margin.left})

chart = {  
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);
  
    svg.append("g")
      .selectAll("g")
      .data(series)
      .join("g")
        .attr("fill", ({key}) => color(key))
        .call(g => g.selectAll("rect")
          .data(d => d)
          .join("rect")
            .attr("x", d => x(d.data.year))
            .attr("y", d => y(d[1]))
            .attr("width", x.bandwidth() - 1)
            .attr("height", d => y(d[0]) - y(d[1]))
         .append("title")
            .text(d => `${d.data.name}, ${d.data.year}
  ${formatRevenue(d.data.value)}`));
  
    svg.append("g")
        .call(xAxis);
  
    svg.append("g")
        .call(yAxis);
  
    return svg.node();
  }