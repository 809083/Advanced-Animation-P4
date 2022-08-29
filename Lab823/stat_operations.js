
arr1 = random_num(1, 100, 100);
console.log(arr1);
console.log(getMean(arr1));
console.log(getMedian(arr1));
console.log("Mode: " + getMode(arr1));


function random_num(a, b, n){ //preconditions a<b, n>0
let arr = [];
for(let i = 0; i<n; i++){
    arr[i] = Math.floor(Math.random()*(b-a))+a;
}
    return arr;
}

function getMean(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

function getMedian(arr){
    let temp = arr.sort();
    if(arr.length%2 == 0){
        return (arr[arr.length/2] + arr[arr.length/2+1])/2;
    }
    else   
        return arr[Math.floor(arr.length/2)];
}



function getMode(arr){ //delete first element of current best?
    let currentbest = [];
    let best = 1;
    let repetition;
    for(let i = 0; i<arr.length; i++){
        repetition = 1;
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                repetition++;
            }

        }
        if(repetition>best){
            currentbest = [];
            currentbest[0] = arr[i];
            best = repetition;
        }
        else if(repetition==best){
            currentbest.push(arr[i]);
        }
    }
    return currentbest;
} 