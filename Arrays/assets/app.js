// Lesson 2 - Create an Array

/**
 * Creates an array containing 3 hobbies, data in an array does not have to be of the same type,
 * When logging the variable containing the array, we log the contents of the array
 */
const hobbies = [
    'Gaming',
    'Coding',
    'Music'

];

console.log(hobbies);
//-------------------------------------------------------------------------------
//Lesson 3 - Accesing Elements

const famousSayings = [
    'Fortune favors the brave.', 
    'A joke is a very serious thing.', 
    'Where there is love there is life.'

];

/**
 *Saves the first item in the array to an variable called listItem
 */
const listItem = famousSayings[0];

/**
 * Logs the last item in the element
 * The second log gives an undefined becuase there is not a fourth item in the array, there are three
 */

console.log(famousSayings[2]);

console.log(famousSayings[3]);
//-------------------------------------------------------------------------------
// Lesson 4 - Updatre elements

let groceryLists = [
    'bread', 
    'tomatoes', 
    'milk'

];

/**
 * Updates the array, item [1] is changed from tomatoes to avocados
 */

groceryLists[1] = 'avocados';

/**
 * When we log the array, we now get the array containing avocaods instead of tomatoes
 */

console.log(groceryLists);
//-------------------------------------------------------------------------------
//Lesson 5 - Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
/**
 * Reassigns Mayo to the index location where Ketchup used to be
 */
condiments[0] = 'Mayo';
console.log(condiments);
/**
 * Assigns a new array to condiments
 */
condiments = ['Mayo']
console.log(condiments);
/**
 * Reassigns Spoon to the index location where spork used to be
 */
utensils[3] = 'Spoon'
console.log(utensils);
//-------------------------------------------------------------------------------
//Lesson 6 - The .length property

const objectives = [
    'Learn a new languages',
    'Read 52 books',
    'Run a marathon'
    
    ];
/**
 * The .length porperty returns how many elements are in the array that it is used on
 */
console.log(objectives.length);
//-------------------------------------------------------------------------------
//Lesson 7 - The .push() Method

const chores = [
    'wash dishes',
    'do laundry', 
    'take out trash'

];
/**
 * Adds, or "Pushes" two items to the end of the array, changing it.
 */
chores.push('Walk with the dog', 'Feed the cat');
console.log(chores);
//-------------------------------------------------------------------------------
//Lesson 8 - The .pop() Method

const choresPop = [
    'wash dishes', 
    'do laundry', 
    'take out trash', 
    'cook dinner', 
    'mop floor'
];
/**
 * the .pop() function removes the last item fromt he array, mutating it in the process
 */
choresPop.pop();
console.log(choresPop);
//-------------------------------------------------------------------------------
// Lesson 9 - More Array Methods

const groceryList = [
    'orange juice', 
    'bananas', 
    'coffee beans', 
    'brown rice', 
    'pasta', 
    'coconut oil', 
    'plantains'

];

/**
 * .shift() removes the first item of the array, mutating it in the process
 */
groceryList.shift();
//console.log(grocerylist);

/**
 * .unshift() adds a item to the beginning of the array, mutating it in the process
 */
groceryList.unshift('popcorn');
console.log(groceryList);
/**
 * .slice() return a copy of a portion of the array and adds it into a new array, the original array will not be changed
 */
console.log(groceryList.slice(1,4));
console.log(groceryList);
/**
 * .indexOf returns the index location of the item in the array passed into it, 
 */
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
//-------------------------------------------------------------------------------
// Lesson 10 - Arrays and Functions

const concept = [
    'arrays', 
    'can', 
    'be', 
    'mutated'

];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

removeElement = (newArr) => {
    newArr.pop();

};

removeElement(concept);

console.log(concept);
/**
 * These changes to the array are maintained outside of the function
 */
//-------------------------------------------------------------------------------
// Lesson 11 - Nested Arrays

const numberClusters = [
    [1, 2], 
    [3, 4], 
    [5, 6]

];

/**
 * by chaining the brackets we can extract the value of 6 form the nested array,
 * [2] reffering to the final array inside of the array and [1] reffering to the value of 6
 * Which is located at the index 2
 */

const target = numberClusters[2][1];
console.log(target);

