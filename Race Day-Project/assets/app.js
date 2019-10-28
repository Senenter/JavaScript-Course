let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = true;

const runnerAge = 18;

if (registerEarly && runnerAge > 18){
  raceNumber += 1000;
}

if(registerEarly && runnerAge > 18){
  console.log(`Race will start at 9:30 and your race number is: ${raceNumber}`);
}else if(runnerAge > 18 && !registerEarly){
  console.log(`Race will start at 11:00 and your race number is: ${raceNumber}`);
}else if (runnerAge < 18){
  console.log(`Race will start at 12:30 and your race number is: ${raceNumber}`);
}else{
  console.log('Please go to the registration desk');
}
