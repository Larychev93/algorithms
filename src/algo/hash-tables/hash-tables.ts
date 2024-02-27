export class HashTable {
  table: Array<any>;

  constructor() {
    this.table  = new Array(127);
  }

  showDictionary(): void {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }

  hash(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.table.length;
  }

  set(data: any): void {
    const position = this.hash(data);

    this.table[position] = data;
  }

  get(key: string): any {
    return this.table[this.hash(key)] || null;
  }

  remove(key: string) {
    this.table.splice(this.table.findIndex(item => item === key), 1)
  }
}


/**
 * Алгоритм хэш таблиц с техникой линейного зондирования для разрешения колизий
 */
export class HashTableLinear extends HashTable {
  values: any[]

  constructor() {
    super();

    this.values = [];
  }

  set(key: string, data?: any): void {
    let position = this.hash(key);

    if(this.table[position] === undefined) {
      this.table[position]  = key;
      this.values[position] = data;
    } else {
      while(this.table[position] !== undefined) {
        position++;
      }

      this.table[position]  = key;
      this.values[position] = data;
    }
  }

  get(key: string): any {
    const hash = this.hash(key);

    for (let i = hash; this.table[i] !== undefined; i++) {
      if (this.table[i] === key) {
        return this.values[i];
      }
    }

    return null;
  }

  showDictionary(): void {
    for (const [key, value] of Object.entries(this.table)) {
      console.log(key, value, ' : ', this.values[parseInt(key)]);
    }
  }

  remove(key: string): void {
    const hash = this.hash(key);

    for (let i = hash; this.table[i] !== undefined; i++) {
      if (this.table[i] === key) {
        const indexToRemove = this.table.findIndex(item => item === key)

        this.values.splice(indexToRemove, 1);
        this.table.splice(indexToRemove, 1);
      }
    }
  }
}

const ht = new HashTable();

for (let i = 0; i < 500; i++) {
  ht.set('Canada' + i)
}

const htWithLinear = new HashTableLinear();

for (let i = 0; i < 500; i++) {
  htWithLinear.set('Canada' + i, i)
}

