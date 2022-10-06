function Particle(start, death) { //start will accept emitter.
  this.loc = new JSVector(start.x, start.y); //recode with JSVector
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
  thic.acc = 0.05;
  this.death = Math.random()*100*death+400;
  this.isDead = false;
}
