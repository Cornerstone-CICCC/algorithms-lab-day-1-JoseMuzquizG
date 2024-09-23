// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

// function formatDate(dateStr) {
//   const dateArray = dateStr.split("-")

//   let monthDate = ""
//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"]

//   for (let i = 0; i < months.length; i++) {
//     const currentMonth = months[i]
//     if (dateArray[1] == currentMonth) {
//       monthDate = currentMonth
//     }
//   }
//   return monthDate
// }



// console.log(formatDate('2022-01-01')) // 'January 1, 2022'