// Lesson 2 - The .forEach() Method

const fruits = [
    'mango', 
    'papaya', 
    'pineapple', 
    'apple'

];

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`))
//---------------------------------------------------------------------
// Lesson 3 - The .map() Method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join('  '));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
    return number / 100;
});

console.log(smallNumbers);
