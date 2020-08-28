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

//Basic Operators
var birthJohn = 2020 - 28; //subraction in Browser. JS does the math for you.
console.log(birthJohn);

//var shortcuts
 var birthJohn,birthDerelle, birth;
 birthJohn = 1992;
 birthDerelle = 1990;
 birth = 2000;

 console.log(birthDerelle + 10); //addition/multiplication etc

 //My own operator examples
 var ageJohn,ageDerelle,ageBrad;
 ageJohn = 10;
 ageDerelle = 20;
 ageBrad = 30;

 console.log(ageDerelle > ageJohn); // Boolean answer in Browser = True.

 //---------------------------------
 //Operator precedence section
 //order of JS operator
 //1. Grouping()
 //2.Exponent
 //3.Multiply*
 //4.Divide/
 //5.Remainder%
 //6.Add+
 //7.Sub-
 //8.Less than <
 //9.Less than or equal to <=
//10.Greater than >
//11.Greater than or equal to >=

//EXAMPLE of order in equation
// (3 + 5) * 4 - 6; // 8 * 4 - 6 EQUALS 26

//EXAMPLE with VARs
var now = 2020;
var yearDerelle = 1990;
var fullAge = 30;
var isfullAge = now - yearDerelle >= isfullAge; // (isfullAge) is VAR seperate from VAR (fullAge)
console.log(isfullAge);

var ageDerelle = now - yearDerelle;
var ageJay = 40;
var average = (ageJay + ageDerelle)/ 2;
console.log(average);

//multiple assignments
 var x, y;
 x = y = (3+5) * 4 - 6;
 //BOTH variables x and y will equal 26
console.log(x,y); ///EQUAL 26 26

//Operator shortcuts
// x = x * 2; // 26 from previous equation * 2  EQUALs 52
// console.log(x); // 52 is answer

//Rewrite x = x * 2;
x *= 2; 
console.log(x); //EQUALS 52

//Works for all operators
//Rewrite x = x + 2;
x += 2; 
console.log(x); // EQUALS 54

// EVEN SHORTER WAY. to only add 1.
x++;
console.log(x); //EQUALS 55
// x-- ; EQUALS 54



//CODING ChALLENGE #1

var mMass, mHeight, jMass, jHeight;
mMass = 90.7185;
mHeight = 1.8288;
jMass = 68.0389;
jHeight = 1.7272;

//BMI calculation = mass /Height^2 which means -- mass / (height * Height)   

var mBmi = 90.7185 / (1.8288 * 1.8288);
console.log(mBmi);// EQUALS 27.12460575

var jBmi = 68.0389 /(1.7272^2);
console.log(jBmi);// EQUALS 22.67963333333333

var isBmi = mBmi >= jBmi;
console.log(isBmi); // TRUE

var mBmi = 'taller than John';
var jBmi = 'shorter than Mark';

console.log('Now we know that Mark is '+ mBmi+', '+'and that John is '+jBmi+'.');

// I DID MY FIRST CODE CHALLENEGE