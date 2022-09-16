function Mover(x, y, d) {
    this.loc = new JSVector(x, y) //  add a location vector
    let dx = Math.random()*4-2;
    let dy = Math.random()*4-2;
    this.vel = new JSVector(dx, dy) // add a velocity vector
    this.acc = new JSVector(0, 0)//  add an acceleration vector
    this.diam = d;
  //  choose a random color from this array
    this.clrArray = ["#2255AA", "FF0022", "Chocolate", "FireBrick", "GreenYellow", "LightSeaGreen", "Teal"];;
    this.clrIndex = 5;
    this.clr = this.clrArray[this.clrIndex];
  }
  
  Mover.prototype.run = function () {
    this.render();
    this.clr = this.clrArray[this.clrIndex];
    this.overlap();
    this.update();
    this.bounce();
  }
  
  
  Mover.prototype.render = function () {
    context.beginPath();    // clear old path
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.clr;     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
  }

Mover.prototype.overlap = function () {
  for(let j = 0; j<movers.length; j++){
      if(movers[j] != this){
        if(this.loc.distance(movers[j].loc)<= 50){
          context.beginPath();
          context.moveTo(this.loc.x, this.loc.y);
          context.lineTo(movers[j].loc.x, movers[j].loc.y);
          context.strokeStyle = 'black';
          context.stroke();
        }
        if(this.loc.distance(movers[j].loc)<=this.diam/2 + movers[j].diam/2){ //sum of two radii must be less than distance
          this.acc = JSVector.subGetNew(this.loc, movers[j].loc);
          this.acc.normalize().multiply(0.025);
          if(this.clrIndex %5 == 0){
            this.clrIndex = 3;
          }
          else{
            this.clrIndex = 5;
            
          }
          if(movers[j].clrIndex %5 == 0){
            movers[j].clrIndex = 3;
          }
          else{
            movers[j].clrIndex = 5;
          }
      }
    }
    
  }
}


Mover.prototype.update = function () {
    this.vel.x += Math.random()*4-2;
    this.vel.y += Math.random()*4-2;
    this.acc.limit(0.75)
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(3);
  }
  
  Mover.prototype.bounce = function () {
    if(this.loc.y > canvas.height -this.diam || this.loc.y <0){
      this.vel.y = -this.vel.y;
      this.y = canvas.height - 1;
    }
    if(this.loc.x >canvas.width || this.loc.x <0){
      this.vel.x = -this.vel.x;
    }
  }

