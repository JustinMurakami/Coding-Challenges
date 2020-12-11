function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
  //create node to mark head
  var dummy = new ListNode(0);
  //assign head to node's next
  dummy.next = head;
  //create two markers and set initially to dummy (at head)
  var first = dummy;
  var second = dummy;
  //loop to move first marker n nodes to the right
  for (var i = 0; i <= n; i++) {
      first = first.next;
  }
  //move first marker to end
  while (first != null) {
      first = first.next;
      second = second.next;
  }
  //clip the node after second marker
  second.next = second.next.next;
  //return entire list
  return dummy.next;
};