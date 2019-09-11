const drawSierpinskyTriangle = (ctx, x, y, size, depth) => {
    if (depth === 0) {
        drawTriangle(ctx, x, y, size)
    } else {
        depth--;
        const halfSize = size / 2
        drawSierpinskyTriangle(ctx, x, y, halfSize, depth)
        drawSierpinskyTriangle(ctx, x + halfSize, y, halfSize, depth)
        drawSierpinskyTriangle(ctx, x + halfSize / 2, y - getTriangleHeight(y, halfSize), halfSize, depth)

    }
}

const drawTriangle = (ctx, x, y, size) => {
    ctx.beginPath()

    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo((x + size / 2), y - getTriangleHeight(y, size))
    ctx.lineTo(x, y)

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#666666';
    ctx.stroke();

    ctx.fillStyle = "#666666";
    ctx.fill();

    ctx.closePath();
}


const getTriangleHeight = (y, size) => size * (Math.sqrt(3) / 2)

export default drawSierpinskyTriangle