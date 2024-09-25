// Exercise 3: Write a function named 'getFullNames' that takes an array of user objects (each with 'firstName' and 'lastName' properties) and returns an array of full names (e.g., 'John Doe'). 

let students = [
  {firstName: "John", lastName: "Doe"},
  {firstName: "Jane", lastName: "Waters"},
  {firstName: "Joe", lastName: "Smith"}
]

students.forEach(student => {
  console.log(`${student.firstName} ${student.lastName}`)
}) 

