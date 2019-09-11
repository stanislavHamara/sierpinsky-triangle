const drawTriangle = (ctx, x, y, size) => {
    ctx.beginPath()

    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo((x + size / 2), y - getTriangleHeight(y, size))
    ctx.lineTo(x, y)

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#666666';
    ctx.stroke();

    ctx.closePath();
}


const getTriangleHeight = (y, size) => size * (Math.sqrt(3) / 2)

export default drawTriangle