// Lesson 2 - Repeating Tasks Manually

const vacationSpotsPersonal = [
    'Scotland',
    'Japan',
    'America'
];

console.log(vacationSpotsPersonal[0]);
console.log(vacationSpotsPersonal[1]);
console.log(vacationSpotsPersonal[2]);
//--------------------------------------------------------
// Lesson 3 - The For Loop

/**
 * The counter starts at 5, as long as counter is less then 11 the loop runs,
 * When the loop reaches 10 it stops since the stop condition is less then 11
 * When the stop condition is less than OR equal to 11, than the loop stops at 11, not at 10
 */
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  };
//--------------------------------------------------------
// Lesson 4 - Looping in Reverse

for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
  };

// Lesson 5 - Looping through Arrays

  const vacationSpots = [
      'Bali', 
      'Paris', 
      'Tulum'
    
    ];

    for (let i = 0; i < vacationSpots.length; i++) {
        console.log('I would love to visit ' + vacationSpots[i]);
        
    };
//--------------------------------------------------------
// Lesson 6 - Nested Loops

const bobsFollowers = [
    'Jon', 
    'James', 
    'Jeff', 
    'Joey'

];

const tinasFollowers = [
    'Jenny', 
    'Jon', 
    'Joey', 

];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
            
       } 
    }
};
//--------------------------------------------------------
// Lesson 7 - The While Loop

const cards = [
    'diamond', 
    'spade', 
    'heart', 
    'club'

];

let currentCard = '';
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
    
}
//--------------------------------------------------------
// Lesson 8 - Do...While Statements

const cupsOfSugarNeeded = 4;
let cupsAdded = 0;
<<<<<<< HEAD
/**
 * cupsAdded++ increments the value of cupsAdded by 1 everytime the loop runs, as long as it less than the value of cupsOfSugarNeeded
 * do while loops allways run atleast 1 time, wether or not the condition evaluates to true,
 */
=======

>>>>>>> bc0842b2ed8483863802abe10b2ef643b7eb6b7a
do {
    cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);
//--------------------------------------------------------
// Lesson 9 - The break Keyword