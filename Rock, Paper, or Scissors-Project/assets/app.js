/**
 * Function (made with fat arrow function syntax) for getting the users choice
 * Returns value if userInput is qeual to rock, paper, or scissor
 * If userInput is not a a valid value the function logs a error message
 */
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error. Please use one of the following: Rock, Paper or Scissors');
  }
};

//console.log(getUserChoice('Paper'));//Logs a valid value
//console.log(getUserChoice('Spoon'));//Logs an invalid value and gives an error message + undefined since spoon is not defined

/**
 * Function (made with the fat arror function syntax) for getting the computers choice
 * Const randomNumber is used with math.floor and math.random to get a random number between 0 and 2
 */

const getComputerChoice  = () => {
  const randomNumber = Math.floor(Math.Random() * 3);
  switch (randomNumber) {
    case 0:
      return 'Rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

console.log(getComputerChoice());
