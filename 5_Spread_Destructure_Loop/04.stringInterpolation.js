console.log('----------String Interpolation----------');
//used to dynamically populate a value
//without using concanating operator
//also to write expression in string

let ms1 = 'my name is';
let ms2 = 'Tushar';
let ms4 = 'I live in';
let ms5 = 'Pune';
let ms6 = 'My age is';
let calculateAge = 2024 - 1947;

let mi = `My 'name' is ${ms2}. I live in ${ms5} and my "age" is ${
    calculateAge
}`;
console.log('mi' , mi);