/**
 * Function (made with fat arrow function syntax) for getting the users choice
 * Returns value if userInput is qeual to rock, paper, or scissor
 * If userInput is not a a valid value the function logs a error message
 */
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error. Please use one of the following: Rock, Paper or Scissors');
  }
};

//console.log(getUserChoice('Paper'));//Logs a valid value
//console.log(getUserChoice('Spoon'));//Logs an invalid value and gives an error message + undefined since spoon is not defined

/**
 * Function (made with the fat arrow function syntax) for getting the computers choice
 * Const randomNumber is used with math.floor and math.random to get a random number between 0 and 2
 */
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

//console.log(getComputerChoice());

/**
 * Function used to determine a winner
 */
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer wins!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The compuer wins!';
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins!'
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'bomb') {
    return 'You won! But you are dead.'
  }
};
// console.log(determineWinner('rock', 'scissors'));
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('scissors', 'scissors'));

/**
 * Function to start the game
 */
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  //console.log(`You threw &{userChoice}`);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame()
