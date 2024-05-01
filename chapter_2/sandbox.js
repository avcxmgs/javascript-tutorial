let age = 25;

//loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25'); //this is being converted into a number before comparing it
// console.log(age != 25);
// console.log(age != '25');


//strict comparison (different types cannot be equal) - for when you want it to have the same value AND type
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');