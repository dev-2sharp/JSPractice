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

