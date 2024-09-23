// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  const textArray = text.split(' ')
  let longestWord = ''

  for  (let i = 0; i < textArray.length; i++){
    const currentWord = textArray[i]
    if (currentWord.length > longestWord.length){
      longestWord = currentWord
    }
  }
  return longestWord
}

console.log(longestWord('Stratigically super-long wording utilized along sentences'))