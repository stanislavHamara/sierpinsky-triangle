import drawTriangle from './geometry'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let isPanning = false;

drawTriangle(ctx, 0, 600, 600)

canvas.addEventListener('mousedown', () => {
    console.log('mousedown')
    isPanning = true;
})

canvas.addEventListener('mouseup', () => {
    console.log('mouseup')
    isPanning = false;
})

canvas.addEventListener('mousemove', () => {
    if (isPanning) {
        console.log('mousemove')
    }
})

canvas.addEventListener('wheel', () => {
    console.log('wheel')
})

