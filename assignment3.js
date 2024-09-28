// const strings = [
//     "apple",
//     "banana",
//     "apple",
//     "orange",
//     "banana",
//     "pear",
//     "apple",
//   ];
// let UniqueString = strings.reduce((acc,cur)=>{
//        acc[cur] = acc[cur]? acc[cur] +1 : 1;
//        return acc
// },{})

// console.log(UniqueString)

// const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

// let ProductOfMultipleOfThreeOrFive = numbers.reduce((acc,cur)=>{
//       if((cur%3 == 0) || (cur%5 == 0 ) ){
//         acc += cur
//       }
//       return acc

// },0)
// console.log(ProductOfMultipleOfThreeOrFive);

// const words = [
//     "racecar",
//     "hello",
//     "deified",
//     "world",
//     "level",
//     "programming",
//     "radar",
//     "civic",
//     "javascript",
//   ];
  
//    let isPalindrome = (word) => {
//     return word === word.split("").reverse().join("")
//    }
//   let palindromeString = words.filter(isPalindrome)

// console.log(palindromeString)

// const filePaths = [
//     "/images/pic1.jpg",
//     "/images/pic2.png",
//     "/assets/img/background.jpg",
//     "/assets/img/logo.png",
//     "/downloads/document.pdf",
//     "/downloads/image.png",
//     "/downloads/image.jpg",
//   ];
  
// let files =  filePaths.filter((path)=>{
//        if(path.endsWith('.jpg') || path.endsWith('.png')){
//         return true
//        }
       
// })
// console.log(files)

// const strings = [
//     "Hello",
//     "world",
//     "this",
//     "is",
//     "an",
//     "example",
//     "array",
//     "of",
//     "strings",
//   ];
  
// let swapStrings = strings.map((item) => {
//     return item.split('').reverse().join('')
  
// })
// console.log(swapStrings)

// const sentences = [
//     "The quick brown fox jumps over the lazy dog.",
//     "She sells seashells by the seashore.",
//     "I have a dream that one day this nation will rise up.",
//     "To be or not to be, that is the question.",
//     "In the beginning, God created the heavens and the earth.",
//   ];
  
//  sentences.forEach((e,i,arr)=>{
//     let count = e.trim().split(/\s+/).length
//     console.log(`Sentences ${i+1} contains ${count}`)
// })

// const numbers = [1, 2, 3, 4, 5, 7];

// let sumOfSquaresOfOddNumbers = numbers

//   .filter(number => (number%2!=0))

//   .map(number => number*number)

//   .reduce((acc,number) => acc+number ,0 )

//   console.log(sumOfSquaresOfOddNumbers);
