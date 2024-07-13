console.log('truthy and falsy');
let myName;
console.log('myName:',myName);
console.log(typeof myName);


if(myName){
    console.log('myName:',myName);
}else{
    console.log('my name is not defined yet');
}
if (1<=2) {
    myName = 'Tushar';
    console.log(typeof myName);
    console.log('myName:',myName);
} else{
        console.log('this will not be printed');
}

let mySalary =0
    console.log('mySalary1: ',mySalary);
if (mySalary) {
    console.log('mySalary2: ',mySalary);
} else {
  console.log('mySalary3: ',mySalary);
}

mySalary = 10;
console.log('mySalary1: ',mySalary);
if (mySalary) {
   console.log('mySalary2: ',mySalary);
} else {
  console.log('mySalary3: ',mySalary);
}

