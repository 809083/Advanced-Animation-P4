
var n = 5;
var arr;
window.onload = init;

function init(){
    arr = loadPrisArray(n);
    console.log(arr);
    console.log(getClosedLoop(4))
}

function loadPrisArray(n){
    let temp = Math.floor(Math.random()*n);
    let ret = [];
    for(let i = 0; i<n; i++){
        ret.push(null);
    }
    for(let i = 0; i<n; i++){
        while(ret[temp] != null){
            temp = Math.floor(Math.random()*n);
        }
        ret[temp] = i;
    }
    return ret;
}

function getClosedLoop(a){
    let counter = 1;
    let current = arr[a];
    let target = a;
    while(current != target){
        counter++;
        current = arr[current];
    }
    return counter;
}

function runPrisoners(){ //run as many times as the length of the loop

}

function testProbability(t){ // t = number of times

}
