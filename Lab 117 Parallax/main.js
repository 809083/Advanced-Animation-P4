

// global variables for canvas and context
var game, canvas, ctx, back, h1, platforms;
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
  platforms = [];
  platforms[0] = new Platform(0, 200, 100);
  platforms[1] = new Platform(150, 250, 50);
  platforms[2] = new Platform(250, 300, 100);
  platforms[3] = new Platform(400, 270, 75);
  platforms[4] = new Platform(550, 280, 25);
  platforms[5] = new Platform(600, 310, 25);
  platforms[6] = new Platform(650, 340, 25);
  platforms[7] = new Platform(700, 400, 50);
  platforms[8] = new Platform(800, 375, 75);
  platforms[9] = new Platform(950, 320, 200);

  h1;//hero
  animate();
}


function animate(){
  ctx.fillStyle = 'rgba(0,0,0,.05)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update();
  for(let i = 0; i<back.length; i++){
    back[i].run();
  }
  for(let i = 0; i<platforms.length; i++){
    platforms[i].run();
  }
  requestAnimationFrame(animate);
}

  
