console.log("hello");

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

//console.log(add(5, 5));//
//console.log(subtract(5, 5));//
//console.log(multiply(5, 5));//
//console.log(divide(5, 5));//

const calculator = function (num1, num2, callback) {
  return callback(num1, num2);
};

console.log(calculator(3, 4, multiply));
console.log(calculator(10, 12, divide));
