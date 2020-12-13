var generateParenthesis = function(n) {
  var result = [];
  function buildString(string, open, close) {
      if (string.length === 2 * n) {
          result.push(string);
      }
      if (open > 0) {
          buildString(string + '(', open - 1, close + 1);
      }
      if (close > 0) {
          buildString(string + ')', open, close - 1);
      }
  }
  buildString('', n, 0);
  return result;
};