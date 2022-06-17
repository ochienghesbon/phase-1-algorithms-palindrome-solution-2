function isPalindrome(word) {
  // Write your algorithm here
  for (let i=0; i<word.length/2; i++){
const j=word.length-1-i;
const startChar=word[i];
const endChar=word[j];
if (startChar!==endChar) return false;
  }
  return true
}


/* 
  Add your pseudocode here
  loop through half of the string to check its length
check if the first and the last string are same
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
  The length of the string is calculated using the length property
  The for loop is used to iterate up to the half of the string. The if condition is used to check if the first and the corresponding last characters are the same. This loop continues till the half of the string.
  During the iteration, if any character of the string, when compared with its corresponding last string is not equal, the string is not considered a palindrome.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
