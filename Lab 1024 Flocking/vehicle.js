//  Vehicle constructor function +++++++++++++++++++++++++++++ 2, 2, 5, 5, 2.7
function Vehicle(loc) {
  this.loc = new JSVector(loc.x, loc.y);
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);
 
  this.clr = "rgba(180,0,220,.8)";
  this.maxSpeed = document.getElementById("slider2").value;  // %%%%%%%%%%%%%%%%%
  this.maxForce = document.getElementById("slider1").value;  // %%%%%%%%%%%%%%%%%
  //############################################################################# not attached to slider
  this.desiredSep = 30;//  desired separation between vehicles
  this.scl = 3;
  this.desiredCoh= 100;
}

//  placing methods in the prototype 
Vehicle.prototype.run = function (vehicles) {
  this.flock(vehicles);
  this.update();
  this.checkEdges()
  this.render();
}

Vehicle.prototype.flock = function(vehicles) {
  //  flock force is the accumulation of all forces
  let flockForce = new JSVector(0,0);
  // set up force vectors to be added to acc
  let sep = this.separate();
  let ali = this.align();
  let coh = this.cohesion();
  //  set multiples via sliders 
  let sepMult = document.getElementById("slider3").value; // %%%%%%%%%%%%%%%%%%
  let aliMult = document.getElementById("slider4").value;;  // %%%%%%%%%%%%%%%%%%
  let cohMult = document.getElementById("slider5").value;;    // %%%%%%%%%%%%%%%%%%
  //  calculate three forces
  sep.multiply(sepMult);
  ali.multiply(aliMult);
  coh.multiply(cohMult);
  //  add each of these to flockForce
  flockForce.add(sep);
  flockForce.add(ali);
  flockForce.add(coh);
  this.acc.add(flockForce);
}
//+++++++++++++++++++++++++++++++++  Flocking functions


Vehicle.prototype.separate = function () {
  // A vector for average of separation forces
  let v = world.vehicles;
  let ds = this.desiredSep*this.desiredSep;
  let sum = new JSVector(0,0);
  let steer = new JSVector();
  let count = 0;
    for (let other = 0; other < v.length; other++) {
       if(this !== v[other]){
        let d = this.loc.distanceSquared(v[other].loc);
        if(d < ds){
          let diff = JSVector.subGetNew(this.loc, v[other].loc);
          diff.normalize();
          sum.add(diff);
          count++;
        }
       }
    }
    
    if(count !== 0){
      sum.divide(count);
      sum.normalize();
      sum.multiply(this.maxSpeed);
      steer = JSVector.subGetNew(sum, this.vel);
      steer.limit(this.maxForce)
    }
  let separationForce = steer;
  return separationForce;
}

//align
Vehicle.prototype.align = function () {
  let v = world.vehicles;
  let sum = new JSVector(0,0);
  let inc = 0;
  for(let i = 0; i<v.length; i++){
    let dis = this.loc.distance(v[i].loc);
    if(dis>0 && dis< this.desiredCoh){ //make variable later
      inc++;
      sum.add(v[i].vel);
    }
  }
  if(inc != 0){
    sum.divide(inc);
    }
    else{
      sum = new JSVector(0, 0);
    }
  let steeringForce = sum;
  return steeringForce;
}

Vehicle.prototype.cohesion = function () {
  // A vector for average of separation forces
  let v = world.vehicles;
  let dc = this.desiredCoh*this.desiredCoh;
  let sum = new JSVector(0,0);
  let steer = new JSVector();
  let count = 0;
    for (let other = 0; other < v.length; other++) {
       if(this !== v[other]){
        let d =this.loc.distanceSquared(v[other].loc);
        if(d < dc){
          let diff = JSVector.subGetNew(v[other].loc, this.loc);
          diff.normalize();
          sum.add(diff);
          count++;
        }
       }
    }
    
    if(count !== 0){
      sum.divide(count);
      sum.normalize();
      sum.multiply(this.maxSpeed);
      steer = JSVector.subGetNew(sum, this.vel);
      steer.limit(this.maxForce);
    }
  let cohesionForce = steer;
  return cohesionForce;
}






Vehicle.prototype.seek = function(target) {
  let seek = JSVector.subGetNew(target, this.loc);
  seek.setMagnitude(this.maxSpeed);
  let steeringForce = JSVector.subGetNew(seek, this.vel);
    // A vector pointing from the location to the target
  return steeringForce;
}
//+++++++++++++++++++++++++++++++++  Flocking functions

Vehicle.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(1);
  this.loc.add(this.vel);
}

Vehicle.prototype.checkEdges = function () {
  if(this.loc.x > world.canvas.width) this.loc.x = 0;
  if(this.loc.x < 0) this.loc.x = world.canvas.width;
  if(this.loc.y > world.canvas.height) this.loc.y = 0;
  if(this.loc.y < 0) this.loc.y = world.canvas.height;
}

Vehicle.prototype.render = function () {
  let ctx = world.ctx;
  ctx.save();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection() + Math.PI / 2); //offset 90 degrees
  ctx.beginPath();
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.moveTo(0, -this.scl);
  ctx.lineTo(-this.scl, this.scl);
  ctx.lineTo(0, 0);
  ctx.lineTo(this.scl, this.scl);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

