import {HashTable, HashTableLinear} from './hash-tables';

describe('Hash Tables', () => {
  describe('Without collision resolution', () => {
    it ('Should add get item', () => {
      const testItem = 'Morty'

      const hashTable = new HashTable()

      hashTable.set(testItem);

      expect(hashTable.get(testItem)).toEqual(testItem);
    })

    it ('Should remove item', () => {
      const testItem = 'Morty'

      const hashTable = new HashTable()

      hashTable.set(testItem);

      hashTable.remove(testItem)

      expect(hashTable.get(testItem)).toBeNull();
    })
  })

  describe('With collision resolution', () => {
    it ('Should add get item', () => {
      const testItemKey = 'Character'
      const testItemValue = 'Morty'

      const hashTable = new HashTableLinear()

      hashTable.set(testItemKey,testItemValue);

      expect(hashTable.get(testItemKey)).toEqual(testItemValue);
    })

    it ('Should remove item', () => {
      const testItem = 'Morty'

      const hashTable = new HashTableLinear()

      hashTable.set(testItem, 300);

      hashTable.remove(testItem)

      expect(hashTable.get(testItem)).toBeNull();
    })
  })
})
