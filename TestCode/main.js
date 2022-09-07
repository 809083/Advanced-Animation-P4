

// wait for the page to finish loading with init as the callback
window.addEventListener("load", vectorTest);

// global variables


function vectorTest() {

   let v1 = new JSVector(30, 40);
   console.log(v1.getMagnitude())
   console.log(v1.getDirection())

   v1.normalize()
   console.log(v1.getMagnitude())
   console.log(v1.getDirection())
}



