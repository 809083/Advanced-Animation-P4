// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context, a, b, c, d, e, tag; 

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    a = Math.trunc(Math.random()*900+100);
    b = Math.trunc(Math.random()*90+10);
    c = " ";
    tag = 1; // 1 = num, 2 = poly
    animate();      // kick off the animation
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "100px serif";
    let adj = 0;
    if(tag == 2){
        adj = 100;
    }
    context.fillText(a + "   " + b, canvas.width/2-150-adj, canvas.height/2)
    context.font = "75px serif";
    context.fillText(c, canvas.width/2-300, canvas.height/2+100)
    requestAnimationFrame(animate); // next cycle
}


window.addEventListener("keypress", function (event) {
    switch (event.code) {
      case "KeyA":
        if(tag == 1){
        let temp = a*b;
        c = "Product: " + temp;
        }
        break;
      case "KeyB":
        if(tag == 1){
        let temp2 = [];
        let n = b + 0;
        while (n % 2 == 0){
            temp2.push(2);
            n = Math.floor(n/2);
            console.log(temp2);
            console.log(n);
        }
        for(let i = 3; i <= n; i+=2){
            console.log(temp2);
            console.log(n);
            while (n % i == 0){
                temp2.push(i);
                n = Math.floor(n/i);
            }
        }
        c = "2 Digit Factors: ";
        for(let j = 0; j<temp2.length-1; j++){
            c += temp2[j] + ", ";
        }
        c+=temp2[temp2.length-1];
        if(temp2.length <= 1){
            c = "2 Digit Factors: Prime";
        }
    }
        break;
    case "KeyC":
        if(tag == 1){
        let temp3 = [];
        let n2 = a + 0;
        while (n2 % 2 == 0){
            temp3.push(2);
            n2 = Math.floor(n2/2);
        }
        for(let i = 3; i <= n2; i+=2){
            while (n2 % i == 0){
                temp3.push(i);
                n2 = Math.floor(n2/i);
            }
        }
        c = "3 Digit Factors: ";
        for(let j = 0; j<temp3.length-1; j++){
            c += temp3[j] + ", ";
        }
        c+=temp3[temp3.length-1];
        if(temp3.length <= 1){
            c = "3 Digit Factors: Prime";
        }
    }
        break;
        case "KeyD":
            c = "";
            b = ""
            tag = 2;
            d = Math.trunc(Math.random()*24-12);
            while(d == 0){
                d = Math.trunc(Math.random()*24-12);
            }
            e = Math.trunc(Math.random()*24-12);
            while(e == 0){
                e = Math.trunc(Math.random()*24-12);
            }
            let co = Math.trunc(Math.random()*10-5);
            while(co == 0){
                co = Math.trunc(Math.random()*10-5);
            }
            let temp4 = [co, -(d+e)*co, co*d*e, "+", "+"]
            if(temp4[1] < 0){
                temp4[3] = "";
                if(temp4[1] == -1){
                    temp4[1] = "-x";
                }
                else{
                    temp4[1] += "x";
                }
            }
            else if(temp4[1] == 0){
                temp4[1] = "";
                temp4[3] = "";
            }
            else if(temp4[1] == 1){
                temp4[1] = "x";
            }
            else{
                temp4[1] += "x";
            }
            if(temp4[2] < 0){
                temp4[4] = "";
            }
            a = co + "x^2" + " " + temp4[3] + temp4[1] + temp4[4] + temp4[2];

            break;
        case "KeyE":
            if(tag == 2){
                c = "x = " + d + "  x = " + e;
            }
            break;
      case "Space":
        a = Math.trunc(Math.random()*900+100);
        b = Math.trunc(Math.random()*90+10);
        c = "";
        tag = 1;
        break;
    }
  }, false);