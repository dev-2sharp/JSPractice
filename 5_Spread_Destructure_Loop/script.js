console.log('JS Spread , Destructure and Loop');
//#region Introduction
/* 
Can be created with '{}' brackets with optional list of properties
    - A Property is a "key: value" pair
    - Where key is always a string(aka 'Property name')
    - value can be anything (another Object/Array/List/number)

JSON.parse(string)      => String to object
JSON.Stringify(myObj)   => Obj to string

Add/Access object values by:
    - . notation
    - [] notation 

Loop through Object properties with for-in loop
*/
console.log('Object creation');

let myDetails = {
    fname: 'String',
    lname: 'Fulzele',
    age: 95,
    skills:['Admin','Development','LWC'],
};
console.log('mydetails: ', myDetails);
console.log('typeof myDetails Object => ',typeof(myDetails));
//stringify
console.log('stringify myDetails', JSON.stringify(myDetails));
//parsing
console.log('parse : stringify myDetails', JSON.parse(JSON.stringify(myDetails)));

//modify object using. notation
myDetails.dob = '01/01/1950';
console.log('myDetails',myDetails);

console.log('myDetails.age',myDetails.age);
myDetails.age = 2024-1950;
console.log('myDetails.age',myDetails.age);

//#region modify object using [] notation

//whenever we have to populate property dynamically we use []
let myCountry="Country";
myDetails[myCountry] = 'India';
console.log('myDetails.country',myDetails);

//whenever we have populate a property with Space in its name
//myDetails.City name = 'Pune'; ===> will throw error
myDetails['City Name'] = 'Pune';
console.log('myDetails City Name',myDetails);

//Access object using . & []
myCountry = myDetails.Country;
console.log('myCountry', myCountry);

let myCity = myDetails['City Name'];
console.log('myCity',myCity);