function Mover(x, y, d) {
    this.loc = new JSVector(x, y) //  add a location vector
    let dx = Math.random()*4-2;
    let dy = Math.random()*4-2;
    this.vel = new JSVector(dx, dy) // add a velocity vector
    this.acc = new JSVector(0, 0)//  add an acceleration vector
    this.diam = d;
  //  choose a random color from this array
    this.clrArray = ["#2255AA", "FF0022", "Chocolate", "FireBrick", "GreenYellow", "LightSeaGreen", "Teal"];;
    this.clrIndex = Math.floor(Math.random() * this.clrArray.length);
    this.clr = this.clrArray[this.clrIndex];
  }
  
  Mover.prototype.run = function () {
    this.render();
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
  
  Mover.prototype.update = function () {
    this.vel.add(this.acc);
    this.acc.limit(1)
    this.loc.add(this.vel);
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