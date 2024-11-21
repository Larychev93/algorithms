/**
 * Three main steps:
 * 1 Identify base case
 * 2 Identify recursive case
 * 3 Getting closer and return result
 */

let bottleFillMl: number = 0;
const maxSizeMl: number = 500;

const randomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}

const fillWatter = (ml: number): string => {
  const deltaToFill = maxSizeMl - bottleFillMl;

  console.log(`Bottle filled with ${bottleFillMl}`)

  if ((ml + bottleFillMl) > maxSizeMl) {
    bottleFillMl = bottleFillMl + deltaToFill

    return `Not enough Space in bottle, bottle filled with ${bottleFillMl} ml`;
  }

  bottleFillMl = bottleFillMl + ml

  return fillWatter(ml + randomNumber(1, 490 - ml));
}

console.log(fillWatter(50))
