//Les 2 - Console

console.log(24); //Prints 24
console.log(8); //Prints 8
//--------------------------------------------------------------------------------
//Les 3 - Comments

//Opening line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/
//--------------------------------------------------------------------------------
//Les 4 - Data Types

console.log('JavaScript'); //String
console.log(2011); //Numbers
console.log('Woohoo! I love to code! #codecademy'); //String met spaties/speciale tekens etc
console.log(20.49); //Numbers met een punt worden gewoon gezien als een "Number"
//--------------------------------------------------------------------------------
//Les 5 - Arithmetic Operators

console.log(24 + 3.5); //Optellen - Prints 27.5
console.log(2019 - 1969); //Aftrekken - Prints 50
console.log(65 / 240); //Delen - Prints 0.270
console.log(0.2708 * 100); //Vermeningvuldigen - Prints 27.08
//--------------------------------------------------------------------------------
//Les 6 - String Concatenation

console.log('Hello' + 'World'); //De increment operator plakt de 2 strings aan elkaar
console.log('Hello' + ' ' + 'World'); //Als er een spatie moet worden toegevoegd moet er een string met een spatie worden toegevoegd
//--------------------------------------------------------------------------------
// Les 7 - Properties

console.log('Teaching the world how to code'.length); //De .Length propertie kijkt hoeveel karakters er in de string zitten en print deze
//--------------------------------------------------------------------------------
//Les 8 - Methods

console.log('Codecademy'.toUpperCase()); //De .toUpperCase method verander alle karakters in de string naar een hoofdletter
console.log('    Remove whitespace   '.trim()); // De .trim method verwijdert alle whitepsace aan de linker en rechter kant.
//--------------------------------------------------------------------------------
//Les 9 - Built-in Objects

console.log(Math.random() * 100); //Math.random print een random nummer tussen 0 en 1, Vermeningvuldig dit met bijvoorbeeld 100 dan print hij tussenm 0 en 100
console.log(Math.floor(Math.random() * 100)); //Met Math.floor wordt het getal naar beneden afgerond voor een heel getal
console.log(Math.ceil(43.8)); //Print de kleinste integer die groter of gelijk is aan een nummer
console.log(Number.isInteger(2017)); //Number.isInteger kijkt of het getal een integer is
//--------------------------------------------------------------------------------
