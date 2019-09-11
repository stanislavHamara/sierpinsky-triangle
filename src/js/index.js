import drawSierpinskyTriangle from './geometry'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let isPanning = false;
let cursorOrigin = { x: 0, y: 0 }
let triangleOrigin = { x: 0, y: canvas.width }

drawSierpinskyTriangle(ctx, triangleOrigin.x, triangleOrigin.y, canvas.height, 5)

canvas.addEventListener('mousedown', startPanning)
canvas.addEventListener('mouseup', stopPanning)
canvas.addEventListener('mouseout', stopPanning)
canvas.addEventListener('mousemove', pan)
canvas.addEventListener('wheel', () => {
    console.log('wheel')
})

function startPanning(e) {
    isPanning = true;
    cursorOrigin = { ...cursorOrigin, x: e.clientX, y: e.clientY };
}

function stopPanning(e) {
    isPanning = false;
    const offsetX = parseInt(e.clientX - cursorOrigin.x);
    const offsetY = parseInt(e.clientY - cursorOrigin.y);
    triangleOrigin = { ...triangleOrigin, x: triangleOrigin.x + offsetX, y: triangleOrigin.y + offsetY };
}

function pan(e) {
    if (isPanning) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const offsetX = parseInt(e.clientX - cursorOrigin.x);
        const offsetY = parseInt(e.clientY - cursorOrigin.y);
        drawSierpinskyTriangle(ctx, triangleOrigin.x + offsetX, triangleOrigin.y + offsetY, canvas.height, 5);
    }
}