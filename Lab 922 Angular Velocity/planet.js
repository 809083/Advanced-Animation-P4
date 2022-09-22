function Planet(x, y, d, n, or) {
    this.loc = new JSVector(x, y) //  add a location vector
    this.vel = new JSVector( Math.random()*4-2,  Math.random()*4-2) // add a velocity vector
    this.diam = d;
    this.orad = or; //orbit radius
    this.orbs = [];
    let start = 0;
    for(let i = 0; i<this.orbs.length; i++){
      this.orbs[i] = new Orbiter(this.loc.x+orad, this.loc.y + orad, 3, start); // start vector at planet and end at position
      this.orbs[i].setMagnitude(orad);
      start+= (Math.PI*2)/(n);
    }
    this.clrlist = ['#065535','#fdd800', '#0b7a85', '#00A36C', '#8b324d', '#c39797', '#9e58c7', '#138808'];
    this.clr = this.clrlist[Math.floor(Math.random()*this.clrlist.length)];
  
  Planet.prototype.run = function () {
    this.render();
    this.update();
    this.bounce();
  }
}
  
  Planet.prototype.render = function () {
    context.beginPath(); 
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2*Math.PI);
    context.strokeStyle = "black"; 
    context.fillStyle = this.clr; 
    context.fill(); 
    context.stroke(); 
  }
  
  Planet.prototype.update = function () {
    this.loc.add(this.vel);
    for(let i = 0; i<this.orbs.length; i++){
      this.orbs[i].run();
    }
  }

  Planet.prototype.bounce = function () {
    if(this.loc.y > canvas.height){
      this.loc.y = 0;
    }
    else if(this.loc.y <0){
      this.loc.y = canvas.height;
    }
    if(this.loc.x >canvas.width){
      this.loc.x = 0;
    }
    else if(this.loc.x <0){
      this.loc.x = canvas.width;
    }

  }