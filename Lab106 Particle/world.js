function World() {

  this.cnvMain = document.getElementById('cnv1');
  this.ctxMain = this.cnvMain.getContext('2d');
  this.cnvMini = document.getElementById('cnv2');
  this.ctxMini = this.cnvMini.getContext('2d');
  //  vector to locate canvas in the world


  this.dims = {
    top: -1500,
    left: -2000,
    bottom: 1500,
    right: 2000,
    width: 4000,
    height: 3000
  }


  this.psystems = [];
  //this.psystems.push(new ParticleSystem(Math.random()*this.cnvMain.width, Math.random()*this.cnvMain.width, this.ctxMain, this.ctxMini, 30));
  //this.loadPSystems();

  //Step 1::reduce world to fit inside of mini Canvas
    this.scaleX = this.cnvMini.width/this.dims.width;
    this.scaleY = this.cnvMini.height/this.dims.height;
    this.cnvMainLoc = new JSVector(0, 0);

    this.cnvMain.addEventListener("click", function (event) {
      let cloc = new JSVector(event.offsetX, event.offsetY);
      cloc.add(world.cnvMainLoc);
      world.psystems.push(new ParticleSystem(cloc.x, cloc.y, world.ctxMain, world.ctxMini, 30));
    }, false);
  

}//++++++++++++++++++++++++++++++  end world 


// run the world in animation
World.prototype.run = function () {
  let ctx = this.ctxMain;
  let mini = this.ctxMini;
    //clear the rectangle in main canvas

  //  move the main canvas inside of the world
  ctx.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);
  mini.clearRect(0, 0, this.cnvMini.width, this.cnvMini.height);
  


  ctx.save();
  mini.save();
  ctx.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
  mini.translate(this.cnvMini.width/2, this.cnvMini.height/2);

  
  ctx.beginPath(); //draws axis main
  ctx.moveTo(this.dims.left, 0);
  ctx.lineTo(this.dims.right, 0);
  ctx.closePath();
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, this.dims.top);
  ctx.lineTo(0, this.dims.bottom);
  ctx.closePath();
  ctx.lineWidth = 20;
  ctx.stroke();


  ctx.beginPath(); //draws border main
  ctx.moveTo(this.dims.left, this.dims.top);
  ctx.lineTo(this.dims.left, this.dims.bottom);
  ctx.lineTo(this.dims.right, this.dims.bottom);
  ctx.lineTo(this.dims.right, this.dims.top);
  ctx.closePath();
  ctx.lineWidth = 20;
  ctx.stroke();

  //  scale the world to fit into the miniCanvas
  mini.scale(this.scaleX, this.scaleY);

  //  center the world inside of the miniCanvas
  //  run the movers in both canvas

  for (let i = 0; i < this.psystems.length; i++) {
    this.psystems[i].run();
  }


  ctx.restore();

  mini.beginPath(); //draws axis mini
  mini.moveTo(this.dims.left, 0);
  mini.lineTo(this.dims.right, 0);
  mini.closePath();
  mini.lineWidth = 20;
  mini.stroke();
  mini.beginPath();
  mini.moveTo(0, this.dims.top);
  mini.lineTo(0, this.dims.bottom);
  mini.closePath();
  mini.lineWidth = 20;
  mini.stroke();

  mini.beginPath(); //draws border mini
  mini.moveTo(this.cnvMainLoc.x, this.cnvMainLoc.y);
  mini.lineTo(this.cnvMainLoc.x, this.cnvMainLoc.y+this.cnvMain.height);
  mini.lineTo(this.cnvMainLoc.x + this.cnvMain.width, this.cnvMainLoc.y+this.cnvMain.height);
  mini.lineTo(this.cnvMainLoc.x + this.cnvMain.width, this.cnvMainLoc.y);
  mini.closePath();
  mini.lineWidth = 20;
  mini.stroke();



  mini.restore();
  //  restore the context

  // Step Three:  Draw the mainCanv and axes in the miniCanv ########################################################
  //    scale cnvMini to contain the entire world

  //    center the world in miniCnv

  //    draw x and y axes on miniMap

  //    outline box inside of cnvMini
}

World.prototype.getRandomColor = function () {
  //  List of hex color values for movers
  let colors = [
    "#7102AB",
    "#ab0256",
    "#0285ab",
    "#02ab1a",
    "#ab5302",
    "#773e26",
    "#ab0256",
    "#257874",
    "#78254e",
    "#787725"
  ];
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
