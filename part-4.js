function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
 
  console.log(sumAll(1, 2, 3, 4));  
  console.log(sumAll());           
  
  function processArguments(primaryFn, ...args) {
    return primaryFn(...args);
  }
  
 
  function multiply(a, b) {
    return a * b;
  }
  
 
  console.log(processArguments(multiply, 5, 6)); 
  
  
  function addThree(a, b, c) {
    return a + b + c;
  }
  
  console.log(processArguments(addThree, 1, 2, 3)); 
  