//Spread Operator
console.log('-----------Spread Operator-----------------');
/* 
... allows us to quickly copy all or part of an 
    - existing array or 
    - object into another array or 
    - object.

Usage: 
    -Expanding String
    - Combining Array
    - Combining Object
    - Creating new shallow copy of Array and Object
 */

//Combining Array
let myDetails = {
    fname: 'String',
    lname: 'Fulzele',
    age: 95,
    skills:['Admin','Development','LWC'],
};
let array1 = [1,3,4];
let array2 = [9,2,8];

let combo =[...array1,...array2];
console.log('combo',combo);

//expand string
myName = 'My name is Tushar';
console.log('Expanding myName', ...myName);

//spliting by charachter
letsplitMyName = myName.split("");//without space
console.log('letsplitMyName',letsplitMyName);
console.log('letsplitMyName position 11',letsplitMyName[11]);

//Spliting by space
letsplitMyName = myName.split(" ");//with space
console.log('letsplitMyName',letsplitMyName);
console.log('letsplitMyName position 3',letsplitMyName[3]);
//Add elements in an Array
let megaCombo = [myDetails,...array1,...array2,82,76,90];
console.log('megaCombo:',megaCombo);

//adding objects
/* 
Not that the if there is parameters common in both the objects;
the object added last will supersceed 
*/
let Tuobjrgr1 = {
    lname: 'Fulzele',
    age: 95,
    skills:['Admin','Development','LWC'],
};

let shw = {
    fname: 'Shweta',
    age: 25,
    skills:['Testing'],
}

let mar ={...Tuobjrgr1,...shw};
console.log('mar:' , mar);

//copy array or object

//Deep Copy of Array
let copyarray1 = array1;
console.log('Deep copyarray1:', copyarray1);

copyarray1.push("cherry");//adding element to an array
console.log('copyarray1:',copyarray1);
console.log('Deep array1:', array1); //notice that the orginal array is also copied

//Shallow copy of Array
let copyarray2 = [...array2];
console.log('Shallow copyarray2:', copyarray2);

copyarray2.push("banana"); //adding element to an array
console.log('copyarray2:',copyarray2);
console.log('Shallow array2:', array2); //notice that the orginal array remains unchanged

//Above behaviour can also be obsereved in Object

