function FarBack(x){
    this.loc = new JSVector(x, 0); //choose y
    this.vel = -0.5/2;
    this.clr = "blue";
}

FarBack.prototype.run = function(){
    this.loc.x += this.vel;
    this.render();
    this.cycle();
}

FarBack.prototype.render = function(){
    let context = ctx;
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.clr;
    context.moveTo(this.loc.x, this.loc.y);
    context.lineTo(this.loc.x + canvas.width, this.loc.y);
    context.lineTo(this.loc.x + canvas.width, this.loc.y+ canvas.height);
    context.lineTo(this.loc.x, this.loc.y + canvas.height);
    //context.fillRect(this.loc.x, this.loc.y, canvas.width, canvas.height);
    context.fill();
    context.stroke();
    context.closePath();
}

FarBack.prototype.cycle = function(){
    if(this.loc.x + canvas.width < 0){
        this.loc.x = canvas.width;
    }
}

