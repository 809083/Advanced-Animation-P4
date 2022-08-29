/*window.addEventListener("load", init);

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
    for(let i = 0; i<many.length; i++){
        many[i].run; //is this how you call the function?
    }
}

*/

function Ball(x, y, dx, dy, r){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
}

Ball.prototype.run = function(){
    //context.clearRect(0,0,canvas.width,canvas.height);
    this.bounce();
    this.update();   // update location
    this.render();     // render
    //requestAnimationFrame(this.run()); // next cycle
}

Ball.prototype.render = function(){
    let radius = this.r; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "blue";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

Ball.prototype.update = function(){
    this.x += this.dx;
    this.y = this.dy;
}

Ball.prototype.bounce = function(){
    if(this.x+this.dx>canvas.width){
        this.dx = -this.dx;
    }
    if(this.y+this.dy>canvas.height){
        this.dy = -this.dy;
    }
}
