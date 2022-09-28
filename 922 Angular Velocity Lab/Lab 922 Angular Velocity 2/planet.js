function Planet(x, y, d, n, or) { //x value, y value, diameter, 
    this.loc = new JSVector(x, y) //  add a location vector
    this.vel = new JSVector( Math.random()*4-2,  Math.random()*4-2) // add a velocity vector
    this.side = d;
    this.orbs = [];
    let start = 0;
    for(let i = 0; i<n; i++){
      this.orbs[i] = new Orbiter(7, start, or, this.loc); // start vector at planet and end at position
      //diameter, angle, orbit radius, planet location (takes in JSVector)
      start+= (Math.PI*2)/(n);
    }
    this.clrlist = ['#065535','#fdd800', '#0b7a85', '#00A36C', '#8b324d', '#c39797', '#9e58c7', '#138808'];
    this.clr = this.clrlist[Math.floor(Math.random()*this.clrlist.length)];
  }
  
  Planet.prototype.run = function () {
    this.render();
    this.update();
    for(let i = 0; i<this.orbs.length; i++){
      this.orbs[i].ploc.x = this.loc.x;
      this.orbs[i].ploc.y = this.loc.y;
      this.orbs[i].run();
    this.bounce();
    }
  }
  
  Planet.prototype.render = function () {
    context.beginPath(); 
    context.lineTo(this.loc.x-this.side/2, this.loc.y+this.side/2);
    context.lineTo(this.loc.x-this.side/2, this.loc.y-this.side/2);
    context.lineTo(this.loc.x+this.side/2, this.loc.y-this.side/2);
    context.lineTo(this.loc.x+this.side/2, this.loc.y+this.side/2);
    context.strokeStyle = "black"; 
    context.fillStyle = this.clr; 
    context.fill(); 
    context.stroke(); 
  }
  
  Planet.prototype.update = function () {
    this.loc.add(this.vel);
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