function NearBack(x){
    this.loc = new JSVector(x, 2*canvas.height/3); //choose y
    this.vel = 1.5;
    this.clr = "yellow";
}

NearBack.prototype.run = function(){
    this.loc.y //update to add velocity;
    this.render();
}

NearBack.prototype.render = function(){
    context.beginPath();
    context.fillRect(this.loc.x, this.loc.y, canvas.width, canvas.height/3); // top left
    context.fillStyle = this.clr;
    context.strokeStyle = "black";
    context.closePath();
    
}

