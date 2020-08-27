console.log('Hello World!!!!');

var firstName = 'Derelle';
console.log(firstName);

var lastName = 'Ishmael'; //string
console.log(lastName);

var fullAge = false; //boolean
console.log(fullAge);

var  job; // undefined value
console.log(job);


job = 'Teacher';//defined value 
console.log(job);

var e90e = 4; //number
console.log(e90e);

//type coercion/conversion
var firstName = 'Bob'; //string
var age = 28; // number
console.log(firstName + ' ' + age); //JS automatically converts both types to form string

var job, isMarrried; //undefined values
job = 'teacher'; // defined string
isMarrried = false; // boolean
console.log(isMarrried,job);
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarrried); // correct spacing

//variable value updates as you redeclare them. 'variable mutation'
job = 'driver';
age = 'twenty eight';
firstName = 'Nate';

alert(firstName+' is a '+age+' year old '+job); //POP up window in Browser. Not printed in console

console.log(lastName);

prompt('What is his last name?'); //pop up window in browser prompting user for data input.
var lastName = prompt('What is his last name?'); //variable 'lastName' changes based on user input in browser and logged.
 console.log(firstName+' ' +lastName);
 
 prompt('How old is he?'); //Don't need to include this step. just var age = prompt('')
 
 var age = prompt('How old is he?');
 console.log(firstName+' is '+age);

 
 //My own examples. VARS dont need paranthesis
 var time = '2:00PM';
 var timeofDay = 'afternoon';
 
 console.log('What time of day is it? '+time);

 var time = prompt('What time of day is it?');
console.log(time);// user input changed time from 2:00PM to 4:00PM

//Var Shortcuts
var girlCoder, badCoder, clearWater;
girlCoder = 'Derelle';
badCoder = false;
clearWater = true;

console.log('Is '+girlCoder+' a bad '+'coder? '+badCoder);
console.log('Can '+girlCoder+' walk through water ?'+clearWater);
