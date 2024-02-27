class LinkedListNode<A> {
  private value: A;
  private next: LinkedListNode<A> | null

  constructor(value: A) {
    this.value = value;
    this.next = null;
  }

  getValue(): A {
    return this.value;
  }

  getNext(): LinkedListNode<A> | null {
    return this.next;
  }

  addNextNode(value: LinkedListNode<A>) {
    this.next = value;
  }
}

export {
  LinkedListNode
}
