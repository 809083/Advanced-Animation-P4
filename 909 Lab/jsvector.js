
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0,y = 0){
    this.x = x;
    this.y = y;
}


// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
    let d = this.getDirection();
    this.y = mag*Math.sin(d);
    this.x = mag*Math.cos(d);
    return this;
}

// Return the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
    return Math.sqrt((this.x*this.x) + (this.y*this.y));
 }

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
    let m = this.getMagnitude();
    this.y = m*Math.sin(angle);
    this.x = m*Math.cos(angle);
    return this;
}

// Return the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
    return Math.atan2(this.y, this.x);
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
    this.x += v2.x;
    this.y += v2.y;
    return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
    this.x -= v2.x;
    this.y -= v2.y;
    return this;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
    return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
    return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
    this.x *=scalar;
    this.y *=scalar;
    return this;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
    this.x /=scalar;
    this.y /=scalar;
    return this;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
    this.setMagnitude(1);
    return this;
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
    if(this.getMagnitude() > lim){
        this.setMagnitude(lim);
    }
    return this;
}

// Return the distance between this vector and another one
//may need more testing for value returned
JSVector.prototype.distance = function(v2){
    return Math.sqrt(Math.pow(v2.x-this.x, 2) + Math.pow(v2.y-this.y, 2 ));
}

// Return the square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
    return Math.pow(this.distance(v2), 2);
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
//learn about rotation matrix
JSVector.prototype.rotate = function(angle) {
    /*TEST: attempt to use rotation Matrix
    equations source: Wikipedia
    this.x = this.x*Math.cos(angle) - this.y*Math.sin(angle);
    this.y = this.x*Math.sin(angle) + this.y*Math.cos(angle);*/
    this.setDirection(this.getDirection()+angle);
    return this;
}

// Return the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
    return this.getDirection() - v2.getDirection();
}

// Return a copy of this vector
JSVector.prototype.copy = function(){
    return new JSVector(this.x, this.y);
}

// Override inherited toString() to return a description of this instance
JSVector.prototype.toString = function() {
 return "(x, y): " + "(" + this.x + "' " + this.y + ")\nMagnitude: " + this.getMagnitude() + "\nDirection: " + this.getDirection();
}
