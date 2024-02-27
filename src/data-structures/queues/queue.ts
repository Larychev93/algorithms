import {LinkedListNode} from '../linked-lists/node';

class Queue <A> {
  private first: LinkedListNode<A> | null;
  private last: LinkedListNode<A> | null;
  public length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(): LinkedListNode<A> | null {
    return this.first;
  }

  enqueue(value: A): void {
    const newNode = new LinkedListNode(value);

    if (this.length > 0) {
      /**
       * Update prev object with new next
       */
      this.last?.addNextNode(newNode)

      /**
       * Put new object as last
       */

      this.last = newNode;

      this.length++;

      return;
    }

    this.first = newNode;
    this.last = newNode;

    this.length++;
  }

  dequeue(): void {
    if (!this.first) {
      console.log('Empty queue already ')

      return;
    }

    if (this.first === this.last) {
      this.first = null;
      this.last = null;

      this.length--;

      return;
    }

    console.log('Normal Dequeue')

    const newFirst = this.first?.getNext();

    this.first = newFirst as LinkedListNode<A>;

    this.length--;

    return;
  }
}

const queue = new Queue();

queue.enqueue('Volt')
console.log(queue.peek());
queue.enqueue('Nord')
console.log(queue.peek());
queue.enqueue('Kida')
console.log(queue.peek());
console.log(queue.length);

queue.dequeue();
console.log(queue.peek());

console.log(queue.length);


queue.dequeue();
console.log(queue.peek());

console.log(queue.length);

queue.dequeue();
queue.dequeue();
console.log(queue.peek());

console.log(queue.length);
