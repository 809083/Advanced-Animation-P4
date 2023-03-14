

// global variables for canvas and context
var game, canvas, ctx, back, h1, platforms, t1, check, res, route;
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
  let p = 0;//canvas.width/2; //adjustment from initial set-up
  let n = [];
  for(let i = 0; i<11; i++){
    n[i] = Math.random()*80-40;
  }
  platforms[0] = new Platform(0 + p, 300 + n[0], 101);
  platforms[1] = new Platform(150 + p, 300 + n[1], 50);
  platforms[2] = new Platform(250 + p, 300 + n[2], 100);
  platforms[3] = new Platform(400 + p, 300 + n[3], 75);
  platforms[4] = new Platform(550 + p, 300 + n[4], 25);
  platforms[5] = new Platform(600 + p, 300 + n[5], 25);
  platforms[6] = new Platform(650 + p, 300 + n[6], 25);
  platforms[7] = new Platform(700 + p, 300 + n[7], 50);
  platforms[8] = new Platform(800 + p, 300 + n[8], 100);
  platforms[9] = new Platform(950 + p, 300 + n[9], 120);
  platforms[10] = new Platform(1100 + p, 300 + n[10], 75);
  check = false;
  h1 = new Hero(300, 200);
  t1 = new Trap(); //trap

  res = [];
  route = [];
  for(let i = 0; i<100; i++){
    res[i] = new Resources(Math.random()*canvas.width*20, Math.random()*245+75);

  }
  animate();
}


function animate(){
  check = false;
  ctx.fillStyle = 'rgba(0,0,0,.05)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update();
  for(let i = 0; i<back.length; i++){
    back[i].render();
  }
  for(let i = res.length -1; i>=0; i--){
    if(res[i].death){
      res[i] = new Resources(canvas.width + Math.random()*canvas.width, Math.random()*245+75);
    }
    res[i].run();
  }
  for(let i = 0; i<platforms.length; i++){
    platforms[i].render();
    platforms[i].stopChar();
    platforms[i].enemyRun();
  }
  for(let i = 0; i<route.length; i++){
    route[i].render();
    route[i].stopChar();
    route[i].enemyRun();
  }
  if(!check){
    h1.onPlatform = false;
  }
  h1.run();
  t1.run();

  requestAnimationFrame(animate);
}

window.addEventListener("keypress", function (event) {
  switch (event.code) {
    case "KeyW":
      if(h1.onPlatform){
        h1.loc.y -= 3;
        h1.jVel = -5.5;
        h1.jump = true;
        h1.onPlatform = false;
      }
      break;
    case "KeyA":
      for(let i = 0; i<back.length; i++){
        back[i].runA();
        for(let i = 0; i<platforms.length; i++){
          platforms[i].runA(); //does not yet work
          
        }

        for(let i = 0; i<route.length; i++){
          route[i].runA(); //does not yet work
          
        }
      }
      break;
    case "KeyD":
      for(let i = 0; i<back.length; i++){
        back[i].runD();
      }
      for(let i = 0; i<platforms.length; i++){
        platforms[i].runDp();
        if(platforms[i].enemy != null){
          platforms[i].enemy.adjust = -2;
        }
      }
      for(let i = 0; i<route.length; i++){
        route[i].runDr();
        if(route[i].enemy != null){
          route[i].enemy.adjust = -2;
        }
      }
      for(let i = 0; i<res.length; i++){
        res[i].runD();
      }
      break;
      case "Space":
        h1.love();
        break;
  }
}, false);


  
