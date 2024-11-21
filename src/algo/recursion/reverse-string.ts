const reverseStringRecursive = (input: string, modified?: string, index?: number): string => {
  if (!index) {
    return reverseStringRecursive(input, input[input.length - 1], 1)
  }

  if (modified && index === (input?.length)) {
    return modified
  }

  const modifiedIndex = index + 1

  return reverseStringRecursive(input, modified?.concat(input[input.length - modifiedIndex]), modifiedIndex)
}

console.log(reverseStringRecursive('core'))
