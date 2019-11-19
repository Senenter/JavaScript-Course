/**
 * Function that defines the hours slept for each day of the week
 */
const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 8
      break;
    case 'sunday':
      return 8
      break;

    default:
      return 'Error!';

  }
};
// console.log(getSleepHours('monday'));
// console.log(getSleepHours('thursday'));
// console.log(getSleepHours('sunday'));

/**
 * Function made to determine to total hours slept in a week using an implicit return
 */
 const getActualSleepHours = () => 
   getSleepHours('monday') +
   getSleepHours('tuesday') +
   getSleepHours('wednesday') +
   getSleepHours('thursday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday');

   //console.log(getActualSleepHours());
   
   
const getIdealSleepHours = () =>{
  const idealHours = 8
  return idealHours * 7;

};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebpt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
    
  }else if (actualSleepHours > idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep this week!');
    
  }else if (actualSleepHours < idealSleepHours){ 
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less of sleep, get some rest!');
  }
    

};

calculateSleepDebpt()


  
