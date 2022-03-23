class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    if (!this.head) {
      this.addToHead(val)
    }
    else {
      let newNode = new LinkedListNode(val);
      let current = this.head;
      while (current) {
        if (current.next === null) {
          current.next = newNode;
          this.length++
          return this.length;
        }
        current = current.next;
      }
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
