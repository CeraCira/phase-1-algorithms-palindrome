function isPalindrome(word) {
  // Write your algorithm here
  const words = word.length;  
   
  for (let i = 0; i < words / 2; i++) {   
    if (word[i] !== word[words - 1 - i]) {  
      return false;  
    }  
  }  
  return true;  
}



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The solution is based on whether the word at index i, that is its letter equal 
  to the word at index (word.length - 1 - i).
  If the it is not equal, it is not a palindrome.
  If it is, it is a palindrome
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
