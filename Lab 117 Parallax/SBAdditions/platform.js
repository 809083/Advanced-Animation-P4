function Platform(x, y, s){ // loc from upper left corner and size
    this.loc = new JSVector(x, y); 
    this.size = s;
    this.clr = "brown";
}

Platform.prototype.run = function(){
    this.render();
    //this.stopChar(); character not coded yet
}

Platform.prototype.render = function(){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.clr;
    ctx.moveTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x+ this.size, this.loc.y);
    ctx.lineTo(this.loc.x + this.size, this.loc.y + 20);
    ctx.lineTo(this.loc.x, this.loc.y + 20);
    ctx.lineTo(this.loc.x, this.loc.y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    

}

Platform.prototype.stopChar = function(){
    if(h1.loc.x >= this.loc.x && h1.loc.x<= this.loc.x + this.size && h1.loc.y == this.loc.y){
        h1.onPlatform = true;
    }
}