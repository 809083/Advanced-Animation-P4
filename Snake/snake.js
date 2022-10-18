// Snake constructor

function Snake(x, y, numSegs, segLength) {
    //  number of segments, segment length
    this.loc = new JSVector(x, y);
    this.numSegs = numSegs;
    this.segLength = segLength;
    this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
    this.segments = [];
    this.loadSegments();
    this.clr = "red";
}

Snake.prototype.loadSegments = function () {
    let ploc = new JSVector(this.loc.x, this.loc.y);
    for(let i = 0; i<this.numSegs; i++){
        let vel2 = new JSVector(this.vel.x, this.vel.y);
        vel2.setMagnitude(this.segLength);
        let vec = JSVector.addGetNew(ploc, vel2);
        this.segments.push(vec); //potential error
        ploc = new JSVector(vec.x, vec.y);
    }
    console.log(this.segments);

}

Snake.prototype.run = function () {
    //this.update();
    this.render();

}

Snake.prototype.update = function () {
    let nvel;
    this.loc.add(this.vel);
    for(let i = 0; i<this.segments.length; i++){
        nvel = JSVector.subGetNew(this.loc.x - this.segments[i].x, this.loc.y - this.segments[i].y); //needs vectors also not right dont use velocity
        this.segments[i].add(nvel);
    }

}

Snake.prototype.render = function () {
    world.ctx.beginPath();
    world.ctx.arc(this.loc.x, this.loc.y, 14, 0, 2 * Math.PI); 
    world.ctx.strokeStyle = "black";  
    world.ctx.fillStyle = this.clr;   
    world.ctx.fill(); 
    world.ctx.stroke(); 
    for(let i = 0; i<this.segments.length; i++){
        world.ctx.beginPath();
        world.ctx.arc(this.segments[i].x, this.segments[i].y, 4, 0, 2 * Math.PI); 
        world.ctx.strokeStyle = "black";  
        world.ctx.fillStyle = this.clr;   
        world.ctx.fill(); 
        world.ctx.stroke(); 
    }

}

