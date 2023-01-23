function Trap(){ 
}

Trap.prototype.run = function(){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(0, canvas.height - 30);
    ctx.lineTo(canvas.width, canvas.height - 30);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();

}

