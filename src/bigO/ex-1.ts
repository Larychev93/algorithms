// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunction(): void {
  console.log('run another'); // O(1)
}

function funChallenge(input: number[]) {
  let a = 10; // O(1)

  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)

    let stranger = true; // O(n)

    a++; // O(n)
  }

  return a; // O(1)
}

funChallenge([]); // O(3 + 3n)
