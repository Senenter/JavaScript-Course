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
//---------------------------------------------------------------------
// Lesson 4 - The .filter() Method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallerNumbers = randomNumbers.filter (number => {
    if (number < 250) {
        return true;
    }
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter (word => {
    return word.length > 7;
});
//---------------------------------------------------------------------
// Lesson 5 - The .findIndex() Method