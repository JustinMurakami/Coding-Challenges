/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/*
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) {
      return root;
  }
  //set node's left child's next to the node's right child
  if (root.left) {
      root.left.next = root.right;
  }
  //if node has next
  if (root.next) {
      //set node's right's next to node's next's child left
      if (root.right) {
          root.right.next = root.next.left;
      }
  }
  connect(root.left);
  connect(root.right);
  return root;
};