function NearBack(x){
    this.loc = new JSVector(x, 100); //choose y
    this.vel = 1.5;
}

NearBack.prototype.run = function(){
    this.loc.y //update to add velocity;
    this.render();
}

NearBack.prototype.render = function(){
    
}

