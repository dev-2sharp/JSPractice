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

//for of loop : for(let curritem of arrayName)
for (const curritem of myCars) {
    console.log('currItem :' , curritem);
}
//to access index and item of an array using 'for of loop'
for (const currItem of myCars.entries()) {
    console.log('currItem: ', currItem);
}
