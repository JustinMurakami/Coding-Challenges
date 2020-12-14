
var divide = function(dividend, divisor) {
  var result = 0;
  if (dividend >= 0 && divisor > 0) {
      while (dividend >= divisor) {
          dividend -= divisor;
          result += 1;
      }
  }
  if (dividend <= 0 && divisor < 0) {
      while (dividend <= divisor) {
          dividend -= divisor;
          result += 1;
      }
  }
  if (dividend < 0 && divisor > 0) {
      while (Math.abs(dividend) >= divisor) {
          dividend += divisor;
          result -= 1;
      }
  }
  if (dividend > 0 && divisor < 0) {
      while (dividend >= Math.abs(divisor)) {
          dividend += divisor;
          result -= 1;
      }
  }
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
      result = Math.pow(2, 31) - 1;
  }
  return result;
};