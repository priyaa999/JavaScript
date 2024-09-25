//Template literals

// function greet(name,age){
//     return `Hello, my name is ${name}, and I am ${age} years old.`
// }
// console.log(greet("John",25))

// function generateParagraph(){
//     return `Hello my name is Priyanka , I have completed my graduation in
//     Mgm University college of Ch.Sambhajinagar in bsc(cs) degree.and now I
//     join a Full Stack Development course of Masai School on online mode here I
//     have completed Python,HTML,JS,CSS.Now I studying a react in this course plateform.this is all
//     about my education. Thank You!`
// }
// console.log(generateParagraph())

// function calculateSum(a,b){
//    return `The sum of ${a} and ${b} is ${a+b}`

// }
// console.log(calculateSum(2,3))

// function formatCurrency(value){
//     return `$${value.toFixed(2)}`;

// }
// console.log(`The total price is ${formatCurrency(500)}`)

// function formatMessage(name,status){
//     return `Welcome back, ${name}! Your status is: ${status? "active." : "inactive." } `
// }

// console.log(formatMessage("John",true))
// console.log(formatMessage("Jane",false))

//Arrow function

// let add = (a,b) => a+b;
// let result = add(2,3);
// console.log(result)

// let double = (n) => n*2;
// let result = double(4)
// console.log(result)


// let greet = (name) => `Hello, ${name}`;
// let result = greet("Priya")
// console.log(result)

 // Q.4 is pending........

// let Person = {
//     name:"John",
//     printName:() => {

//     }

// }
// console.log(Person.printName(this.name))  // output:-undefined

// In arrow function does not have it's own context so this cannot work in it.



// let person = {
//     name:"john",
//     printName :function(){
//         return this.name
//     }

// }
// console.log(person.printName()) // output:-john

//In normal function "this" is use for refer a current context 


//Object Shorthand
// function createPerson(name,age){
//     return {
//         name,
//         age
//     }
// }
// console.log(createPerson("priya",20));


// function createPerson(name,age){
//         return{
//             name,
//             age,
//        introduce() {
//          return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
//        }
//     }
//     }
// let person = createPerson("John",30);
// console.log(person.introduce());

// function createObject(key,value){
//     return {
//        [key]:value
//     }
// }
// let myObj = createObject("name","Priya")
    
// console.log(myObj);


// function mergeObjects(obj1,obj2){
//    let {a,b} = obj1; // destrcuture a obj
//    let {c,d} = obj2;
//    return {a,b,c,d}
// }

// let object1 = {a:1,b:2};
// let object2 = {c:3,d:4};

// let mergeObject = mergeObjects(object1,object2);
// console.log(mergeObject)

// function updatePerson(oldPerson,newName){
//       return {
//         ...oldPerson,
//         name:newName
//       }

// }
// let oldPerson = {name:"John",age:30,city:"New York"}
// let updatedPerson = updatePerson(oldPerson,"Alice")
// console.log(updatedPerson);

//Default parameter in functions

// function greet(name="Guest"){
//     return `Hello, ${name}`
// }
// console.log(greet())

// function calculateTotal(price,tax=0.05){
//     return price + (price * tax)
// }

// console.log(calculateTotal(100,0.24));

// function describePerson(name,age=25){
//    return `${name} is ${age} years old`
// }

// console.log(describePerson("john"));
// console.log(describePerson("Anee",30))

// function calculateDiscount(price,discount = price *0.1){
//     let finalPrice = price - discount;
//     return finalPrice;
// }
// console.log(calculateDiscount(60));

// function createUsers(username,role ="users"){
    
// // }
// function createUser(username,role = "user"){
//      return `${username} ${role}`
// } 
// console.log(createUser("Priya","FD"));

// Var vs let vs const 

// function testVar(a,b){
//    for(var i=0;i<5;i++){
//         console.log(i)
//    }
//    console.log(i)
// }
// testVar()


// function testLet(a,b){
//   for(let i=0;i<5;i++){
//     console.log(i)
//   }
//   console.log(i)
// }
// testLet()

// function createConstantArray(){
//     const arr = [1,2,3,4]
//     arr = [5,6]
//     console.log(arr)
// }
// createConstantArray()
/*
 In const variable we can noy reassign again once it assign it constant
 we can't touch them . const keyward is constant reference , that we not change the
 value.it is a block scope.
*/

// console.log(a)
// function demonstrateTDZ(){
//     let a = 10
// }
// demonstrateTDZ()

// console.log(b)
// function demonstrateTDZ(){
//     var b = 10
//     }
// demonstrateTDZ()
    
// function testRedeclaration(){
//     var a = 10;
//     var a = 20
//     console.log(a)
// }
// testRedeclaration()

  
// function testRedeclaration(){
//     let a = 10;
//     let a = 20;
//     console.log(a)
// }
// testRedeclaration()

  
// function testRedeclaration(){
//    const  a = 10;
//     a = 20
//     console.log(a)
// }
// testRedeclaration()


// function loopWithVar(){
// var arr = ["a","b","c","d"]
//     for(var i=0;i<arr.length;i++){
//         // console.log(`index ${i} - value ${arr[i]}`)
//     }
//     console.log(i)
// }
// loopWithVar()


// function loopWithVarAndLet(){
// let arr = ["a","b","c","d"]
//     for(let i=0;i<arr.length;i++){
//         // console.log(`index ${i} - value ${arr[i]}`)
//     }
//     console.log(i)
// }
// loopWithVarAndLet()
/* In var we access a index of i because it is a function scope but in let
 we cannot acess out side of loop because it is  blocked scope, var hoisted we use
 before declaration but in let hoisting is occurs but in temporal dead zone
 we cannot use before declaration.in var i is accesible evev after the loop but
 in let i is not accissible outside the loop
*/

//Rest & spread 
// function sum(...numbers){
//     let total = 0
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }
// console.log(sum(5,3))



// function mergeArrays(arr1,arr2){
//     console. log([...arr1,...arr2])
// }
// mergeArrays([1,2,3],[2,3,4])

// function updatePerson(person,updates){
//     let updatedPerson = {
//         ...person,
//         ...updates
//     }
//     console.log(updatedPerson)

// }
// updatePerson({name:"john" , age:30},{name:"Neha",age:20})


// function extraFirstAndRest(arr){
//     let [first,...rest] = arr
//     return {first,rest}
// }
// console.log(extraFirstAndRest([1,2,3,4,5]))

// function sum(...numbers){
//     return numbers.reduce((total,curr)=> total + curr,0)
// }

// function calculateTotal(...args){
//     return sum(...args);
// }
// console.log(calculateTotal(1,2,3,4,5))

//Destructuring arrays & objects

// function swap(a,b){
//     [a,b] = [b,a]
//     return [a,b]
// }
// console.log(swap(10,20))

// function displayPerson(person){
//     let {name ,age} = person
//     return `Name: ${name} Age: ${age}`
// }
// console.log(displayPerson({name:"john",age:20}))

// function extraNestedaData(obj){
//     let {name:{first,last},age} = obj
//         return `First Name: ${first}, Last Name: ${last},Age: ${age}`
// }
// console.log(extraNestedaData({name:{first:"john",last:"doe"},age:30}))

// function getCoordinates({x=0,y=0}={}){
//      return `Coordinates: x = ${x} ,y = ${y}`

// }
// console.log(getCoordinates({x:3,y:5}));


// function getUserInfo(user){
//     let {name,age,email,...rest} = user
//     return `Name: ${name} Age: ${age} Email: ${email} , other Info: ${JSON.stringify(rest)}`
// }
// console.log(getUserInfo({name:"john",age:30,email:"john@gmail.com",occupation:"js"}))

//Optional chaining


// function getUserCity(user){
//       return user?.address?.city;
// }

// const user = {
//     name:"john",
//     address:{
//         city:"New York"
//     }
// }
// console.log(getUserCity(user))

// function getFirstFriend(user){
//     return user?.friends?.[0]
// }
// const user = {
//     name:"John",
//     friends:["akash","mayur","sam"]
// }

// console.log(getFirstFriend(user))

// function callOptionalMethod(obj){
//    return obj?.greet?.();
// }

// const obj = {
//     greet:function(){
//         return "Hello"
//     }
// }
// console.log(callOptionalMethod(obj))

// function getNestedProperty(obj){
//     return obj?.a?.b?.c
// }

// const obj = {
//      a:{
//         b:{
//             c: function() {
//                 console.log("hello")
//             }
//         }
//      }
     
// }
// getNestedProperty(obj)?.()


// function getNestedProperty(obj){
//     return obj?.a?.b?.c ?? "Not Available"
// }

// const obj = {
//     a: {
//         b: {
           
//         }
//     }
// };

// console.log(getNestedProperty(obj)); 




