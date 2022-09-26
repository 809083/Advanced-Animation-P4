function Orbiter(d, a, o, p) { //x position, y position, diameter, angle, orbit radius, planet location (takes in JSVector)
    this.ploc = new JSVector(p.x, p.y);
    this.orad = o; //orbit radius
    this.ang = a;
    this.loc = new JSVector(this.ploc.x+this.orad*Math.cos(this.ang), this.ploc.y+this.orad*Math.sin(this.ang)) //  add a location vector
    this.angvelocity = Math.PI/36;
    this.diam = d;
    this.clrlist = ['#065535','#fdd800', '#0b7a85', '#00A36C', '#8b324d', '#c39797', '#9e58c7', '#138808'];
    this.clr = this.clrlist[Math.floor(Math.random()*this.clrlist.length)];
}
  
  Orbiter.prototype.run = function () {
    this.render();
    this.update();
  }

  
  Orbiter.prototype.render = function () {
    // context.beginPath(); //line: produces lightning in loop around canvas
    // context.moveTo(this.loc.x, this.loc.y);
    // context.lineTo(this.ploc.x, this.ploc.y);
    // context.strokeStyle = "white";
    // context.stroke();
    // context.closePath();
    context.beginPath(); //orbiter
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2*Math.PI);
    context.strokeStyle = "black"; 
    context.fillStyle = this.clr; 
    context.stroke();
    context.fill();
    context.closePath();
  }
  
  Orbiter.prototype.update = function () {//does not work at all: must rotate from planet with angle
    this.ang+=this.angvelocity;
    this.loc.x = this.ploc.x + this.orad*Math.cos(this.ang);
    this.loc.y = this.ploc.y + this.orad*Math.sin(this.ang);
    //draw a line
  }