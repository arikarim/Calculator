import Big from 'big.js';

 const operate = (numberOne, numberTwo, operation) => {
  num1 = new Big(numberOne);
  num2 = new Big(numberTwo)
  return `${num1} ${operation} ${num2}` 
}

export default operate