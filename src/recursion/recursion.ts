/**
 * Существует множество коробок в которых могут находится коробки или ключ
 * Нужно написатть функцию которая найдет ключ в коробке
 */
export const NOT_FOUND_MESSAGE = 'No key found in given boxes!'
export const FOUND_MESSAGE = 'Key found!'

const boxes = [
  {key: null, boxes: [{key: null, boxes: null}]},
  {key: null, boxes: [{key: null, boxes: null}]},
  {key: null, boxes: []},
  {key: null, boxes: [{key: null, boxes: [{key: true, boxes: null}]}]},
  {key: null, boxes: [{key: null, boxes: null}]}
]

export const recursion = (inputBoxes: any[]): any => {
  const inputBoxesCopy = [...inputBoxes]

  if (!inputBoxesCopy[0]) {
    return NOT_FOUND_MESSAGE;
  }

  if (inputBoxesCopy[0].key) {
    return FOUND_MESSAGE;
  }

  if (inputBoxesCopy[0].boxes && inputBoxesCopy[0].boxes.length) {
    inputBoxesCopy[0] = inputBoxesCopy[0].boxes[0]

    return recursion(inputBoxesCopy)
  }

  return recursion(inputBoxesCopy.slice(1))
}

console.log(recursion(boxes))
