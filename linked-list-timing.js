const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');
const { list } = require('mocha/lib/reporters');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

startTime = Date.now();
const list1 = new LinkedList ();
endTime = Date.now();
console.log(`Runtime: ${endTime - startTime}ms`);

startTime = Date.now();
list1.addToHead(92);
list1.addToHead(191);
list1.addToHead(202);
list1.addToTail(20);
list1.addToTail(5000000023);
endTime = Date.now();
console.log(`Runtime: ${endTime - startTime}ms`);

// console.log(list1);

startTime = Date.now();
const list2 = new DoublyLinkedList ();
endTime = Date.now();
console.log(`Runtime: ${endTime - startTime}ms`);

startTime = Date.now();
list2.addToHead(92);
list2.addToHead(191);
list2.addToHead(202);
list2.addToTail(20);
list2.addToTail(5000000023);
endTime = Date.now();
console.log(`Runtime: ${endTime - startTime}ms`);