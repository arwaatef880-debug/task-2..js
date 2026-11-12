/////////////// Part-1 in the task "Predict the Output"/////////////////


// ***
//Problem 1
// before run it.!
// * Predict the result before run*.
//The code run line by line.
//At first, it will print 20 علشان هى معرفه جوا ال فانكشن نفسها ف عادى جدا
// After than it will print 10 علشان ال برا بيشوف ال برا عادى لكن ال برا ميشوفش ال جوا
//run the code
let x = 10;
function test() {
let x = 20;
console.log(x);
}
test();
console.log(x);
//My prediction is correct.
// ***



// *** 
//Problem 2
// before run it.!
// * Predict the result before run*.
//The code run line by line.
//ف الاول هيطبع ال 1 عادى جداا جداا طب ليه علشان ال 
//varمش بتعمل حساب ل حد هى برا متشافه جوا متشافه عادى جداا 
//لكن التانيه مش هتطبع ال 2 علشان ال برا مش شايف ال جوا اصلا
//print not defined
if (true) {
var a = 1;
let b = 2;
}
console.log(a);
console.log(b);
// ***



//*** 
//Problem 3                             //////////////////////////////////////////////////////////////////////////////////////////////////

// before run it.!
// * Predict the result before run*.
//The code run line by line.
let count = 0;     //متغير عام
function increase() {
count = count + 1;
}
function reset() {
  let count = 0;
  console.log(reset);
  
}
increase();  // هنا هتبقا 1
increase();  // بعد كدا هتزيد 1 هتبقا 2
reset(); // هنا بقا مش هتطلع حاجه كانها مش موجوده اصلاا
console.log(count);  //هتبقا 2 



//*** 
//Problem 4                    
// before run it.!
// * Predict the result before run*.
//The code run line by line.
function addAndPrint(a, b) {
console.log(a + b); // هتطبع 5
}
let result = addAndPrint(2, 3);
console.log(result); // undefined



//*** 
//Problem 5

// before run it.!
// * Predict the result before run*.
//The code run line by line.
//At first, it will print.  Hi   ف عادى امر الطباعه فوق او تحت هيشتغل عادى جدااfunction علشان هى داخل 
// After than error  error ف مينفعش اقوله اطبعلى كذا الاول من غير ما يشوف العمليه نفسها ف هى هنا لاوم تجيب  function علشان هى مش داخل 
//run the code
console.log(sayHi());
function sayHi() {
  return "Hi";
}
const sayBye = () => "Bye";
console.log(sayBye());
//My prediction is correct.
// ***



// ***
// Problem 6

// before run it.!
// * Predict the result before run*.
//The code run line by line. الكود بيتنفذ سطر سطر
//At first, it will print.  (Big) 
// After that (Checking...)  علشان ف ترتيب الكود هى موجوده سطر طباعه عادى جداا 
// After that  (Small)

//run the code
function check(n) {
if (n > 10) {
return "Big";
}
console.log("Checking...");
return "Small";
}
console.log(check(50));
console.log(check(5));
//My prediction is correct.
// ***







//////////////////////////////////////////// Part 2: Write the Functions //////////////////////////////////////////////////

// 1. * Even or Odd *

let num = prompt("Enter The Number  :  ")
function evenOrOdd(num){
    if(num%2==0) return(true)
        return(false)
}
console.log(evenOrOdd(num));
for (let i = 1; i <= 20; i++)
     {
        if(i%2==0)
        console.log(i);
    }



// 2. * Biggest of Three *

let a = prompt("Enter The Number  : ")
let b = prompt("Enter The Number  : ")
let c = prompt("Enter The Number  : ")
function biggest(a,b,c){
    if(a>b && a>c) return(a)
        if(b>a && b>c) return(b)
            return(c)
}
console.log(biggest(a,b,c));



// 3. * Grade *

let number =   (prompt("Enter The Number  : "))
function grade(number){
    if(number < 0 || number > 100) return("Invalid degree")
    if(number >= 90) return("Excellent")
    if(number >= 80) return("Very Good")
    if(number >= 65) return("Good")
    if(number >= 50) return("pass")
        return("fail")
}
console.log(grade(number));




// 4. * Calculator *

let a= Number(prompt("Enter The Number :  "))
let operator =( prompt("Enter The Operator :  "))
let b = Number(prompt("Enter The Number :  "))
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
        if (b === 0) {
                return "Cannot divide by zero";
            }
        return a / b;
        case '%':
            if (b === 0) {
            return "Cannot divide by zero";
            }
            return a % b;
        default:
            return "Unknown operator";
    }
}
 console.log(calculate(a, b, operator));



// 5. * Sum of a Range *

let start = prompt("Enter The Number  :  ")
let end = prompt("Enter The Number  :  ")
function sumRange(start, end) {
    return String(start) + String(end);
}
console.log(sumRange(start, end));




// 6. * Factorial *
let num = Number (prompt ("Enter The Number  :  "))
function Factorial(num){
    let fact=1;
    for(let i=1; i<=num; i++){
        fact=fact*i;
    }
    return (fact);
}
console.log(Factorial(num));



// 7. * Power with a Default *
let base = prompt("Enter the base  =  ")
let exponent = prompt("Enter the exponent  =  ")
function power(base, exponent = 2) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
   result = result * base
  }

  return result;
}
console.log(power(base, exponent ));



// 8. * Count the Digits *
let num = prompt("Enter The Number  :  ")
function countDigits(num) {
    let count = 0;
   while(num>0) {
        num = (num - num % 10) / 10; 
        count++; 
    }
    return count;
}
console.log(countDigits(num));



// 10. *Arrow Functions*
const isEven = (num) => num % 2 === 0;
const maxOfThree = (a, b, c) => Math.max(a, b, c);
const sumRange = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
console.log(isEven(2));
console.log(maxOfThree(10, 35, 20));
console.log(sumRange(1, 2));

