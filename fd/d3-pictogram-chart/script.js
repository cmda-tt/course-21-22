// Een realistischere dataset met objecten zoals je krijgt uit een JSON API
const dataSet = [{"day":"Monday", "cars":10}, {"day":"Tuesday", "cars":50}, {"day":"Wednesday", "cars": 80}, {"day":"Thursday", "cars": 150}, {"day":"Friday", "cars": 200}, {"day":"Saturday", "cars": 300}]

const numCols = 10
const numRows = 10
const graphWidth = 250
const graphHeight = 250
const dayOfTheWeek = 4
const percentNumber = Math.floor(dataSet[dayOfTheWeek].cars/d3.max(dataSet, d => d.cars)*100)
const fillColour = "#BEBEC6"
const fillColourActive = "#000260"

const gridData = d3.range(numCols*numRows)

console.log("gridData:", gridData)

const yScale = d3.scaleBand()
        .range([0, graphWidth])
        .domain(d3.range(numRows))

const xScale = d3.scaleBand()
        .range([0, graphHeight])
        .domain(d3.range(numCols))

d3.select('#wrapper')
    .selectAll("use")
    .data(gridData)
    .join("use")
    .attr("href", "#car")
    .attr('x', d => xScale(d % numCols))
    .attr('y', d => yScale(Math.floor(d/numCols)))
    .attr('fill', d => (d < percentNumber) ? fillColourActive : fillColour)

d3.select('#wrapper')
  .append("text")
     .attr("x", graphWidth/2)             
     .attr("y", graphHeight+25)
     .attr("text-anchor", "middle")  
     .style("font-size", "1em") 
     .text(dataSet[dayOfTheWeek].day)