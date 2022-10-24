// Snake constructor

function Snake(x, y, numSegs, segLength) {
    //  number of segments, segment length
    this.loc = new JSVector(x, y);
    this.numSegs = numSegs;
    this.segLength = segLength;
    this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
    this.segments = [];
    this.loadSegments();
    this.clr = "lime";
    this.hrad = 14;
}

Snake.prototype.loadSegments = function () {
    let ploc = new JSVector(this.loc.x, this.loc.y);
    for(let i = 0; i<this.numSegs; i++){
        let vel2 = new JSVector(this.vel.x, this.vel.y);
        vel2.setMagnitude(this.segLength);
        let vec = JSVector.subGetNew(ploc, vel2);
        this.segments.push(vec); //potential error
        ploc = new JSVector(vec.x, vec.y);
    }

}

Snake.prototype.run = function () {
    this.render();
    this.update();
    this.bounce();

}


Snake.prototype.update = function () {
    Snake.prototype.update = function () {
        this.loc.add(this.vel);
        let temp;
        let ploc = new JSVector(this.loc.x, this.loc.y);
        let dis;
        for(let i = 0; i<this.segments.length; i++){
            temp= new JSVector(this.segments[i].x, this.segments[i].y);
            temp = JSVector.subGetNew(temp, ploc);
            temp.limit(this.vel.getMagnitude());
            temp.multiply(-1);
            this.segments[i].add(temp);
            dis = this.segments[i].distance(ploc);
            if(dis<this.segLength){
                temp.setMagnitude(this.segLength-dis);
                this.segments[i].sub(temp); 
            }
                ploc = this.segments[i];
            }
        }
}


Snake.prototype.render = function () {
    let ploc = new JSVector(this.loc.x, this.loc.y);
    for(let i = 0; i<this.segments.length; i++){
        world.ctx.moveTo(ploc.x, ploc.y);
        world.ctx.lineTo(this.segments[i].x, this.segments[i].y);
        world.ctx.strokeStyle = this.clr;
        world.ctx.stroke();
        ploc = new JSVector(this.segments[i].x, this.segments[i].y);
        world.ctx.beginPath();
        world.ctx.arc(this.segments[i].x, this.segments[i].y, 4, 0, 2 * Math.PI); 
        world.ctx.strokeStyle = this.clr;  
        world.ctx.fillStyle = "black";   
        world.ctx.fill(); 
        world.ctx.stroke();
        world.ctx.closePath();
    }
    world.ctx.beginPath();
    world.ctx.arc(this.loc.x, this.loc.y, this.hrad, 0, 2 * Math.PI); 
    world.ctx.strokeStyle = this.clr;  
    world.ctx.fillStyle = "black";   
    world.ctx.fill(); 
    world.ctx.stroke(); 
    world.ctx.closePath();

}

Snake.prototype.bounce = function (){
if(this.loc.y > canvas.height || this.loc.y <0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.x >canvas.width || this.loc.x <0){
    this.vel.x = -this.vel.x;
  }
}
