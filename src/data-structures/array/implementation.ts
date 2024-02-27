class MyArray<Item> {
  private length: number;
  public data: { [key: string]: Item };

  constructor() {
    this.length = 0;
    this.data = {}
  }

  get(index: number): Item {
    return this.data[index];
  }

  push(item: Item): number {
    this.data[this.length] = item;

    this.length++;

    return this.length;
  }

  pop(): Item {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];

    this.length--;

    return lastItem;
  }

  delete(index: number): void {
    const desiredItem = this.data[index];

    this.shiftItems(index);
  }

  shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log(newArray.push('Hi'))
console.log(newArray.push('Hi2'));
console.log(newArray.push('Hi3'));
console.log(newArray.push('Hi4'));

console.log(newArray.delete(1))
console.log(newArray)
