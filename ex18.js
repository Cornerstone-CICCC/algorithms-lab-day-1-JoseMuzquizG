// Exercise 18: Write a function named 'fibonacci' that takes a non-negative integer 'n' and returns the 'n'th number in the Fibonacci sequence.
// Fibonacci sequence: The Fibonacci sequence is a series of numbers in which each number (called a Fibonacci number) is the sum of the two preceding ones. Typically, the sequence starts with 0 and 1. The sequence goes as follows:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

function fibonacci(n) {
  let number = 0
  let nextNum = 1
  let count = number + nextNum

  for (let i = 2; i < n; i++){
    number = nextNum
    nextNum = count
    count = number + nextNum
  }
  if (n === 0) {
    return 0  
  }
  else {
    return count
  }
}

console.log(fibonacci(1)); // Output: 5
console.log(fibonacci(10)); // Output: 55
