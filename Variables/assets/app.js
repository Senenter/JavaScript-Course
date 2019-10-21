//Les 2 - Create variable: var

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);
//-------------------------------------------------------------------------------
//Les 3 - Create variable: let

let changeMe = true; //Value of a let can be changed and isn't permanent
changeMe = false; //Assigns the boolean false to the let variable
console.log(changeMe); //Logs false since we changed the boolean true to false
//-------------------------------------------------------------------------------
//Les 4 - Create variable const

const entree = 'Enchiladas'; //Const varaibles cannot be changed, when you do you get a TypeError. Also, a const cannot be empty otherwise you get a SyntaxError
console.log(entree);
// entree = 'Tacos';
// console.log(entree); //Gives a TypeError since a const cannot be chagned
//-------------------------------------------------------------------------------
//Les 5 - Mathematical Assignment Operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5; //Adds 5 to the levelUp variable
powerLevel -= 100; // Decreases the powerLevel by 100
multiplyMe *= 11; //Multiplies multiplyMe by 11
quarterMe /= 4; // Divives quarterMe by 4

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);
//-------------------------------------------------------------------------------
//Les 6 - The Increment and Decrement Operator

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++; //Increases the value of gainedDollar by 1
console.log(gainedDollar);

lostDollar--; //Decreases the value of lostDollar by 1
console.log(lostDollar);
//-------------------------------------------------------------------------------
//Les 7 - String Concatenation with Variables

let favoriteAnimal = 'Cat';
console.log('My favorite animal:' + ' ' + favoriteAnimal); //The increment operator can be used to add strings together
//-------------------------------------------------------------------------------
//Les 8 - String Interpolation

let myName = 'Mart';
let myCity = 'Vlissingen';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`); //backticks are use when working with template literals as with this example. To add the contents of a virable we use: ${Hello} to add the data
//-------------------------------------------------------------------------------
//Les 9 - typeof operator

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);
