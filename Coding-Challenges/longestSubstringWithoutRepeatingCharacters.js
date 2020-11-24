/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  //if string length is 0, return 0
  if (s.length === 0) {
      return 0;
  }
  //current length of largest found substring
  var largestLength = 0;
  //current substring
  var currentSubstring = '';
  //loop to build current substring (first letter)
  for (var i = 0; i < s.length; i++) {
      //restart current substring with this letter
      currentSubstring = s[i];
      if (currentSubstring.length > largestLength) {
          largestLength = currentSubstring.length;
      }
      //loop to build substring
      for (var j = i+1; j < s.length; j++) {
          //if current substring includes subsequent letter, break
          if (currentSubstring.includes(s[j])){
              break;
          } else {
          //if current substring does not include subsequent letter
              //append subsequent letter to current substring
              currentSubstring += s[j];
              //compare length of current substring to largestLength
              if (currentSubstring.length > largestLength){
                  //if larger, then replace largestLength
                  largestLength = currentSubstring.length;
              }
          }
      }
  }
  return largestLength;
};

// var lengthOfLongestSubstring = function(s) {
//     var length = s.length;
//     if (length <= 1) {
//         return length;
//     }
//     var p = 0;
//     var q = 1;
//     var result = 1;
//     while (q < length) {
//         var sub = s.slice(p, q);
//         var i = sub.indexOf(s[q]);
//         if (i !== -1) {
//             p = p + i + 1;
//         }
//         q++;
//         result = q - p > result ? q - p : result;
//     }
//     return result;
// };