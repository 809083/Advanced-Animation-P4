function Particle(start, death, ctx1, ctx2) { //start will accept emitter.
  this.loc = new JSVector(start.x, start.y); //recode with JSVector
  this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
  this.acc = 0.05;
  this.rad = 5;
  this.life = Math.random()*5*death+10;
  this.isDead = false;
  this.ctx1 = ctx1;
  this.ctx2 = ctx2;
  this.clr = world.getRandomColor();
}

Particle.prototype.run = function(){
  this.render();
  this.update();
  this.bounds();
}

Particle.prototype.update = function(){
  if(this.life<=0){
    this.isDead = true;
  }
  else{
  this.loc.add(this.vel);
  this.vel.y+=this.acc;
  this.life--;
  }
}

Particle.prototype.render = function(){
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
   this.ctx2.fillStyle = this.clr;
   this.ctx2.fill();
   this.ctx2.stroke();
}

Particle.prototype.bounds = function(){
  if(this.loc.y>world.dims.bottom || this.loc.y<world.dims.top || this.loc.x>world.dims.right || this.loc.x<world.dims.left){
    this.isDead = true;
  }
}