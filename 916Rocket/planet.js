function Planet(x, y, d) {
    this.loc = new JSVector(x, y) //  add a location vector
    let dx = 0;
    let dy = 0;
    this.vel = new JSVector(dx, dy) // add a velocity vector
    this.acc = new JSVector(0, 0)//  add an acceleration vector
    this.diam = d;
    this.clr = '#00A36C';
  
  Planet.prototype.run = function () {
    this.render();
    this.update();
    this.reappear();
  }
}
  
  Planet.prototype.render = function () {
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.beginPath(); 
    this.clr = '#FF69B4';
    context.arc(0, 0, this.diam, 0, 2*Math.PI);
    context.strokeStyle = "black"; 
    context.fillStyle = this.clr; 
    context.fill(); 
    context.restore();
    context.stroke(); 
  }
  
  Planet.prototype.update = function () {
    if(this.loc.distance(rocket1.loc) <= 200){
        this.acc = JSVector.subGetNew(this.loc, rocket1.loc);
        this.acc.normalize().multiply(0.5);
    }
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.loc.add(this.vel);
  }
  
  Planet.prototype.reappear = function () {
    if(this.loc.y > canvas.height || this.loc.y <0 || this.loc.x >canvas.width || this.loc.x <0){
        this.loc.x = x = Math.random()*(canvas.width-50)+50;
        this.loc.y = Math.random()*(canvas.height-50)+50;
        this.vel.setMagnitude(0);
        this.acc.setMagnitude(0);
      }
  }