const dataSet = [{"day":"Monday", "cars": 20}, {"day":"Tuesday", "cars":50}, {"day":"Wednesday", "cars": 80}, {"day":"Thursday", "cars": 150}, {"day":"Friday", "cars": 200}, {"day":"Saturday", "cars": 300}]

const chartWidth = 700
const chartHeight = 200

const xScale = d3.scaleLinear()
	.domain([0, d3.max(dataSet, d => d.cars)])
	.range([0, chartWidth])

const yScale = d3.scaleBand()
	.domain(d3.map(dataSet, d => d.day))
	.range([0, chartHeight])
  .paddingInner(0.05)

d3.select('#bars')
  .selectAll('rect')
  .data(dataSet)
  .join('rect')
  .attr('height', 25) //yScale.bandwith())
  .attr('width', d => xScale(d.cars))
  .attr('y', d => yScale(d.day))
  .attr('fill', 'url(#pattern-car)')

d3.select('#labels')
  .selectAll('text')
  .data(dataSet)
  .join('text')
  .attr('y', d => yScale(d.day))
  .text(d => d.day);