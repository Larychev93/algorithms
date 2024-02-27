import {FOUND_MESSAGE, NOT_FOUND_MESSAGE, recursion} from './recursion';

const boxesWithKey = [
  {key: null, boxes: [{key: null, boxes: null}]},
  {key: null, boxes: [{key: null, boxes: null}]},
  {key: null, boxes: []},
  {key: null, boxes: [{key: null, boxes: [{key: true, boxes: null}]}]},
  {key: null, boxes: [{key: null, boxes: null}]}
]

const boxesWithoutKey = [
  {key: null, boxes: [{key: null, boxes: null}]},
  {key: null, boxes: [{key: null, boxes: null}]},
  {key: null, boxes: []},
  {key: null, boxes: [{key: null, boxes: [{key: null, boxes: null}]}]},
  {key: null, boxes: [{key: null, boxes: null}]}
]

describe('recursion', () => {
  describe('When key present', () => {
    it('should return correct message', () => {
      expect(recursion(boxesWithKey)).toEqual(FOUND_MESSAGE)
    })
  })

  describe('When key is not present', () => {
    it('should return correct message', () => {
      expect(recursion(boxesWithoutKey)).toEqual(NOT_FOUND_MESSAGE)
    })
  })
})
