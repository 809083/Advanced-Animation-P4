function NearBack(x){
    this.loc = new JSVector(x, 2*canvas.height/3); //choose y
    this.vel = -1.5/2;
    this.clr = "yellow";
}

NearBack.prototype.run = function(){
    this.loc.x += this.vel;
    this.render();
    this.cycle();
}

NearBack.prototype.render = function(){
    let context = ctx;
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.clr;
    context.moveTo(this.loc.x, this.loc.y);
    context.lineTo(this.loc.x+ canvas.width, this.loc.y);
    context.lineTo(this.loc.x+ canvas.width, this.loc.y+ canvas.height/3);
    context.lineTo(this.loc.x, this.loc.y + canvas.height/3);
    //context.fillRect(this.loc.x, this.loc.y, canvas.width, canvas.height/3); // top left
    context.fill();
    context.stroke();
    context.closePath();
    
}

NearBack.prototype.cycle = function(){
    if(this.loc.x + canvas.width < 0){
        this.loc.x = canvas.width;
    }
}

