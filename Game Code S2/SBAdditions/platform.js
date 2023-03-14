function Platform(x, y, s){ // loc from upper left corner and size
    this.initialX = x;
    this.loc = new JSVector(x, y); 
    this.size = s;
    this.vel = 2;
    this.clr = "brown";
    this.enemy;
    if(this.size>100){
        this.enemy = new Enemies(x, y-8, x, x + s);
    }
    
}

Platform.prototype.enemyRun = function(){
    if(this.enemy != null){
        this.enemy.bounds = [this.loc.x, this.loc.x + this.size];
        this.enemy.loc.y = this.loc.y-8;
        this.enemy.run();
    }
    // if(this.enemy.loved){
    //     this.enemy = null;
    // }
}

Platform.prototype.runDp = function(){
    this.loc.x -= this.vel;
    if(this.loc.x + this.size < 0){ //maybe change this with initila loc
        route.push(new Platform(this.loc.x, this.loc.y, this.size));
        this.loc.x = canvas.width + 104 - this.size; //this needs to be readjusted to work with movign backwards
        this.loc.y = 300 + Math.random()*80-40;
    }
}

Platform.prototype.runDr = function(){
    this.loc.x -= this.vel;
}


Platform.prototype.runA = function(){ // does not work
    this.loc.x += this.vel;
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
    if(h1.loc.x + 10 >= this.loc.x && h1.loc.x -10 <= this.loc.x + this.size){
        if(h1.loc.y + 10 >=this.loc.y && h1.loc.y + 10 <this.loc.y+2){
          h1.onPlatform = true;
          h1.jVel = 0;
          check = true;
        }
    }
}