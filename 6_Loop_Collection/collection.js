console.log('-----Map collection------');
/* 

Map is a collection of keyed data Data items,just like an Object. 
But the main difference is that map allows keys of any type. 
    - object key can only be of type - string
    - map key can be of any type - integer / object / array / string, etc.

Methods and properties are:

new Map()              - creates the map
map.set( key , value ) - stores the value by the key
map.get( key )         - returns the value by the key , undefined if key doesnt exist in map
map.has( key )         - returns true if the key exist, otherwise false
map.delete( key )      - removes the element ( key / value ) pair by the key
map.clear()            - removes everything from the map
map.size()             - returns the current element count

*/
let myMap = new Map();

//use set method to store the key / values of map
myMap.set('1','Tushar');                            //string string
myMap.set( 6, 9);
myMap.set(2 , 'Fulzele');                           //integer string
myMap.set(["3"] , 50);                              //array integer
myMap.set({fname : 'Tushar Fulzele'} , 'working');  //object string

console.log(myMap);

//access values from map
console.log(myMap.get(2));
console.log(myMap.get('1'));

let places = new Map([
    ['Nagpur' , 'Forest'] ,
    ['Pune' , 'Fort'],
    ['Mumbai' , 'Beaches']
]);

for (const items of places) {       //iterate the map
    console.log(items);
}

for (const [key , value] of places) { //access key-value pair
    console.log(key , value);
}

for (const key of places.keys()) {  //access keys
    console.log(key);
}

for (const value of places.values()) { //access values
    console.log(value);
}

console.log('------------Set Collection-------------');

/* 
Used to store unique values
A set can store any valueof any datatype

new Set()   - create a new set
add()       - Add new element to set
delete()    - removes an element from set
has()       -   returs true if value exist
clear()     - removes all element from set
*/

let myset = new Set();
myset.add('binu');
myset.add(2);
myset.add(['outside food' , 'pizza']);
myset.add(2);
myset.add({fname : 'Tushar Fulzele'} , 'working');

console.log(myset);   //set is always in {} braces
console.log(myset.has("binu"));

let set1 = new Set([
    'Pune',
    'Mumbai',
    'Nagpur',
    'Delhi'
]);

for (let item of set1){
    console.log(item);
}