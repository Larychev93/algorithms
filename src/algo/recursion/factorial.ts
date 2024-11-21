const findFactorialIterative = (number: number) => {
  let current = number;
  let anchor = 1;
  let output = 1;

  for (let i = current; current > 1; current--) {
    output = output + (output * anchor)

    anchor++
  }

  return output
}

const findFactorialRecursive = (number: number): number => {
  if (number <= 2) {
    return number
  }

  return number * findFactorialRecursive(--number)
}

console.log(findFactorialIterative(5))
console.log(findFactorialRecursive(5))
