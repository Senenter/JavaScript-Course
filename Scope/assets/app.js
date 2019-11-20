// Lesson 2 - Blocks and Scopes

const city  =  'New York City';

const logCitySkyline = () => {

    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' +city;
};

console.log(logCitySkyline());
//------------------------------------------------------------------------
// les 3 - CLobal 

/**
 * Variables outisde of this function can still be called sionce they are in the clobal scope, they are called Global Variables
 * But the varaibles need to be declared before the function, otherwise they cannot be accesed
 */

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';


const callMyNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());
//------------------------------------------------------------------------
// Lesson 4 - Block Scope

/**
 * Variables inside of this function can only be called from within the function, this is called Block Scope
 * When the called outside of the function we will get a reffrence error
 */

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    
    console.log(lightWaves);
    
};

logVisibleLightWaves()
console.log(lightWaves);
//------------------------------------------------------------------------
// Lesson 5 - Scope Pollution

/**
 *  star = 'Sirius' overrides the global variable becuase it is called within the function
 */

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';


const callMyNightSky = () => {
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
//------------------------------------------------------------------------
// Lesson 6 - Practice Good Scoping

