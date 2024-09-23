// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  const words = text.split(" ")
  words.reverse()
  
  return words.join(" ")
}

console.log(reverseWords("The quick brown fox"))
//console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'