//Les 2 - Function Declarations

function getReminder() {
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('Buenas Tardes.');
}
//------------------------------------------------------------------------------
//Les 3 - Calling a Function

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();
//------------------------------------------------------------------------------
//Les 4 - Parameters and Arguments

function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');
//------------------------------------------------------------------------------
//Les 5 - Default Parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
//------------------------------------------------------------------------------
//Les 6 - Return

function monitorCount(rows, columns) {
  return rows * columns;

}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
//------------------------------------------------------------------------------
//Les 7 - Helper Functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
//------------------------------------------------------------------------------
//Les 8 - Function Expressions

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'));
//------------------------------------------------------------------------------
//Les 9 - Arrow Functions

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
//------------------------------------------------------------------------------
//Les 10 - Concise Body Arrow Functions

const plantNeedsWater = day => {
  'Wednesday' ? true : false;
};
