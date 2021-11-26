// Een simpele dataset in een array
const dataSet = [10, 50, 80, 150, 200, 300]

// Een realistischere dataset met objecten zoals je krijgt uit een JSON API
const dataSet2 = [{"day":"Monday", "cars":10}, {"day":"Tuesday", "cars":50}, {"day":"Wednesday", "cars": 80}, {"day":"Thursday", "cars": 150}, {"day":"Friday", "cars": 200}, {"day":"Saturday", "cars": 300}]

// Een scale die de horizontale positie van de circels bepaalt
const linearScale = d3.scaleLinear()
	.domain(d3.extent(dataSet))
	.range([0, 700])
// Werk je met dataSet2? Dan moet je een accessor function meegeven aan d3.extent die D3 vertelt naar welke property het moet kijken: d3.extent(dataSet2, d => d.cars)

// Een scale die de oppervlakte van de circel bepaalt
const sqrtScale = d3.scaleSqrt()
	.domain(d3.extent(dataSet))
	.range([0, 30]);
// Werk je met dataSet2? Dan moet je een accessor function meegeven aan d3.extent die D3 vertelt naar welke property het moet kijken: d3.extent(dataSet2, d => d.cars)

// Versie 1, zonder scale
// d3.select('#wrapper')
// 	.selectAll('circle')
// 	.data(dataSet)
// 	.join('circle')
// 	.attr('r', d => d)
// 	.attr('cx', d => d)

// Zonder scale, maar nu met objecten uit dataSet2
// d3.select('#wrapper')
// 	.selectAll('circle')
// 	.data(dataSet2)
// 	.join('circle')
// 	.attr('r', d => d.cars)
// 	.attr('cx', d => d.cars)

// Nu met gebruik van een scale
// d3.select('#wrapper')
// 	.selectAll('circle')
// 	.data(dataSet)
// 	.join('circle')
// 	.attr('r', d => sqrtScale(d))
// 	.attr('cx', d => linearScale(d))

// Met gebruik van scale en objecten uit dataSet2
d3.select('#wrapper')
	.selectAll('circle')
	.data(dataSet2)
	.join('circle')
	.attr('r', d => sqrtScale(d.cars))
	.attr('cx', d => linearScale(d.cars))