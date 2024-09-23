//Type Conversion(Explicit)

// function convertToNumber(value){
//     return Number(value)
// }
// console.log(convertToNumber(true))

// function convertToString(value){
//     return String(value)
// }
// console.log(convertToString("true"))
//  function convertAndCompare(a,b){
//     if(isNaN(a)==false && isNaN(b)==false){
//         return Number(a) === Number(b);
//     }
//         return String(a) === String(b);
//  }
//  console.log(convertAndCompare(10,"10")) 

//Type Coercion (Implicit)

// function checkLoosetype(a,b){
//    return a==b;
// }
// console.log(checkLoosetype(null,undefined))


// function checkStrctlytype(a,b){
//     return a===b;
//  }
//  console.log(checkStrctlytype(null,undefined))
 
// function CoercionInArithmetic(a,b){
//     let add = a+b
//     let sub = a-b
//     let mul = a*b
//     let div = a/b

//     return{
//         add, 
//         sub,
//         mul,
//         div
//     }
// }
// console.log(CoercionInArithmetic("2",2))

// function coercionInConditionals(value){
//    if(value){
//     return `${value} is truthy.`;
//    }
//    else{
//     return `${value} is falsey.`
//    }
        
// }
// console.log(coercionInConditionals(0))

//Type Identification in js

// function identifyType(value){
//     return typeof(value);
// }
// console.log(identifyType(function(){}))

// function isArrayOrObject(value){
//     if(Array.isArray(value)){
//         return `${value} It is a type of Array`
//     }
//     else if(typeof value == "object" && value!==null && !Array.isArray(value)) {
//          return `${value} It is a type of Object`
//     }
//     else{
//         return `${value}  is a type of ${typeof(value)}.`
//     }
// }
// console.log(isArrayOrObject("hi there"))


//Statement V/s expression:- define
// statement performs an action only but expression returns it
// expression is a return part of  the statement ,for example
// for(i=0;i<=n;i++){    this for loop is a statament.
//  consol.log("hello")  it is a expression it returns 
// }
// x = 2+2
//x is a statement , 2+2 is expression
// expression is a right-hand-sided part equall to the action performs.


// function expressionInFunction(a,b){
//     // an expression like a+b
//     let sum = a+b;
//     //use sum in a statement like if 
//     if(sum>10){
//           return `${sum} is greater than 10`
//     }
//     else{
//         return`${sum} is smaller than 10`
//     }
// }

// console.log(expressionInFunction(2,3))

// function complexExpression(a,b,c){
//     let result
//     if(a+b > a*b){
//         result = "The sum of a and b exceeds the product of c and b."
//     }
//     else if(a+b === a*b){
//         result = "The sum of a and b equals the product of c and b. "
//     }
//     else{
//         result = "The product of c and b is greater than the sum of a and b."
//     }
//     return result;

// }

// console.log(complexExpression(1,2,3))

//For loop
// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// function printArrayElements(arr){
//    for(let i=0;i < arr.length;i++){
//        return arr
//    }
// }

// console.log(printArrayElements(["Priyanak","Sanket",1,2,3]))

// function createMultiplicationTable(n){
    
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//            console.log(`${i} * ${j} = ${i*j}`) 
//         }
//     }
// }
// createMultiplicationTable(2)




//Switch case
// function getDayOfWeek(dayNumber){
//     switch(dayNumber){
//         case 1:
//         return "Monday"
//         case 2:
//         return "Tuesday"
//         case 3:
//         return "Wednesday"
//         case 4:
//         return "Thursday"
//         case 5:
//         return "Friday"
//         case 6:
//         return "Saturday"
//         case 7:
//         return "Sunday"
//     }
// }

// console.log(getDayOfWeek(7))
// this is switch case using fall-through method.
// function getDayOfWeek(dayNumber){
//     switch(dayNumber){
//         case 1:
//         return "Monday"
//         case 2:
//         return "Tuesday"
//         case 3:
//         return "Wednesday"
//         case 4:
//         return "Thursday"
//         case 5:
//         return "Friday"
//         default:
//         return "Weekend"
//     }
// }

// console.log(getDayOfWeek())

// function classifyAnimal(animal){
//     switch(animal){
//         case "humans":
//         case "dogs":
//         case "cats":
//             return `This is a mammal`
//         case "snake":
//         case "lizards":
//             return `This is a reptiles`
//         case "bird":
//             return `This is a aves`
//         default :
//         return "Unkown animals"
//     }
    
// }
 
// console.log(classifyAnimal("cats"))

//While loop

// let i = 1;
// while(i<=5){
//     console.log(i)
//     i++
// }

// function countDownFrom(n){
//     let i = n ;
//     while(i>=0){
//         console.log(i)
//         i--
//     }
   
// }
// countDownFrom(5)


// function findFirstEven(numbers){
//     i = 1
//     while(i<numbers.length){
//         if(numbers[i]%2==0){
//             console.log(numbers[i])
//             break;
//         }

//          i++
//     }
        
    
// }

// findFirstEven([1,5,3,8])