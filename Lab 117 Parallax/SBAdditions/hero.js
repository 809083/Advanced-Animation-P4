function Hero(x, y){ // loc x and y coordinates
    this.loc = new JSVector(x, y);
    this.onPlatform = true;
    this.fallVel = 1;
    this.clr = "pink";
}

Hero.prototype.run = function(){
    this.render();
    this.jump();
    this.left();
    this.right();
    if(!this.onPlatform){
        this.loc.y--;
    }
}

Hero.prototype.render = function(){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.clr;
    ctx.moveTo(this.loc.x-4, this.loc.y-4);
    ctx.lineTo(this.loc.x + 4, this.loc.y -4);
    ctx.lineTo(this.loc.x + 4, this.loc.y + 4);
    ctx.lineTo(this.loc.x -4, this.loc.y + 4);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    

}

Hero.prototype.jump = function(){
    //listener
}

Hero.prototype.die = function(){
    //if hero touches trap, dies
}
