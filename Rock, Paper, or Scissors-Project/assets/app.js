/**
 * Function (made with fat arrow function syntax) for getting the users choice
 * Returns value if userInput is qeual to rock, paper, or scissor
 * If userInput is not a a valid value the function logs a error message
 */
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else{
    console.log('Error. Please use on of the following: Rock, Paper or Scissors');
  }
};

console.log(getUserChoice('Paper'));
console.log(getUserChoice('Spoon'));
