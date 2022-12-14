function Orbiter(d, ang, orad, pl) {  //diameter, angle, orbit radius, planet
  this.avel = Math.PI/36;
  this.rot = new JSVector(0, orad);
  this.rot.setDirection(ang);
  this.diam = d;
  this.planet = pl;
  this.clrlist = ['#065535','#fdd800', '#0b7a85', '#00A36C', '#8b324d', '#c39797', '#9e58c7', '#138808'];
  this.clrlist2 = ['8f305b', '9c0047','828081', '2a7e43', '727272', '008929', 'aab700', '9fa838'];
  this.clr = this.clrlist[Math.floor(Math.random()*this.clrlist.length)];
}
  
  Orbiter.prototype.run = function () {
    this.update();
    this.render();
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
    this.loc = JSVector.addGetNew(this.planet.loc, this.rot);
  }