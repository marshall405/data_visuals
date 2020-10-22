let dataSet = [423, 1234, 1535, 1463]
const code = document.getElementById('code')

document.getElementById('data').addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        // Enter
        addData()
    }
})
document.getElementById('addData').addEventListener('click', () => {
    addData()
})
document.getElementById('clear').addEventListener('click', () => {
    dataSet = []
    renderData()
})

function addData() {
    const data = document.getElementById('data')
    if (Number(data.value)) {
        dataSet.push(Number(data.value))
        renderData()
    } else {
        alert('Data must be a number!')
    }
    data.focus()
    data.value = ""
}
const div = d3.selectAll("#chart")
let width = parseInt(window.getComputedStyle(document.getElementById('chart')).width)
window.addEventListener('resize', () => {
    width = parseInt(window.getComputedStyle(document.getElementById('chart')).width)
    renderData()
})

function renderData() {
    const x = d3.scaleLinear()
        .domain([0, d3.max(dataSet)])
        .range([1, width - 40])
    dataSet.sort((a, b) => a - b)
    div.selectAll('div')
        .data(dataSet)
        .join('div')
        .style('width', d => `${x(d)}px`)
        .text(d => d);
    updateCode()
}

renderData()


function updateCode() {

    let innerText = '<div class="chart-container">'
    document.querySelectorAll('#chart div').forEach(div => {
        innerText += `<div style="width: ${div.style.width}">${div.innerText}</div>`
    })
    innerText += '</div>'
    code.innerText = innerText

}