//A variable that defines human age. In this case it is a let variable since in this code it will  be changed
const myAge = 24;
//A variable that defines the early years of a dogs life. It is a let variable since it will be changed
let earlyYears = 2;
//Multiplies the let variables earlyYears by 10.5 and reassigns it
earlyYears = earlyYears * 10.5;
console.log(earlyYears);
//Subtracts 2 from the myAge variable and reassigns the outcome to the variable laterYears
let laterYears = myAge - 2;
console.log(myAge);
//Multiplie the let variable laterYears by 4
laterYears = laterYears * 4;
console.log(laterYears);
//Adds earlyYears and laterYears together and assigns them to a new variable called myAgeInDogYears
var myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
//Creates a const variable called myName. When it gets logged, the .toLowerCase method returns te string in lowercase letters.
const myName = 'Mart'
console.log(myName.toLowerCase(myName));

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
