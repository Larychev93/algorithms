import {LinkedListNode} from './node';

class LinkedList<A> {
  private head: LinkedListNode<A>;
  private tail: LinkedListNode<A>;
  private length: number;

  constructor(value: A) {
    this.head = new LinkedListNode<A>(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value: A): void {
    let current = this.head;

    while(current.getNext()) {
      current = current.getNext() as LinkedListNode<A>;
    }

    current.addNextNode(new LinkedListNode(value));

    this.tail = new LinkedListNode<A>(value);
    this.length++
  }

  prepend(value: A): void {
    let current = this.head;

    this.head = new LinkedListNode<A>(value);
    this.head.addNextNode(current);
    this.length++;
  }

  printList(): A[] {
    const array = [];

    let current = this.head;

    while(current !== null) {
      array.push(current.getValue());

      current = current.getNext() as LinkedListNode<A>;
    }

    return array;
  }

  insert(position: number, value: A): A[] {
    if (position === 0) {
      this.prepend(value);

      return this.printList();
    }

    let current = this.head;
    let previous = null;
    let index = 0;

    while (index < position) {
      previous = current;
      current = current.getNext() as LinkedListNode<A>;
      index++;
    }
    const toInsert = new LinkedListNode(value) as LinkedListNode<A>;

    previous?.addNextNode(toInsert);
    toInsert.addNextNode(current);

    this.length++;

    return this.printList();
  }

  remove(position: number): A[] {
    if (position < 0 || position > this.length) {
      throw 'Incorrect value of position';
    }

    let current = this.head;
    let previous = null;
    let index = 0;

    if (position === 0) {
      this.head = current.getNext() as LinkedListNode<A>;
      this.length--;

      return this.printList();
    }

    while (index < position) {
      previous = current;
      current = current.getNext() as LinkedListNode<A>;
      index++;
    }

    previous?.addNextNode(current.getNext() as LinkedListNode<A>);

    this.length--;

    return this.printList();
  }

  reverse(): LinkedListNode<A> | null {
    let prev: LinkedListNode<A> | null = null;
    let current: LinkedListNode<A> | null = this.head;
    let next = null;

    while(current) {
      next = current.getNext();

      if (prev) current.addNextNode(prev as LinkedListNode<A>);
      prev = current;
      current = next;
    }

    return prev;
  }

}

const myLinkedList = new LinkedList(5);



myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.prepend(0);
myLinkedList.insert(1, 3);

console.log(myLinkedList.printList());


myLinkedList.remove(1);

console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
