function Orbiter(x, y, d, a) {
    this.loc = new JSVector(x, y) //  add a location vector
    this.angvelocity = Math.PI/6;
    //this.ang = a;
    this.loc.setDirection(a);
    this.diam = d;
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
    context.fill();
    context.stroke();
  }
  
  Orbiter.prototype.update = function () {//does not work at all: must rotate from planet with angle
    this.loc.rotate(angvelocity);
    //draw a line
  }