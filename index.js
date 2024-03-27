const { access } = require("fs")

// Question 1
console.log("Question 1:")

// find the longest word using `.reduce()`
const words = ["apple", "banana", "kiwi", "orange", "grape"]

const longestWord = words.reduce((accumulator, currentValue) => currentValue.length > accumulator.length ? currentValue : accumulator, words[0])

console.log(longestWord)

// Question 2
console.log("\nQuestion 2:")

// find the minimum using `.reduce()`
const numbers = [10, 5, 8, 20, 15]

const minimumNumber = numbers.reduce((accumulator, currentValue) => currentValue < accumulator ? currentValue : accumulator, numbers[0])

console.log(minimumNumber)

// Question 3
console.log("\nQuestion 3:")

// find the total length of all strings using `.reduce()`
const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"]

const totalLength = wordsLength.reduce((acc, curr) => acc + curr.length, 0)

console.log(totalLength)

// Question 4
console.log("\nQuestion 4:")

// count the number of even numbers using `.reduce()`
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const totalOfEvenNums = nums.reduce((acc, curr) => 
  {if (curr % 2 === 0)
  {
    acc++
  }
  return acc
  }, 0)
 console.log(totalOfEvenNums)

// Question 5
console.log("\nQuestion 5:")

// capitalize the first letter of each word and concatenate them into a single string using `.reduce()`
const wordsCaps = ["hello", "world", "how", "are", "you"]

const capitalizedString = wordsCaps.reduce((acc, curr) => {
  // capitalize the first letter of the current word
  const capitalizedWord = curr.charAt(0).toUpperCase() + curr.slice(1)
  // concatenate the string
  return acc + capitalizedWord + " "
}, "").trim() 

console.log(capitalizedString)

// Question 6
console.log("\nQuestion 6:")

// calculate the average of the numbers using .reduce()
const numsAvg = [10, 15, 20, 25, 30]

const average = numsAvg.reduce((accumulator, currentValue) => accumulator + currentValue / numsAvg.length, 0)

console.log(average)

// Question 7
console.log("\nQuestion 7:")

// find the sum of square of each number using `.reduce()`
const moreNumbers = [1, 2, 3, 4, 5]

const sumOfSquares = moreNumbers.reduce((accumulator, currentValue) => accumulator + currentValue**2, 0)

console.log(sumOfSquares)

// Question 8
console.log("\nQuestion 8:")

// create an object with the occurrences of words using `.reduce()`
const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"]

const wordsOccurences = stationeryWords.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
  return accumulator
}, {})

console.log(wordsOccurences)

// Question 9
console.log("\nQuestion 9:")

// create an object with the occurrences of words using `.reduce()`. The keys should be the first letter of each word
const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"]

const occurencesOfWords = wordsLetter.reduce((acc, curr) => {
  acc[curr.charAt(0)] = (acc[curr.charAt(0)] || 0) + 1
  return acc
},{})

console.log(occurencesOfWords)

// Question 10
console.log("\nQuestion 10:")

// find the product of positive numbers using `.reduce()`
const numPositive = [-2, 3, 4, -5, 6]

const productOfPositiveNums = numPositive.reduce((acc, curr) => curr > 0 ? acc * curr : acc * 1, 1)

console.log(productOfPositiveNums)