function Enemies(x, y, xLow, xHigh){ // loc x and y coordinates
    this.loc = new JSVector(x, y);
    this.bounds = [xLow, xHigh];
    this.vel = 0.5;
    this.clr = "red";
    this.n = 8;
    this.adjust = 0;
    this.death = false;
    this.timer = 0;
    //this.loved = false;
}

Enemies.prototype.run = function(){
    this.loc.x += (this.vel + this.adjust);
    if(this.loc.x>this.bounds[1]){
        this.loc.x = this.bounds[1] - 2;
        this.vel *= -1;

    }
    if(this.loc.x<this.bounds[0]){
        this.loc.x = this.bounds[0] + 2 ;
        this.vel *= -1;
    }
    this.render();
    this.adjust = 0;

    if(this.loc.distance(h1.loc) <= 18){
        this.death = true;
    }
}

Enemies.prototype.render = function(){
    if(this.death){
        let context = ctx;
        context.beginPath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.moveTo(0, 0);
        context.lineTo(canvas.width, 0);
        context.lineTo(canvas.width, 0 + canvas.height);
        context.lineTo(0, canvas.height);
        context.fill();
        context.stroke();
        context.closePath();
        this.timer++;
        if(this.timer%60 == 0){
            h1.loc.y = 200;

            this.death = false;
        }
   }
    else{
    ctx.save();
   ctx.translate(this.loc.x, this.loc.y);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.clr;
    ctx.moveTo(0, -this.n);
    ctx.lineTo(-this.n, this.n);
    ctx.lineTo(this.n, this.n);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
   }
}

