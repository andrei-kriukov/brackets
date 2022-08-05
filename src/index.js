module.exports = function check(str, bracketsConfig) {

  // create objects with open and closed brackets 
  
  const openBrackets = [];
  const closedBrackets = {};
  
  for(let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closedBrackets[bracketsConfig[i][1]]  = bracketsConfig[i][0];
  }

  // check str 
  
  let stack = [];

  for (let i = 0; i < str.length; i++) {
 
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    
   if (openBrackets.includes(currentSymbol)) {

     if (closedBrackets[currentSymbol] === currentSymbol && currentSymbol === topElement) {
       stack.pop(currentSymbol);
       continue;
     } stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        };

        if (closedBrackets[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        };
      }
  }
  return stack.length === 0;
}