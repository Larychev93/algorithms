class DoublyLinkedListNode<A> {
  private readonly value: A;
  private next: DoublyLinkedListNode<A> | null
  private previous: DoublyLinkedListNode<A> | null

  constructor(value: A) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  getValue(): A {
    return this.value;
  }

  getNext(): DoublyLinkedListNode<A> | null {
    return this.next;
  }

  getPrev(): DoublyLinkedListNode<A> | null {
    return this.previous;
  }

  addNextNode(value: DoublyLinkedListNode<A>) {
    this.next = value;
  }

  addPrevNode(value: DoublyLinkedListNode<A> | null) {
    this.previous = value;
  }
}

class DoublyLinkedList<A> {
  private head: DoublyLinkedListNode<A>;
  private tail: DoublyLinkedListNode<A>;
  private length: number;

  constructor(value: A) {
    this.head = new DoublyLinkedListNode<A>(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value: A): void {
    let current = this.head;

    while(current.getNext()) {
      current = current.getNext() as DoublyLinkedListNode<A>;
    }

    const toCreate = new DoublyLinkedListNode(value);

    toCreate.addPrevNode(current);

    current.addNextNode(toCreate);

    this.tail = toCreate;
    this.length++
  }

  prepend(value: A): void {
    let current = this.head;

    this.head = new DoublyLinkedListNode<A>(value);

    current.addPrevNode(this.head);

    this.head.addNextNode(current);
    this.length++;
  }

  printList(): A[] {
    const array = [];

    let current = this.head;

    while(current !== null) {
      array.push(current.getValue());

      current = current.getNext() as DoublyLinkedListNode<A>;
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
      current = current.getNext() as DoublyLinkedListNode<A>;
      index++;
    }

    const toInsert = new DoublyLinkedListNode(value) as DoublyLinkedListNode<A>;

    previous?.addNextNode(toInsert);

    toInsert.addNextNode(current);
    toInsert.addPrevNode(previous as DoublyLinkedListNode<A>)

    current.addPrevNode(toInsert);

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
      const newHead = current.getNext() as DoublyLinkedListNode<A>;

      newHead.addPrevNode(null);

      this.head = newHead;
      this.length--;

      return this.printList();
    }

    while (index < position) {
      previous = current;
      current = current.getNext() as DoublyLinkedListNode<A>;
      index++;
    }

    const toAdd = current.getNext();

    toAdd?.addPrevNode(previous as DoublyLinkedListNode<A>);

    previous?.addNextNode(toAdd as DoublyLinkedListNode<A>);

    this.length--;

    return this.printList();
  }

}

const myDoublyLinkedList = new DoublyLinkedList(5);

myDoublyLinkedList.append(15);
myDoublyLinkedList.prepend(0);
myDoublyLinkedList.insert(1, 3);

myDoublyLinkedList.remove(0);

console.log(myDoublyLinkedList.printList());

