// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  let sum = 0
  for (i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(calculateAverage([20, 20, 30, 40, 50])) // 30