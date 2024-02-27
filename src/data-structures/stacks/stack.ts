import {LinkedListNode} from '../linked-lists/node';

class Stack <A> {
  top: LinkedListNode<A> | null;
  bottom: LinkedListNode<A> | null;
  length: number

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(): LinkedListNode<A> | null {
    return this.top;
  }

  push(value: A): void {
    if (!this.top) {
      this.top = new LinkedListNode<A>(value);

      ++this.length;

      return;
    }

    const newTop = new LinkedListNode<A>(value);

    const previousValue = this.top;

    newTop.addNextNode(previousValue);

    this.top = newTop;

    ++this.length;
  }

  pop(): void {
    if (this.top?.getNext()) {
      const newTop = this.top?.getNext();

      this.top = newTop;

      --this.length;

      return;
    }

    this.top = null;
    --this.length;
  }
}

const stack = new Stack();

stack.push('JS');
stack.push('TensorFLow');

console.log(stack.peek());

stack.pop();

console.log(stack.peek());

stack.pop();

console.log(stack.peek());
