const OLD_AGE_THRESHOLD = 21;
const ABSOLUTE_ZERO_IN_CELSIUS = -273.15;

function main(){
  //alert("Hello World"); Exercise 1


/*  Exercise 2
    let name = prompt("What is your name");
    alert("Hello" + " " + name + "!");
    */


/* Exercise 3
var name, age, greeting;

  name = prompt('What is your name?').trim();
  age = Number(prompt('How old are you?'));
  greeting = "Hello " + name + ".";

  if (age >= OLD_AGE_THRESHOLD){
      greeting += " Gosh, you\'re old!";
  }

  alert(greeting);
//   这里的21是不变的，所以可以在main function()之前先 const OLD_AGE_THRESHOLD = 21;
*/


/* Exercise 5
let age = prompt("Enter your age:");
let retirementAge = prompt("Enter your company's retirement age");
let retireYear = retirementAge - age;

if (retireYear==1){
  alert("You can retire in 1 year.");
}

if (retireYear<=0){
  alert("You are already eligible for retirement.");
}

if(retireYear>1){
  alert("You can retire in " + String(retireYear) + " years.");
}
*/


/* Exercise 5
var ageNow, retirementAge, yearsUntilRetirement, outputMessage;

    ageNow = Number(prompt('Enter your age:'));
    retirementAge = Number(prompt('Enter your company\'s retirement age:'));
    yearsUntilRetirement = retirementAge - ageNow;

    if (yearsUntilRetirement > 0){
        outputMessage = 'You can retire in ' + yearsUntilRetirement + ' year';

        if (yearsUntilRetirement > 1){
            outputMessage += 's';
        }

        outputMessage += '.';//不受第二个if影响
    }

    if (yearsUntilRetirement <= 0){
        outputMessage = 'You are already eligible for retirement.';
    }

    alert(outputMessage);
*/


/*Exercise 6
 var CelsiusT, convert;

 CelsiusT = prompt("Enter a temperature in degree Celsius:");
 convert = (CelsiusT*9/5)+32;

 if (convert >= ABSOLUTE_ZERO_IN_CELSIUS){
alert(String(CelsiusT) + '\260 Celsius is ' + String(amountInFahrenheit) + '\260 Fahrenheit.');
}

if(convert < ABSOLUTE_ZERO_IN_CELSIUS){
alert(String(CelsiusT)+'\260 Celsius is an impossible temperature because ' +
              'it\'s below Absolute Zero (' + String(ABSOLUTE_ZERO_IN_CELSIUS) + '\260 Celsius).');
}
*/


/*Exercise 7
 var tableNumber = Number(prompt('Enter the number for which you\'d like a times table:'));

//SolutionA
 let one = tableNumber * 1;
 let two = tableNumber * 2;
 let three = tableNumber * 3;
 let four = tableNumber * 4;
 let five = tableNumber * 5;

 alert(tableNumber+ ' x 1 = ' + one + ' \n' +
       tableNumber+ ' x 2 = ' + two + ' \n' +
       tableNumber+ ' x 3 = ' + three + ' \n' +
       tableNumber+ ' x 4 = ' + four + ' \n' +
       tableNumber+ ' x 5 = ' + five
 );


//SolutionB
alert(String(tableNumber) + ' x 1 = ' + String(tableNumber * 1) + ' \n' +
      String(tableNumber) + ' x 2 = ' + String(tableNumber * 2) + ' \n' +
      String(tableNumber) + ' x 3 = ' + String(tableNumber * 3) + ' \n' +
      String(tableNumber) + ' x 4 = ' + String(tableNumber * 4) + ' \n' +
      String(tableNumber) + ' x 5 = ' + String(tableNumber * 5));
*/

}
