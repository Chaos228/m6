function cur(f){
    return function(a){
      return function(b){
        return f(a,b)
      }
    }
  }
  
  function sum(a,b){
    return a + b;
  }
  
  let curSum = cur(sum);
  
  console.log(curSum(1)(2));