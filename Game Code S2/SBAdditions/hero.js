function Hero(x, y){ // loc x and y coordinates
    this.loc = new JSVector(x, y);
    this.onPlatform = false;
    this.clr = "pink";
    this.jump = false;
    this.jVel;
    this.lover = [];
}

Hero.prototype.love = function(){
    this.lover.push(new LoveRay(this.loc.x, this.loc.y, 200));
    while(this.lover.length > 2){
        this.lover.splice(this.lover.length-1);
    }
}

Hero.prototype.run = function(){
    this.render();
    if(this.jump){
        this.loc.y += this.jVel;
        this.jVel += 0.05;
        if(this.jVel >= 1){
            this.jump = false;
        }
    }
    if(!this.onPlatform){
        this.loc.y+=2;
    }
    else{
        this.jVel = 0;
    }
    for(let i = this.lover.length -1; i>=0; i--){
        this.lover[i].run();
        if(this.lover[i].death){
            this.lover.splice(i, 1);
        }
    }

}

Hero.prototype.render = function(){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.clr;
    n = 10;
    ctx.moveTo(this.loc.x-n, this.loc.y-n);
    ctx.lineTo(this.loc.x + n, this.loc.y -n);
    ctx.lineTo(this.loc.x + n, this.loc.y + n);
    ctx.lineTo(this.loc.x -n, this.loc.y + n);
    ctx.lineTo(this.loc.x-n, this.loc.y-n);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
