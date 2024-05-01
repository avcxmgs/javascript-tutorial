let myAge = 25;       //basic variable, no spaces in a variable name. can't start with a number
let year = 2019;        //reserved words: const, let, var, etc

console.log(age, year);

age = 30;
console.log(age);

const points = 100;
// points = 50;         can't do this bc the const variable makes it constant
console.log(points);

var score = 75;     //older way to create variables
console.log(score);

/* when using newer variables (let/const), they might not always work in 100% of browsers
    older browsers, like IE11, don't support the modern features */