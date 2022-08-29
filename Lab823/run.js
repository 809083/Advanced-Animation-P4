window.addEventListener("load", init);

// global variables
let canvas, context;
let many = []; //makes an array of many balls;


function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");
    for(let i = 0; i<500; i++){
        many[i] = new Ball(Math.random()*canvas.width, Math.random()*canvas.height, (Math.random()*10) + 0.05, (Math.random()*10) + 0.05, 10);
    } 
    animate();
    //for(let i = 0; i<many.length; i++){
        //many[i].run(); //is this how you call the function?
    //}
}

function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i<many.length; i++){
        many[i].run();
    }
    requestAnimationFrame(animate);
}