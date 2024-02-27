const reverseString = (string: String) => {
  if (!string || string.length < 2 || typeof string !== 'string') {
    return 'not correct input';
  }

  const backward = [];

  for (let index = string.length - 1; index >= 0; index--) {
    backward.push(string[index]);
  }

  return backward.join('')
}

const reversed = reverseString('abcd');
console.log(reversed);
