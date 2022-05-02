//Dog Year Project 
// My age 
let myAge = 4; 


// early years variable 
let earlyYears = 2; 

earlyYears *= 10.5; 

//later years variable 
let laterYears = myAge - 2; 


//calculating laterYears in dog years 
laterYears = laterYears * 4; 


console.log(earlyYears);
console.log(laterYears);

//combines our early dog years and later years to give us total age in dog years

const myAgeInDogYears = earlyYears + laterYears; 

//returns my name in lower case 
const myName = "Oscar".toLowerCase()
console.log(myName);


//logs our name, human yearsm and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `)
