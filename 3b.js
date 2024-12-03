import { readFileSync } from "fs";

const str = readFileSync("3.data", "utf8");

let sum = 0;
let disabled = false;
const regex = /mul\((-?\d+),(-?\d+)\)|(don't\(\))|(do\(\))/g;
const matches = str.matchAll(regex);
for (let match of matches) {
  const [s, a, b] = match;
  if (s === "do()") disabled = false;
  else if (s === "don't()") disabled = true;
  else if (!disabled) sum += a * b;
}

console.log(sum);
