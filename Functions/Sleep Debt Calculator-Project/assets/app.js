/**
 * Function that defines the hours slept for each day of the week
 */
const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 4
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 6
      break;
    case 'saturday':
      return 7
      break;
    case 'sunday':
      return 8
      break;

    default:
      return 'Error!';

  }
};
console.log(getSleepHours('monday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('sunday'));

/**
 * Function made to determine to total hours slept in a week
 */
 const getActualSleepHours = () => 
   getSleepHours('monday') +
   getSleepHours('tuesday') +
   getSleepHours('wednesday') +
   getSleepHours('thursday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday');

   console.log(getSleephours(''monday));
   
