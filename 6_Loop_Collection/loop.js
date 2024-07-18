console.log('--------------Loop-------------');
/* 
Loops in JS
 - for          : Loop through block of code a number of Times
 - while        : loop while a specified condition is true
 - do/while     : loop while a specified condition is true
 - for/in       : Loop through thr propertis of an object           // V.IMP
 - for/of       : Loops through thr values of an iterable object    // V.IMP
 

 - break        : "Jump" out of the loop
 - continue     : "Jump over" one iteration in the loop
 */

 let myCars = ['Audi' , 'BMW' , 'Maruti','Hyundai','Tata'];
 //for : for (initlization , condition , increment/decrement)
for (let i = 0; i < myCars.length; i++) {
    console.log(`My Car ${i+1}.${myCars[i]}`);
}

//while : while (condition)
let currentIndex = 0;
while (currentIndex < myCars.length) {
    console.log(`My car ${currentIndex + 1} => ${myCars[currentIndex]}`);
   currentIndex =  currentIndex + 1;
}

/* do while :

    do {
    
    } while ()
*/

do {
    console.log('Inside do while loop');
} while (1 > 2);

console.log('----------------------for of loop----------------------');
//for of loop : for(let curritem of arrayName)
for (const curritem of myCars) {
    console.log('currItem :' , curritem);
}
//to access index and item of an array using 'for of loop'
for (const currItem of myCars.entries()) {
    console.log('currItem: ', currItem);
}
//separate index and item of an array
for (const [index , car] of myCars.entries()){
    console.log(`${index + 1} => ${car}`);
}

console.log('---Iterating through an Object---');
let myDetails= {
    fname : 'Tushar',
    lname : 'Fulzele',
    age   : 100
 };
 /* 
    To make an object we have 3 methods:
    - Object.keys
    - Object.values
    - Object.entries
 */

for (let currItem of Object.keys(myDetails)){
    console.log('keys' , currItem);
    console.log('values' , myDetails[currItem]);    //can access keys based on values
}

for (const currItem of Object.values(myDetails)) {
    console.log('currItem: ', currItem);            //can't access values based on keys
}

for (const currItem of Object.entries(myDetails)) {
    console.log('currItem' , currItem);
}
for (const [ke , valu] of Object.entries(myDetails)) { //destructuring
    console.log(ke , valu);
}

console.log('----------------------for in loop----------------------');
/* iteration over an object => use `for in` loop 
    - we dont need to convert it in iterable form
        for (let variableName in collection) 
*/
for (const currItem in myCars) {
    console.log(currItem , myCars[currItem]);
}

for (const currItem in myDetails) {
    console.log(currItem , myDetails[currItem]);
}

for (let currItem in Object.keys(myDetails)){
    console.log(currItem , myCars[currItem]); // access values using keys 
}

for (let currItem of Object.values(myDetails)){
    console.log(currItem);
}

for (let currItem of Object.entries(myDetails)){
    console.log('currItem' , currItem);
}

for (let [key , value] of Object.entries(myDetails)){
    console.log(key , value);
}

console.log(('--- classic example ---'));
let openingClosingHours = {
    fri : { open: "10 AM", close : "11 PM"},
    sat : { open: "09 AM", close : "10 PM"},
    sun : { open: "08 AM", close : "09 PM"},
}

for (let item in openingClosingHours){
    //console.log(item);
    //console.log(openingClosingHours[item]);
    let {open , close} = openingClosingHours[item];
    //console.log(open , close);
    console.log(` On ${item} Shop opens at ${open} and closes at ${close}`);
}

for (const [day , {open , close}] of Object.entries(openingClosingHours)) {
    //console.log(day , open , close);
    console.log(` On ${day} Shop opens at ${open} and closes at ${close}`);
}