//Les 2 - The if keyword

// let sale = true;
// sale = false;
// if(sale){
//   console.log('Time to buy!');
// }
//--------------------------------------------------------------------------------
//Les 3 - if...Else Statements

let sale = true;
sale = false;
if(sale){
  console.log('Time to buy!');
} else{
  console.log('Time to wait for a sale.');
}
//--------------------------------------------------------------------------------
//Les 4 - Comparison Operators

/*
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is NOT equal to: !==
*/

let hungerLevel = 9;
if (hungerLevel > 7){
  console.log('Time to eat!');
}else{
  console.log('We can eat later!');
}
 //--------------------------------------------------------------------------------
 //Les 5 - Logical Operators

let mood = 'sleepy';
let tirednessLevel = 8;
if( mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
}else{
  console.log('not bed time yet');
}
 //--------------------------------------------------------------------------------
 //Les 6 - Truthy and Falsy

 let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


// let favoritePhrase = 'Hello World!';
//
// if (favoritePhrase) {
//   console.log("This string doesn't seem to be empty.");
// } else {
//   console.log('This string is definitely empty.');
// }
//--------------------------------------------------------------------------------
//Les 7 - Truthy and Falsy Assignment

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
//--------------------------------------------------------------------------------
//Les 8 - Ternary Operator

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
//--------------------------------------------------------------------------------
//Les 9 - Else If Statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}
//--------------------------------------------------------------------------------
//Les 10 - The switch keyword

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
  console.log('You get the bronze medal!');
    break;
  default:
  console.log('No medal awarded.');
    break;

}
