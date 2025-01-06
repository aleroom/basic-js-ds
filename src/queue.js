const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tall = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; 
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    
    if (!this.head) {
      this.tail = null;
    }

    return dequeuedValue;
  }

  getUnderlyingList() {
    let current = this.head;
    let result = null;
    let currentResult = null;

    while (current) {
      const newNode = new ListNode(current.value);
      if (!result) {
        result = newNode;
        currentResult = result;
      } else {
        currentResult.next = newNode;
        currentResult = newNode;
      }
      current = current.next;
      }

    return result;
  }  
}

module.exports = {
  Queue
};
