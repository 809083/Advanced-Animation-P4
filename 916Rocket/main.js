// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let rocket1;
let planet1;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    let x = Math.random()*canvas.width;
    let y = Math.random()*(canvas.height);
    rocket1 = new Rocket(x, y, 15);
    x = Math.random()*canvas.width;
    y = Math.random()*(canvas.height-15);
    planet1 = new Planet(x, y, 30);
    animate();      // kick off the animation
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    rocket1.run();
    planet1.run();
   requestAnimationFrame(animate); // next cycle
}


