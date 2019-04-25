let canvas = document.getElementById('plano')
let lienzo = canvas.getContext('2d')
console.log(lienzo)

function dibujar(color, x1, y1, x2, y2) {

    lienzo.beginPath() // iniciamos
    lienzo.strokeStyle = color // color
    lienzo.moveTo(x1, y1) // inicio
    lienzo.lineTo(x2, y2) // fin
    lienzo.stroke() // dibujamos
    lienzo.closePath() // terminamos
}

document.querySelector('#btn').addEventListener('click', () => {
    let input = document.querySelector('#numero').value
    
    let lineas = input

    for (let l = 0; l < lineas; l+=1.2) {
        y1 = 10 * l
        x2 = 10 * (l + 1)
        dibujar('blue', 0, y1, x2, 500)
    }

    for (let i = 0; i < lineas; i+=1.2) {
        y1 = 10 * i
        x2 = 10 * (i + 1)
        dibujar('green', 500, y1, x2, 0)
    }
})

document.querySelector('#cls').addEventListener('click', () => {
    let input = document.querySelector('#numero').value = null
    location.reload()
})
