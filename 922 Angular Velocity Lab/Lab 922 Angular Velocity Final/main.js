// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let plist = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPlanets(15);
    animate();      // kick off the animation
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<plist.length; i++){
        plist[i].run();
    }
   requestAnimationFrame(animate); // next cycle
}

function loadPlanets(n) {
    for(let i = 0; i<n; i++){
        plist[i] = new Planet(Math.random()*canvas.width, Math.random()*canvas.height, 30, Math.floor(Math.random()*6+1, 50), 30);
    }
}


