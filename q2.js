function easyNumber(x) {
    let res = true;
    
    if (x > 1000 | x <= 1) {
      console.log("Данные не верны");
    }
    else {
      for (let i = 2; i < x; i++) {
        if (x % i === 0) {
          res = false;
          break;
        }
      }
      if (res === false) {
        console.log("Число не простое");
      }
      else {
        console.log("Число простое");
      }
    }
  }
  easyNumber(111);