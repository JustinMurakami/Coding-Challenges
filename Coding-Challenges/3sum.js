/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  //if there are less than three elements, return empty array
  if (nums.length < 3) {
      return [];
  }
  //storage array for 3sums
  let storage = [];
  //sort nums array
  nums = nums.sort((a, b) => {
      return a - b;
  });
  //loop through (stopping two before last index)
  for (var i = 0; i < nums.length - 2; i++) {
      //while item is same as one before, increment index
      while (nums[i] === nums[i-1]) {
          i++;
      }
      //middle marker starts at next index
      let middle = i + 1;
      //end marker starts at last index
      let end = nums.length - 1;
      //while middle marker index is less than end marker index
      while (middle < end) {
          //total is sum of three items
          let total = nums[i] + nums[middle] + nums[end];
          //if total is zero, push items to storage array
          if (total === 0) {
              storage.push([nums[i], nums[middle], nums[end]]);
              //while item at middle is same as next, increment middle marker (cause to skip over dups)
              while (nums[middle] === nums[middle + 1]) {
                  middle++;
              }
              //increment middle marker
              middle++;
          }
          //if total less than zero, increment middle marker
          if (total < 0) {
              middle++;
          }
          //if total greater than zerio, decrement end marker
          if (total > 0) {
              end--;
          }
      }
  }
  //return storage array
  return storage;
};