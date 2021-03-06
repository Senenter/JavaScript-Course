// Lesson 2 - Functions as Data

// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for(let i = 1; i <= 1000000; i++) {
//       if ( (2 + 2) != 4) {
//         console.log('Something has gone very wrong :( ');
//       }
//     }
//   }

//   const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
//   /**
//    *  the .name property makes it so that we can log the original name of the function (If we ever forget it) that we changed to is2p2
//    */

//   is2p2();
//   console.log(is2p2.name);
//---------------------------------------------------------------------
// Lesson 3 - Functions as Parameters

  const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  

  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10)