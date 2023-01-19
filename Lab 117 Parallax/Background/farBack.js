function FarBack(x){
    this.loc = new JSVector(x, 100); //choose y
    this.vel = 0.5;
}

FarBack.prototype.run = function(){
    this.loc.y //update to add velocity;
}