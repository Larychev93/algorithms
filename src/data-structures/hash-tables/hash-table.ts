class HashTable {
  private data!: Array<Array<any>>;

  constructor(size: number) {
    this.data = new Array(size);
  }

  private hash(key: string) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash;
  }

  set(key: string, value: any): number {
    const position = this.hash(key);

    if (!this.data[position]) {
      this.data[position] = value;

      this.data[position] = [];
      return this.data[position].push([ key, value ]);
    }

    return this.data[position].push([ key, value ]);
  }

  get(key: string): any | null {

    const position = this.hash(key);

    const currentBucket = this.data[position];

    for (const dataItem of Object.values(currentBucket)) {
      const [dataKey, dataValue] = dataItem;

      if (dataKey === key) {
        return dataValue;
      }
    }

    return null;
  }

  keys(): Array<string> {
    const keys: string[] = [];

    for (const firstLevelData of this.data) {
      if (firstLevelData && firstLevelData.length) {
        if (firstLevelData.length > 1) {
          for (const secondLevelData of firstLevelData) {
            keys.push(secondLevelData[0])
          }
        } else {
          keys.push(firstLevelData[0][0])
        }
      }
    }

    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
// console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 54)
// console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
