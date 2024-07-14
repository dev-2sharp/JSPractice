console.log('logical Operators');
let n1 = 10;
let n2 = 20;
console.log(typeof n1+ " "+typeof n2) ;
console.log(n1 + n2);

n1 = 10;
n2 = '20';
console.log(typeof n1+ " " +typeof n2) ;
console.log(n1 + n2);

n1 = 10;
n2 = '20';
console.log(typeof n1+ " " +typeof n2) ;
console.log(n1 + Number(n2));

n1 = 10;
n2 = 'A20';
console.log(typeof n1+ " " +typeof n2) ;
console.log(n1 + Number(n2));

n1 = 10;
n2 = '20';
if(isNaN(n2)){
    console.log('n2 is not a number hence cannot  be converted from string to number');
}else{
console.log(n1 + Number(n2)); 
}

n1 = 10;
n2 = '20';
if(isNaN(n2)){
    console.log('n2 is not a number hence cannot  be converted from string to number');
}else{
console.log(n1 + Number(n2)); 
}

let n3 = '30';
let n4 = 10;
console.log(n3 + n4);
console.log(Number(n3) + n4);
console.log(n3 - n4);
console.log(n3 * n4);
console.log(n3 / n4);

//#region comparision operators "=","==","===", < > &&
let n5 = '5';
let n6 = 6;

console.log('comparision operators');
console.log(3 < 7);
console.log(3 <= 7);
console.log(n5 < 7);

console.log(true && true);
console.log(true && false);
console.log(n5 > 3 && n6 < 7);
console.log('&&: =>',n5 > 3 && n6);

console.log('OR operator');
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(n5 > 3 || n6 < 7);
console.log('&&: =>',n5 > 3 || n6);

let a1 = 'Tushar';
let a2 = 'Fulzele';
console.log(1 < 2 && a1);
console.log(1 < 2 || a1);
console.log(a2 && 1 < 2 );
console.log(a2 ||1 < 2);
console.log(a1 && a2);
console.log(a1 || a2);

console.log('not operator !');
let isAlive = true;
console.log(isAlive);
console.log(!isAlive);

console.log('ternary operator');// ternanry operator
let age = 17;
//      condition ? if True Value : if False Value
console.log('can get driving license?', age < 18 ? 'Yes' : 'No' );

//#region == & ===
console.log('difference between == & ===');
/* Difference Between == & === in JavaScript
In JavaScript, equality operators like double equals (==) and triple equals (===) 
are used to compare two values. But both operators do different jobs. 

-Double equals (==) will try to convert the values to the same data type and 
then try to compare them. 
-But triple equals (===) strictly compares the value and the datatype.

Two Types
Double equality (==) checks for Value only
Triple equality (===) checks for Value and TYPE

Example 1: Double Equality (==)

In this example, we are trying to compare a string and a number.
The third statement compares the string and number and prints the result on the console. Here we are using double equals (==) so it checks the inner value rather than the datatype. 
*/
let string = "10"; 
let number = 10; 
  
console.log(string == number);
/* 
The output is true, because they have different data type but same value.

Example 2: Triple Equality (===)

In this example, we are trying to compare a string and a number.
The third statement compares the string and number and prints the result on the console. 

Here we are using triple equals (===) so it checks the inner value and the datatype. 
*/
let string1 = "20"; 
let number1 = 20; 
  
console.log(string1 === number1);


//#region null vs Undefined

// undefined error => declaring the variable and not define the value
// data type  of null ==> Object
// null value => intentional absence of value
// data type  of undefined ==> undefined

let a3 = null;
let a4 ;
console.log('typeof a3', typeof a3);
console.log('typeof a4', typeof a4);

// since both are emptying then  variable, their == is true
console.log('a3 == a4', a3 ==a4); 
//but since data type of both of them is diff., their === is false 
console.log('a3 === a4', a3 === a4); 