function Mover() {
  //mover properties
  this.loc = new JSVector(Math.random()*world.cnvMain.width-world.cnvMain.left, Math.random()*world.cnvMain.height-world.cnvMain.top);
  this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
  this.rad = 10;

 
}//++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ mover methods
Mover.prototype.run = function () {
  this.update();
  this.checkEdges();
  this.render();
}

Mover.prototype.update = function () {
 
}


Mover.prototype.checkEdges = function () {
 
}


Mover.prototype.render = function () {
   //  render balls in world
   
   //  render balls in mini map
    
}
