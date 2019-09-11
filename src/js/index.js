import drawSierpinskyTriangle from './geometry'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let isPanning = false;

drawSierpinskyTriangle(ctx, 0, 600, 600, 6)

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

