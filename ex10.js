// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  const dateArray = dateStr.split("-")
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"]
  
  const currentMonth = months[parseInt(dateArray[1]) - 1]
  return `Today is: ${currentMonth} ${dateArray[2]}, ${dateArray[0]}.`
}


console.log(formatDate('2024-09-23')) // 'January 1, 2022'