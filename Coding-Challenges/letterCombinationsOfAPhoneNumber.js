/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var phone = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
  };

  var output = [];

  const backtrack = (combination, nextDigits) => {
      //if no more digits to check
      if (nextDigits.length === 0) {
          //push combination to output
          output.push(combination);
      //if still digits to check
      } else {
          //iterate over letters for next available digit
          for (var i = 0; i < phone[nextDigits[0]].length; i++) {
              //append current letter to combination and move on to next digit
              backtrack(combination + phone[nextDigits[0]][i], nextDigits.substring(1));
          }
      }
      return;
  }

  if (digits) {
      backtrack('', digits)
  }

  return output;
};