// A Snake Example
function World(){
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    for( let i = 0; i < numSnakes; i++){
        snakes[i] = new Snake(Math.random()*this.canvas.width, Math.random()*this.canvas.height, 10, 15);
    }
   
}

World.prototype.run = function(){
    for(let i = 0; i<snakes.length; i++){
    snakes[i].run();
    }
}
