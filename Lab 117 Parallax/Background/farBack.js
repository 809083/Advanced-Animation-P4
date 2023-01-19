function FarBack(x){
    this.loc = new JSVector(x, 0); //choose y
    this.vel = 0.5;
    this.clr = "light blue";
}

FarBack.prototype.run = function(){
    this.loc.y //update to add velocity;
    this.render();
}

FarBack.prototype.render = function(){
    context.beginPath();
    context.fillRect(this.loc.x, this.loc.y, canvas.width, canvas.height);
    context.fillStyle = this.clr;
    context.strokeStyle = "black";
    context.closePath();
}

