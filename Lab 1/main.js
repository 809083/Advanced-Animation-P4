'use strict'
//13:37
var x = {
    a:3,
    b:12
};

var y = x;

//Object Factory pattern
var BallFactory = function(r){
    var ball = {
        rad: r
    }
    return ball;
}

//Constructor Function Pattern
function Ball(r){
    this.rad = r;
    /*this.diam = function(){ 
        return 2*this.rad;
    } */
}

// Adding methods to the prototype pattern
Ball.prototype.diam = function(){
    return 2*this.rad;
}