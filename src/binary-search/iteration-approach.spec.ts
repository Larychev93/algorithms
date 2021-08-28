import {iterativeBinarySearch} from './iteration-approach';

describe('iterativeBinarySearch', () => {
 describe('when element present in array', () => {
   it('should return correct message with 1 amount of try', () => {
     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     const x = 5;

     const result = iterativeBinarySearch(arr, x);

     expect(result).toEqual(`Target found at index 4, amount of tries 1`)
   })

   it('should return correct message with 4 amount of try', () => {
     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     const x = 7;

     const result = iterativeBinarySearch(arr, x);

     expect(result).toEqual(`Target found at index 6, amount of tries 4`)
   })
 })

  describe('when element is noy present in array', () => {
    it('should return correct message', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const x = 20;

      const result = iterativeBinarySearch(arr, x);

      expect(result).toEqual(`No such target in array`)
    })
  })
})
