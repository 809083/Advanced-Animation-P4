// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
canvas = document.getElementById("cnv");
context = canvas.getContext("2d");

let rocket1 = {
    loc : new JSVector(Math.random()*canvas.width, Math.random()*(canvas.height)),
    vel : new JSVector(Math.random()*4-2, Math.random()*4-2),
    acc : new JSVector(0, 0.05),
    clr : '#00A36C',
    f_color : '#DC143C'
};

let planet1 = {
    loc : new JSVector(Math.random()*canvas.width-15, Math.random()*(canvas.height)), //  add a location vector
    vel : new JSVector(0, 0), // add a velocity vector
    acc : new JSVector(0, 0),//  add an acceleration vector
    diam : 30,
    clr : '#FF69B4'
};

function init() {
    // let x = Math.random()*canvas.width;
    // let y = Math.random()*(canvas.height);
    //rocket1 = new Rocket(x, y, 15);
    animate();      // kick off the animation
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // rocket1.run();
    rocket1.render();
    rocket1.flames();
    rocket1.update();
    rocket1.bounce();
    planet1.render();
    planet1.update();
    planet1.reappear();
   requestAnimationFrame(animate); // next cycle
}

rocket1.render = function(){
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.beginPath(); 
    context.moveTo(20, 0);
    context.lineTo(-20, 10);
    context.lineTo(-10, 0);
    context.lineTo(-20, -10);
    context.strokeStyle = "black"; 
    context.fillStyle = this.clr; 
    context.fill(); 
    context.restore();
    context.stroke(); 
}

planet1.render = function(){
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

planet1.update = function(){
    if(this.loc.distance(rocket1.loc) <= 200){
        this.acc = JSVector.subGetNew(this.loc, rocket1.loc);
        this.acc.normalize().multiply(0.5);
    }
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.loc.add(this.vel);
}

planet1.reappear = function(){
    if(this.loc.y > canvas.height || this.loc.y <0 || this.loc.x >canvas.width || this.loc.x <0){
        this.loc.x = Math.random()*(canvas.width-50)+50;
        this.loc.y = Math.random()*(canvas.height-50)+50;
        this.vel.setMagnitude(0);
        this.acc.setMagnitude(0);
    }
}

rocket1.flames = function(){
    let amod //modifier of porportions per acceleration;
    amod = this.vel.getMagnitude()*0.5 +0.25;
    if(this.vel !== 0){
      context.save();
      context.translate(this.loc.x, this.loc.y);
      context.rotate(this.vel.getDirection());
      context.beginPath(); 
      context.moveTo(-15, 0);
      context.lineTo(-16*amod, -5);
      context.lineTo(-30*amod, -0);
      context.lineTo(-16*amod, 5);
    //   context.moveTo(-15, 0);
    //   context.lineTo(-30*amod, -10);
    //   context.lineTo(-25*amod, -2.5);
    //   context.lineTo(-30*amod, 0);
    //   context.lineTo(-25*amod, 2.5);
    //   context.lineTo(-30*amod, 10);
      context.strokeStyle = "black"; 
      //let f_color = '#DC143C';
      context.fillStyle = this.f_color; 
      context.fill(); 
      context.restore();
      context.stroke(); 
    }
}

rocket1.update = function(){
    this.acc = JSVector.subGetNew(planet1.loc, this.loc);
    this.acc.normalize().multiply(0.05);
    this.vel.limit(3);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
}

rocket1.bounce = function(){
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