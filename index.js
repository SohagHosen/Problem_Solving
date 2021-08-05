/**
 ** Tasks
 *! Leap Year
 *! Odd, Even Number
 *! Factorial
 *! Celsius to Fahrenheit
 *! Grade Calculation
 *! Simple Interest
 */


 //? Leap Year Calculator
 function leapYear(year){
     //! This function returned a string.
     if(year % 4 == 0 && year % 100 >0){
         return `${year} is a leap year.`
     }else{
         return `${year} is not a leap year.`;
     }
 }
 const leapYearResult = leapYear(2100);
//  console.log(leapYearResult);


 //* odd even number calculator 
 function oddEvenNumberCalculator(number){
    if(number % 2 == 0){
        return `This ${number} number is even.`;
    }else{
        return `This ${number} number is odd.`;
    }
 }
const oddEvenNumberResult = oddEvenNumberCalculator(2);
// console.log(oddEvenNumberResult);


//* factorial calculator using for loop
function factorialCalculatorWithForLoopWithFor(number) {
    let factorial = 1;
    for(i=1;i<=number;i++){
        factorial = factorial * i
    }
    return factorial;
}
const factorialResultForLoop = factorialCalculatorWithForLoopWithFor(5);
// console.log(factorialResultForLoop);


//* factorial calculator using while loop
function factorialCalculatorWithWhileLoop(number) {
    let factorial =1;
    let i = 1
    while(i <= number){
        factorial = factorial * i
        i++
    }
    return factorial;
}
const factorialResultWhileLoop = factorialCalculatorWithWhileLoop(5);
// console.log(factorialResultWhileLoop);


//* Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 2 + 30;
    const finalFahrenheit = `${fahrenheit}° Fahrenheit`;
    return finalFahrenheit;
}
const fahrenheitResult = celsiusToFahrenheit(100);
// console.log(fahrenheitResult);

//*  Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 30) / 2
    const finalCelsius = `${celsius}° Celsius`;
    return finalCelsius;
}
const celsiusResult = fahrenheitToCelsius(100);
// console.log(celsiusResult);

//* grade calculating
function gradeCalculator(number) {
    if (number >= 0 && number < 33) {
      return `Your grade letter F and grade point 0`;
    } else if (number >= 33 && number < 40) {
      return `Your grade letter D and grade point 1`;
    } else if (number >= 40 && number < 50) {
      return `Your grade letter C and grade point 2`;
    } else if (number >= 50 && number < 60) {
      return `Your grade letter B and grade point 3`;
    } else if (number >= 60 && number < 70) {
      return `Your grade letter A- and grade point 3.5`;
    } else if (number >= 70 && number < 80) {
      return `Your grade letter A and grade point 4`;
    } else if (number >= 80 && number <= 100) {
      return `Your grade letter A+ and grade point 5`;
    } else {
      return `Enter a number that 1 to 100`;
    }
}
const gradingResult = gradeCalculator(59)
// console.log(gradingResult);

//* simple interest formula 
function interestCalculator(principal, rate, time) {
  const interest = (principal * rate * time) / 100;
  return interest;
}
const interestResult = interestCalculator(15,12,12)
console.log(interestResult);

