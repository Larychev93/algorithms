import {quickSort} from './quick-sort';

describe('quickSort', () => {
  describe('When input array length less than 2', () => {
    it('should return input array', () => {
      const input = [7];

      expect(quickSort(input)).toEqual(input)
    })
  })

  describe('When input array length greater than 2', () => {
    it('should return sorted array', () => {
      const input = [1, 4, 7, 8, 0, 2, 5, 6, 9, 2, 3];

      const sorted = input.sort((a, b) => a - b)

      expect(quickSort(input)).toEqual(sorted)
    })
  })
})
