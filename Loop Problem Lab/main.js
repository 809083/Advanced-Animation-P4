
var n = 100;
var arr;
window.onload = init;

function init(){
    arr = loadPrisArray(n);
    console.log(arr);
    console.log(getClosedLoop(4, arr))
    console.log(runPrisoners(arr));
    console.log(testProbability(1000, n));
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

function getClosedLoop(a, arr){
    let counter = 1;
    let current = arr[a];
    let target = a;
    while(current != target){
        counter++;
        current = arr[current];
    }
    return counter;
}

function runPrisoners(arr){
    for(let i = 0; i < arr.length; i++){
        if(getClosedLoop(i, arr) > arr.length/2){
            return false;
        }
    }
    return true;

}

function testProbability(t, n){ // t = number of times
    let arr2;
    let win = 0;
    for(let i = 0; i<t; i++){
        arr2 = loadPrisArray(n);
        if(runPrisoners(arr2)){
            win++;
        }
    }
    return "You won " + win + " times of " + t + " or " + 100*win/t + "% of the time";
}
