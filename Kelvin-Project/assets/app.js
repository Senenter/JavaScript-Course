//This variable, a const is named kelvin and is set to 293
const kelvin = 293;
//the const celsius is assigned the number resulting from the calculation
const celsius = kelvin - 273;
//The let fahrenheit is assigned the number resulting from the calculation but can be changed since it is a let variable
let fahrenheit = celsius * (9/5) + 32;
//Rounds down the number from fahrenheit if it is a decimal number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temprature is ${fahrenheit} degrees Fahrenheit.`);
//---------------------------------------------------------------------------------
// const kelvin = 293;
// const celsius = kelvin - 273;
// let newton = celsius * (33/100);
// fahrenheit = Math.floor(newton);
// console.log(`The temprature is ${newton} degrees Newton.`);
