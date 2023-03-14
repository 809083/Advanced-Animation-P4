function MidBack(x){
    this.loc = new JSVector(x, canvas.height/2); //choose y
    this.vel = 1;
    this.clr = "green";
}

MidBack.prototype.runD = function(){
    this.loc.x -= this.vel;
    this.render();
    this.cycleD();
}

MidBack.prototype.runA = function(){
    this.loc.x += this.vel;
    this.render();
    this.cycleA();
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

MidBack.prototype.cycleD = function(){
    if(this.loc.x + canvas.width < 0){
        this.loc.x = canvas.width;
    }
}

MidBack.prototype.cycleA = function(){
    if(this.loc.x > canvas.width){
        this.loc.x = -canvas.width;
    }
}
