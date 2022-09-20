// function Rocket(x, y, d) {
//     this.loc = new JSVector(x, y) //  add a location vector
//     let dx = Math.random()*4-2;
//     let dy = Math.random()*4-2;
//     this.vel = new JSVector(dx, dy) // add a velocity vector
//     this.acc = new JSVector(0, 0)//  add an acceleration vector
//     this.diam = d;
//     this.clr = '#00A36C';
//}
  
  Rocket.prototype.run = function () {
    this.render();
    this.flames();
    this.update();
    this.bounce();
  }
  
  // Rocket.prototype.render = function () {
  //   context.save();
  //   context.translate(this.loc.x, this.loc.y);
  //   context.rotate(this.vel.getDirection());
  //   context.beginPath(); 
  //   context.moveTo(20, 0);
  //   context.lineTo(-20, 10);
  //   context.lineTo(-10, 0);
  //   context.lineTo(-20, -10);
  //   context.strokeStyle = "black"; 
  //   context.fillStyle = this.clr; 
  //   context.fill(); 
  //   context.restore();
  //   context.stroke(); 
  // }

  Rocket.prototype.flames = function () {
    let amod //modifier of porportions per acceleration;
    amod = this.acc.getMagnitude()*10 +0.5;
    if(this.acc !== 0){
      context.save();
      context.translate(this.loc.x, this.loc.y);
      context.rotate(this.vel.getDirection());
      context.beginPath(); 
      context.moveTo(-15, 0);
      context.lineTo(-30*amod, -10);
      context.lineTo(-25*amod, -2.5);
      context.lineTo(-30*amod, 0);
      context.lineTo(-25*amod, 2.5);
      context.lineTo(-30*amod, 10);
      context.strokeStyle = "black"; 
      //let f_color = '#DC143C';
      context.fillStyle = f_color; 
      context.fill(); 
      context.restore();
      context.stroke(); 
    }
  }
  
  Rocket.prototype.update = function () {
    this.acc = JSVector.subGetNew(planet1.loc, this.loc);
    this.acc.normalize().multiply(0.05);
    console.log(this.acc.getMagnitude());
    this.vel.limit(3);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  
  Rocket.prototype.bounce = function () {
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