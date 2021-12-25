let x = 5;
let y = 15;

const intervalId = setInterval(function () {
  
  if (x <= y){
    console.log(x);
    x++;
  }

}, 1000); 