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

var mBmi = mMass / (mHeight * mHeight);
console.log(mBmi);// EQUALS 27.12460575

var jBmi = jMass /(jHeight * jHeight);
console.log(jBmi);// EQUALS 22.80720283

var isBmi = mBmi >= jBmi;
console.log(isBmi); // TRUE

var mBmi = 'taller than John';
var jBmi = 'shorter than Mark';

console.log('Now we know that Mark is '+ mBmi+', '+'and that John is '+jBmi+'.'+' Do you agree ? '+isBmi);

if(mBmi < jBmi){
    console.log('John, you are bigger!');
}else{
    console.log('You wish!');
}

// I DID MY FIRST CODE CHALLENEGE


//Decisions with conditionals with IF/ELSE
var firtName = 'Jay';
var marryStatus = 'single';

//  this statment determines booleen True/False.
if (marryStatus === 'married'){
    console.log(firstName+' is married !');
// console wont return anything if VAR and IF statement don't MATCH here.
} else{
    console.log(firstName+ ' will hopefully get married soon!');
}

var isMarried = true;
if (isMarried){
    console.log(firstName+' is married!');
}else{
    console.log(firstName+' will marry soon!');
}

//Boolean LOGIC
//AND (&&) - Both VAR must be TRUE for expression to be true

//OR (||) - ATLEAST one VAR must be true to make expression true. Only FALSE if BOTH VAR are false.

//NOT(!) - Iverts TRUE/FALSE value. IF var A is TRUE, then NOT A is false and vice versa.

//examples=
// var age = 16;
// age >= 20;  -- false

// age <= 30;  -- true

// !(age < 30);  -- false (! inverted value from true to false)

// age >= 20 && age < 30;  -- false ( both expressions were not true)

// age >= 20 || age < 30;  --true (at least one var is true to make expression true)

//ELSE/IF condtitional---

var firsName, age;
firstName = 'John';
age = 25;

if (age < 13){
    console.log(firstName+' is a boy!');
}else if(age >= 13 && age < 20){
    console.log(firstName+' is a teenager!');
} else if ( age <= 20 || age < 30){
    console.log(firstName+' is a young brother!');
}else{
    console.log(firstName+' is a man!');
}

//The Ternary Operator - shortcut for ELse/IF condition
//example

var firstName = 'John';
var age = 18; 

age >=21 ?  console.log (firstName+' drinks beer.') //IF
: console.log(firstName+' drinks juice.'); //ELSE
// console = John drinks juice.

//Assign value to operator using Ternary operator
var drink = age >= 18 ? 'beer':'juice';
console.log(drink);


//Switch statement can be used in stead of Else/IF statment//
var job = 'teacher';
switch (job){
    case 'teacher':
        console.log(firstName+' teaches kids how to code.');
         break;
    case 'driver':
        console.log(firstName+' drives an uber in Brooklyn.');
         break; 
    case'designer':
         console.log(firstName+' designs beautifuls websites');
         break;
    default:
        console.log(firstName+' does something else!');
      
// (break;) stop the repition once job if found and line is executed.
// remeber ':' after case:

}

// THOSE ARE 3 WAYS TO WRITE CONDITIONAL CODE.(ELSE/IF, SWITCH, TERNIARY OPERATR). Switch provides cleaner code.

// Example with numbers
  var firstName = 'John';
  var age = 18;

//find the conditional statement that is TRUE
  switch(true){
    case age < 13:
        console.log(firstName+' is a boy!');
          break;
    case age >= 13 && age < 20:
        console.log(firstName+' is a teenager!');
         break;
    case age >= 20 && age < 30:
        break;
        default:
            console.log(firstName+' is a man!');

 // console = John is a teenage!

  }

//   Practice Switch
 var myName = 'Derelle';
 var myAge = 30;

 switch(true){
     case age >= 25 || age <= 30:
         console.log(myName+ ' not quite!');
          break;
    case age < 29:
         console.log(myName+' that/s right!');
        break;
    case age <= 29 && age >= 25:
        break;
        default:
            console.log(myName+' keep coding!');
 }


  //Truthy & Falsey Values
  //Falsey = "undefined", "Null" , 0 , ' ' , Naan

  //Truthy = anything not false

  var height;
  height = 0;

  if (height || height === 0) {
    console.log('Variable is defined!');
  }else{
      console.log('Variable is NOT defined!');
  }
  //console = variable is defined


  //TYPE COERCION for ==
  //type coercion coverts number to string using ' == ' operator
  //EXAMPLE
var height;
height = 23;

//   if (height == '23' ){
//       console.log('true');
//   }else{
//       console.log('false');
//   }

//Using ' === ' will mean that the value EQUALS the other.
//EXAMPLE
if (height === '23'){
    console.log(TRUE);
}else{
    console.log('Not the same hunny');
}
//console = not the same hunny--a string, not a number




//CODING CHALLENGE #2


var johnScore1 = 89;
var johnScore2 = 120;
var johnScore3 = 103;
var johnAverage = (johnScore1 + johnScore2 + johnScore3)/3;
console.log(johnAverage); //104


if(johnAverage){
    console.log('defined');
}else{
    console.log('undefined');
} //console = defined

var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;
var mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3)/3;
console.log(mikeAverage);//111

if (true) {
    console.log('Mike has higher average score of '+mikeAverage);
}else{
    console.log('John has higher average of '+johnAverage);
}

mikeAverage > johnAverage ? console.log('Mike/s team shreds!'):
console.log('John/s team kills!');


// OR could have done less code with this 

// var johnScore = (89 + 120 + 103)/3;
// var mikeScore = (116 + 94 + 123)/3;
// console.log(johnScore, mikeScore); // prints 104, 111

// if (johnScore > mikeScore) {
//     console.log('John/s the winner!');
// }else if (mikeScore > johnScore) {
//     console.log('Mike/s the winner!');
// }else{
//     console.log('It/s a draw!');
// }



//FUNCTIONS
// function = container of code to run and pass arguments through.

// You CALL a function

function calculateAge(birthYear) {
    return 2018 - birthYear;
}
//birthYear = argument
//calculateAge = variable
//return = return results from a function
// you can SAVE results into Var 
 
var ageBrad = calculateAge(1948);
var ageMike = calculateAge(1950);
var ageTom = calculateAge(1968);
console.log(ageMike, ageBrad, ageTom);
// 68, 70 , 50

// TIP - D.R.Y = don't repeat yourself with code. Use a function

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName+' retires in '+retirement+' years.');
    
    if (retirement > 65 ) {
        console.log(firstName+' retires in '+retirement+' years.');      
} else{
    console.log(firstName+' is already retired buddy!');
}
}
// NOW call the function for it to print to console.
//you declare each argument in ()
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1980, 'Derelle');
yearsUntilRetirement(2000, 'Jay');



//Function expression
//JS expressions ALWAYS return a VALUE
// write the function and argument and assign function to a var // var whatDoYouDo = function(job,firstName){
// }

//NOTE: do not include'break' AFTER case because RETURN finshes the function. do not need to break out.
var firstName = 'May';
var whatDoYouDo = function (job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName +' drives kids to school';
        case firstName + ' designer':
            return firstName +' designes websites';
        default:
            return firstName +'  does nada!';
    }
}
console.log(whatDoYouDo('dancer',firstName));

//-------------------Another example

var howDoYouSay = function (greeting, firstName){
    switch(greeting){
        case 'Hola':
            return firstName+' says hello in spanish';
        case 'Hello':
            return firstName+' says hello in english';
        case 'Bonjour':
            return firstName+' says hello in french';
        default:
            return firstName+' speaks none of these languages!'
    }
}
console.log(howDoYouSay('Bonjour',firstName));
console.log(howDoYouSay('Hello', 'Jane'));
//You can swap out the 'firstName'



//ARRAYS///!!
// Arrays are a collection of variables that can have a different data type.USES []
//Arrays are 0 based counting
// Example of Array
var names = ['Mike', 'John', 'Kyle']; // COUNT- 0,1,2
// console.log(names[3]); //prints  UNDEFINED
console.log(names[2]); //prints  element Kyle
console.log(names) // prints (3) ["Mike", "John","Kyle"]
console.log(names.length); //prints 3

//To change elements in ARRAY
names[1] = 'Ned';
console.log(names);//prints(3) ["Mike","Ned","Kyle"];
