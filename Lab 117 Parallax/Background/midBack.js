function MidBack(x){
    this.loc = new JSVector(x, canvas.height/2); //choose y
    this.vel = 1;
    this.clr = "green";
}

MidBack.prototype.run = function(){
    this.loc.y //update to add velocity;
    this.render();
}

MidBack.prototype.render = function(){
    context.beginPath();
    context.fillRect(this.loc.x, this.loc.y, canvas.width, canvas.height/2); 
    context.fillStyle = this.clr;
    context.strokeStyle = "black";
    context.closePath();
}

