function MidBack(x){
    this.loc = new JSVector(x, canvas.height/2); //choose y
    this.vel = 1;
    this.clr = "green";
}

MidBack.prototype.run = function(){
    this.loc.x += this.vel;
    this.render();
    this.cycle();
}

MidBack.prototype.render = function(){
    let context = ctx;
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.clr;
    context.moveTo(this.loc.x, this.loc.y);
    context.lineTo(this.loc.x + canvas.width, this.loc.y);
    context.lineTo(this.loc.x + canvas.width, this.loc.y+ canvas.height/2);
    context.lineTo(this.loc.x, this.loc.y + canvas.height/2);
    //context.fillRect(this.loc.x, this.loc.y, canvas.width, canvas.height/2); 
    context.fill();
    context.stroke();
    context.closePath();
}

MidBack.prototype.cycle = function(){
    if(this.loc.x > canvas.width){
        this.loc.x = -canvas.width;
    }
}

