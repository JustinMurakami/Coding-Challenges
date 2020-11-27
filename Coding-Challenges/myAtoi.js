var myAtoi = function(s) {
  let numStr = '';
  for(let i=0; i<s.length; i++){
      if(s.charAt(i) == ' '){
          if(numStr.length > 0)
              break;
          continue;
      }

      if(s.charAt(i) == "+" || s.charAt(i) == "-"){
          if(numStr.length == 0){
             numStr += s.charAt(i);
              continue;
          }else{
             break;
          }
      }
      if(!(s.charAt(i) - '0' >= 0)){
          if(numStr.length == 0)
              return 0;
          else
              break;
      }
      numStr += s.charAt(i);
  }
  if(numStr - '0' > (Math.pow(2,31) - 1))
      return Math.pow(2, 31) - 1;
  if(numStr - '0' <  (0 - Math.pow(2,31)))
      return 0-Math.pow(2, 31);
  return isNaN(numStr - '0') ? 0 : numStr - '0';
};