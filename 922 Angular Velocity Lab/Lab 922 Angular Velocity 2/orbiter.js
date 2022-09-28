function Orbiter(d, ang, orad, p) {  //diameter, angle, orbit radius, planet location (takes in JSVector)
  this.avel = Math.PI/6;
  this.rot = new JSVector(0, orad);
  this.rot.setDirection(ang);
  this.diam = d;
  this.ploc = new JSVector(p.x, p.y);
  this.loc = JSVector.addGetNew(this.ploc, this.rot);
  this.clrlist = ['#065535','#fdd800', '#0b7a85', '#00A36C', '#8b324d', '#c39797', '#9e58c7', '#138808'];
  this.clr = this.clrlist[Math.floor(Math.random()*this.clrlist.length)];
}
  
  Orbiter.prototype.run = function () {
    this.render();
    this.update();
  }

  
  Orbiter.prototype.render = function () {
    context.beginPath(); 
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2*Math.PI);
    context.strokeStyle = "black"; 
    context.fillStyle = this.clr; 
    context.stroke();
    context.fill();
    context.closePath(); 
  }
  
  Orbiter.prototype.update = function () {
    this.rot.rotate(this.avel);
    this.loc = this.ploc.add(this.rot);
  }