let input = 'i love to code, eventough i am not good at it';
const vowels = [
    'a',
    'e',
    'i',
    'o',
    'u'
];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
     //console.log('inputIndex = ' + i);
    for (let j = 0; j < vowels.length; j++) {
        //console.log('vowelsIndex = ' + j);
        if (input[i] === vowels[j]){
            if (input[i] === 'a'){
                resultArray.push('aa');
            }
            else if (input[i] === 'e'){
                resultArray.push('ee');
            }
            else if (input[i] === 'i'){
                resultArray.push('ii');
            }
            else if (input[i] === 'o'){
                resultArray.push('oo');
            }
            else if (input[i] === 'u'){
                resultArray.push('uu')
            }
            else {
                resultArray.push(input[i]);
            }

        }
    
    }

};

console.log(resultArray.join('').toUpperCase());
