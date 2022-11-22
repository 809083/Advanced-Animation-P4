// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let movers = [];
//let repeller;


function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadMovers(100);
    animate();      // kick off the animation
}


function loadMovers(n){
    for(let i = 0; i < n; i++){
        //  fill an array with n movers
        let x = Math.random()*canvas.width;
        let y = Math.random()*(canvas.height-40);
        movers.push(new Mover(x, y, 7));
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for(let i = 0; i<movers.length; i++){
        movers[i].run();
    }

    requestAnimationFrame(animate); // next cycle
}


