/*
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  //helper function to check if a string is a palindrome
  var isPalindrome = function(string) {
      //boolean flag
      var bool = true;
      //loop through first half of string, comparing with last half of string
      for (var i = 0; i < (string.length - 1) / 2; i++) {
          if (string[i] === string[string.length - 1 - i]) {
              bool = true;
          } else {
              bool = false;
              break;
          }
      }
      return bool;
  }
  //if string length is 1, return string
  if (s.length === 1) {
      return s;
  }
  //store current greatest length
  var greatestLength = 1;
  //store current longest string
  var currentLongestString = s[0];
  //loop through possible first indexes
  for (var j = 0; j < s.length; j++) {
      //loop through possible last indexes
      for (var k = j + 1; k < s.length; k++) {
          //if palindrome, check length and compare to current greatest length
          var substring = s.slice(j, k + 1);
          if (isPalindrome(substring)) {
              if (substring.length > greatestLength) {
                  currentLongestString = substring;
                  greatestLength = substring.length;
              }
          }
      }
  }
  return currentLongestString;
};