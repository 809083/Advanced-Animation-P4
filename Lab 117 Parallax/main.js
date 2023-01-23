

// global variables for canvas and context
var game, canvas, ctx, back;
window.onload = init;//  After the window has been loaded, go to init

function init(){
  canvas = document.createElement('canvas');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  canvas.width = 1096;  // 800 - 4 for the border
  canvas.height = 696; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  back = [];
  back[0] = new FarBack(0);
  back[1] = new FarBack(-canvas.width);
  back[2] = new MidBack(0);
  back[3] = new MidBack(-canvas.width);
  back[4] = new NearBack(0);
  back[5] = new NearBack(-canvas.width);
  animate();
}


function animate(){
  ctx.fillStyle = 'rgba(0,0,0,.05)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update();
  for(let i = 0; i<back.length; i++){
    back[i].run();
  }
  requestAnimationFrame(animate);
}

  
