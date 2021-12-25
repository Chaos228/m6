function chetNechet() {
    let n;
  n = arr.length;
  let chet = 0;
  let nechet = 0;
  for (let i = 0; i < n; i++){
    if (typeof arr[i] != 'number'){
      console.log("элемент номер " + i + " не число");
    }
    else {
      if (isNaN(arr[i])) {
        console.log("элемент номер " + i + " не число");
      }
      else {
        if (arr[i] === 0) {
          console.log("элемент номер " + i + " равен 0");
        }
        else {      
          if (arr[i] % 2 == 1) {
            nechet++;
          }
          else {
            chet++;
          }
        }
      }
    }
  }
  
  console.log("четных элементов " + chet);
  console.log("не четных элементов " + nechet);
  }
  
  let arr = [1,2,1,1,1,2,3,4,5,NaN,0];
  
  chetNechet();