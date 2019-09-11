import drawSierpinskyTriangle from './geometry'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let isPanning = false;
let cursorOrigin = { x: 0, y: 0 }
let triangleOrigin = { x: 0, y: canvas.width }
let triangleSize = canvas.width
let recursionCount = 5;
let recursionRedrawLimit = 0;

drawSierpinskyTriangle(ctx, triangleOrigin.x, triangleOrigin.y, triangleSize, recursionCount)

canvas.addEventListener('mousedown', startPanning)
canvas.addEventListener('mouseup', stopPanning)
canvas.addEventListener('mouseout', stopPanning)
canvas.addEventListener('mousemove', pan)
canvas.addEventListener('wheel', zoom)

function startPanning(e) {
    isPanning = true;
    cursorOrigin = { ...cursorOrigin, x: e.clientX, y: e.clientY };
}

function stopPanning(e) {
    const offsetX = parseInt(e.clientX - cursorOrigin.x);
    const offsetY = parseInt(e.clientY - cursorOrigin.y);
    if (isPanning) {
        triangleOrigin = { ...triangleOrigin, x: triangleOrigin.x + offsetX, y: triangleOrigin.y + offsetY };
    }
    isPanning = false;
}

function pan(e) {
    if (isPanning) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const offsetX = parseInt(e.clientX - cursorOrigin.x);
        const offsetY = parseInt(e.clientY - cursorOrigin.y);
        drawSierpinskyTriangle(ctx, triangleOrigin.x + offsetX, triangleOrigin.y + offsetY, triangleSize, recursionCount);
    }
}

function zoom(e) {
    e.preventDefault();
    const zoomDirection = Math.sign(e.deltaY)
    triangleSize = zoomDirection > 0
        ? triangleSize * 1.05
        : triangleSize * 0.95

    recursionRedrawLimit++;
    if (recursionRedrawLimit === 20) {
        recursionCount = recursionCount + zoomDirection
        recursionRedrawLimit = 0
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSierpinskyTriangle(ctx, triangleOrigin.x, triangleOrigin.y, triangleSize, recursionCount);
}