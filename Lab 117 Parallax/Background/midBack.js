function MidBack(x){
    this.loc = new JSVector(x, 100); //choose y
    this.vel = 1;
}

MidBack.prototype.run = function(){
    this.loc.y //update to add velocity;
    this.render();
}

MidBack.prototype.render = function(){
    
}

