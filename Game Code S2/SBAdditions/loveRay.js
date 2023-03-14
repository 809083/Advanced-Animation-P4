function LoveRay(x, y, d){ //d = max distance
    this.loc = new JSVector(x, y);
    this.distanceLeft = d;
    this.death = false;
    this.vel = 2;

}

LoveRay.prototype.run = function(){
    console.log(this.loc);
    this.loc.x += this.vel;
    this.distanceLeft -= this.vel;
    this.render();
    this.hit();

}

LoveRay.prototype.render = function(){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "purple";
    ctx.arc(this.loc.x, this.loc.y, 4, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}

LoveRay.prototype.hit = function(){
    if(this.distanceLeft <= 0){
        this.death = true;
    }
    for(let i = 0; i<platforms.length; i++){
        if(platforms[i].enemy != null){
            if(this.loc.distance(platforms[i].enemy.loc) <= 12){
                platforms[i].enemy = null;
            }
        }
    }
    for(let i = 0; i<route.length; i++){
        if(route[i].enemy != null){
            if(this.loc.distance(route[i].enemy.loc) <= 10){
                route[i].enemy = null;
            }
        }
    }


}