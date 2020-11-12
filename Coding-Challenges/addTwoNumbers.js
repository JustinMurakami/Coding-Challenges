/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  var storageArray = [];
  var search = (node1, node2, excess) => {
    if (node1 && node2) {
      if (node1.val + node2.val + excess <= 9) {
        storageArray.push(node1.val + node2.val + excess);
        search(node1.next, node2.next, 0);
      } else if (node.val + node2.val + excess > 9) {
        storageArray.push(node1.val + node2.val + excess - 10);
        search(node1.next, node2.next, 1);
      }
    } else if (node1 && !node2) {
      if (node1.val + excess <= 9) {
        storageArray.push(node1.val + excess);
        search(node1.next, null, 0);
      } else if (node1.val + excess > 9) {
        storageArray.push(node1.val + excess - 10);
        search(node1.next, null, 1);
      }
    } else if (node2 && !node1) {
      if (node2.val + excess <= 9) {
        storageArray.push(node2.val + excess);
        search(node2.next, null, 0);
      } else if (node2.val + excess > 9) {
        storageArray.push(node2.val + excess - 10);
        search(node2.next, null, 1);
      }
    }
  }
  search(l1, l2, 0);
  var result = Number(storageArray.join(''));
  return result;
};