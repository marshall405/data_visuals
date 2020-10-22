const dataSet = []

document.getElementById('addData').addEventListener('click', () => {
    const data = document.getElementById('data')
    if (Number(data.value)) {
        dataSet.push(Number(data.value))
        renderData()
    } else {
        alert('Data must be a number!')
    }
    data.value = ""
})

const div = d3.create("div")
    .style('font', '10px sans-serif')
    .style('background-color', 'black')
    .style('color', 'white')
    .html('New Data Set')

function renderData() {
    const x = d3.scaleLinear()
        .domain([0, d3.max(dataSet)])
        .range([0, 420])
    dataSet.sort((a, b) => a - b)
    div.selectAll('div')
        .data(dataSet)
        .join('div')
        .style('background', 'steelblue')
        .style('padding', '3px')
        .style('margin', '1px')
        .style('width', d => `${x(d)}px`)
        .text(d => d);
}


document.body.appendChild(div.node())


