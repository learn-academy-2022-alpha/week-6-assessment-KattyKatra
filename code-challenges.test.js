// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {
//   it("returns a string that says hi", () => {
//     expect(hello()).toEqual("hi")
//   })
// })

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Create a function called theGuide that takes an object and returns each string in that object with capitals applied.
// Input is an array of objects
// Output is same array but capitalization is correctly applied to the names

describe("theGuide", () => {
  it("takes in an array of objects and returns an array with a sentence about each with their name capitalized", () => {
    expect(theGuide(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.

const theGuide = () =>{
  let name = people.name.split('').toUpperCase() + people.name.slice(1)
  return name.map(theGuide).join('')
}

// I know it doesn't pass the test, can I please get a pointer in where to go? I didn't really get much from cohort-mates this time on this one

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Make a function called podgeFilter
//Input is a mixed array
//Filters out just the numbers
// Divides numbers by 3
//Outputs array of remainders

describe("podgeFilter", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(podgeFilter(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(podgeFilter(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

const podgeFilter = (array) => {
  let numbers = array.filter(Number.isFinite)
  let divide = numbers.map(function(value) {return value % 3})
  return divide
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// Create a function called cubeSum
// Input is array of numbers
// Grabs sum of numbers
// Output is the cube of each sum

describe("cubeSum", () => {
  it("returns the sum of all the numbers cubed", () => {
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.

const cubeSum = (array) => {
  let cube = array.map(x => Math.pow(x,3))
  let sum = cube.reduce(function(sum, number) {
    let result = sum + number
    return result
  }, 0)
  return sum
}

// console.log(cubeSum(cubeAndSum1))
// console.log(cubeSum(cubeAndSum2))
