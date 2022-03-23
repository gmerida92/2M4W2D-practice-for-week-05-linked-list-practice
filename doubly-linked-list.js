class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val);
    let current = this.head;
    if(!current)
    {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;