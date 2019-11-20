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
 * variable outisde of this function can still be called sionce they are in the clobal scope
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
// Les 4 - Block Scope

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    
    console.log(lightWaves);
    
};

logVisibleLightWaves()
console.log(lightWaves);

