//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const findFibonacciIterative = (n: number) => {
  const output: number[] = []

  for (let i=0; i < n - 1; i++) {
    if (i <= 1) {
      output.push(i)
    }

    if (output.length >=2) {
      output[i + 1] = output[i] + output[i - 1]
    }
  }

  return output;
}

//@ts-ignore
const findFibonacciRecursive = (n: number, accum?: number[]) => {
  if (!accum) {
    return findFibonacciRecursive(n, [0, 1])
  }

  if (n === accum.length) {
    return accum
  }

  accum.push(accum[accum.length - 1] + accum[accum.length - 2])

  return findFibonacciRecursive(n, accum)
}

console.log(findFibonacciIterative(8))
console.log(findFibonacciRecursive(8))
