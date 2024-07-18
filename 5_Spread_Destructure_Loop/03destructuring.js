console.log('----------DeStructuring Array----------');
/* 
Allows you to unpack value from array / object and assign it to a variable
    - Can be applied to array , object , nested Objects
    - in case of array , order that varible is declared in  imp
    - object variable/property do not have to be declared in specific order 
*/
let fruit = ['apple','cherry','banana'];
//old Approach
let fruit1 = fruit[0];console.log(fruit1);
let fruit2 = fruit[1];console.log(fruit2);
let fruit3 = fruit[2];console.log(fruit3);

//Modern JS approach
let[f1,f2,f3] = fruit;
console.log(f1);
console.log(f2);
console.log(f3);

//Order is IMP in array
let [g1,g3] = fruit; //not considering index position 2
console.log(g1);
console.log(g3);

let [m1, ,m3] = fruit; //leaving space ' ' for index position 1
console.log(m1);
console.log(m3);

//use of '...rest' operator 
let sabji = ['baigan' , 'palak' , 'ande' , 'gobi' , 'aloo'];
let [s1,s2,...rest] = sabji;
console.log('s1',s1);
console.log('s2',s2);
console.log('...rest',rest);
console.log('...rest',...rest);

console.log('----------DeStructuring Objects----------');
let Com = {
    cname : 'Extentia',
    yoj   : 2022,
    yoo   : 1998
};
/* let {cname , yoj , yoo } = Com; //Have to use exact same name as in Object
console.log('cname',cname);
console.log('yoj' , yoj);
console.log('yoo' , yoo);
*/
//In case of Object sequence doesnt matter, name does.
let {cname  , yoo } = Com; 
console.log('cname',cname);
console.log('yoo' , yoo);

//incase you dont want to use the property name JS allows you to use alias
let {cname: companyName  , yoo:yearOfOpenting } = Com; 
console.log('companyName',companyName);
console.log('yearOfOpenting' , yearOfOpenting);

