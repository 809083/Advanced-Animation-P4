function Trap(){ 
    this.timer = 0;
    this.death = false;
}

Trap.prototype.run = function(){
    if(this.death){
        let context = ctx;
        context.beginPath();
        context.strokeStyle = "black";
        context.fillStyle = "red";
        context.moveTo(0, 0);
        context.lineTo(canvas.width, 0);
        context.lineTo(canvas.width, 0 + canvas.height);
        context.lineTo(0, canvas.height);
        context.fill();
        context.stroke();
        context.closePath();
        this.timer++;
        if(this.timer%60 == 0){
            h1.loc.y = 200;
            this.death = false;
        }

    }
    else{
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(0, canvas.height - 30);
        ctx.lineTo(canvas.width, canvas.height - 30);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fill();
        ctx.closePath();
        if(h1.loc.y >= canvas.height - 30){
            this.death = true;
        }
    }



}

