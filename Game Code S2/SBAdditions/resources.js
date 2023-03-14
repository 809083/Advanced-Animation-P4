function Resources(x, y){
    this.loc = new JSVector(x, y)
    this.radius = 4;
    this.death = false;
    this.vel = 2;
}

Resources.prototype.run = function(){
    this.render();
    if(this.loc.distance(h1.loc) <= 12){
        this.death = true;
    }
}

Resources.prototype.runD = function(){ // does not work
    this.loc.x -= this.vel;
    if(this.loc.x<0){
        this.death = true;
    }
}



Resources.prototype.render = function(){
ctx.beginPath(); 
ctx.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
ctx.strokeStyle = "black";  // color to fill
ctx.fillStyle = "yellow";     // color to stroke
ctx.fill();     // render the fill
ctx.stroke();   // render the stroke

}
