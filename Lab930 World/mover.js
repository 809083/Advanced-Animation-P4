function Mover(x, y, ctx1, ctx2, r, clr) {
  //mover properties
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
  this.rad = r;
  this.ctx1 = ctx1;
  this.ctx2 = ctx2;
  this.clr = clr;

 
}//++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ mover methods
Mover.prototype.run = function () {
  this.update();
  this.checkEdges();
  this.render();
}

Mover.prototype.update = function () {
  this.loc.add(this.vel);
 
}


Mover.prototype.checkEdges = function () {
  if(this.loc.y < world.dims.top){
    this.vel.y*=-1;
  }
  if(this.loc.y > world.dims.bottom){
    this.vel.y*=-1;
  }
  if(this.loc.x < world.dims.left){
    this.vel.x*=-1;
 }
 if(this.loc.x > world.dims.right){
  this.vel.x*=-1;
}
}


Mover.prototype.render = function () {
  this.ctx1.beginPath();
   this.ctx1.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI*2);
   this.ctx1.closePath();
   this.ctx1.strokeStyle = this.clr;
   this.ctx1.fillStyle = this.clr;
   this.ctx1.fill();
   this.ctx1.stroke();

   this.ctx2.beginPath();
   this.ctx2.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI*2);
   this.ctx2.closePath();
   this.ctx1.strokeStyle = this.clr;
   this.ctx2.fillStyle = this.clr;
   this.ctx2.fill();
   this.ctx2.stroke();
    
}
