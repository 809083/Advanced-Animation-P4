function Rocket(x, y, d) {
    this.loc = new JSVector(x, y) //  add a location vector
    let dx = Math.random()*4-2;
    let dy = Math.random()*4-2;
    this.vel = new JSVector(dx, dy) // add a velocity vector
    this.acc = new JSVector(0, 0)//  add an acceleration vector
    this.diam = d;
    this.clr = '#00A36C';
  
  Rocket.prototype.run = function () {
    this.render();
    this.update();
    this.bounce();
  }
}
  
  Rocket.prototype.render = function () {
    if(this === rocket1){
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.beginPath(); 
    context.moveTo(20, 0);
    context.lineTo(-20, 10);
    context.lineTo(-10, 0);
    context.lineTo(-20, -10);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.clr;     // color to stroke
    context.fill(); 
    context.restore();
    context.stroke(); 
    }
    else{
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.beginPath(); 
    context.arc(0, 0, this.diam, 0, 2*Math.PI);
    context.strokeStyle = "black";  // color to fill
    this.clr = '#FF69B4';
    context.fillStyle = this.clr;     // color to stroke
    context.fill(); 
    context.restore();
    context.stroke(); 
    }
  }
  
  Rocket.prototype.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  
  Rocket.prototype.bounce = function () {
    if(this.loc.y > canvas.height){
      this.loc.y = 0;
      //this.vel.y = -this.vel.y;
    }
    else if(this.loc.y <0){
      this.loc.y = canvas.height;
    }
    if(this.loc.x >canvas.width){
      this.loc.x = 0;
      //this.vel.x = -this.vel.x;8/
    }
    else if(this.loc.x <0){
      this.loc.x = canvas.width;
    }

  }