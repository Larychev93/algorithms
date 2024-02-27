//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input: number[]): number | undefined {
  const map: {[key: number]: number} = {};

  for (let character of input) {
    if (map[character]) {
      return character;
    }

    map[character] = (map[character] || 0) + 1;
  }
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4])); // O(n)
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4])); // O(n)
console.log(firstRecurringCharacter([2,3,4,5])); // O(n)
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4])); // O(n)
