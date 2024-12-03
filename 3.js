import { readFileSync } from "fs";

const str = readFileSync("3.data", "utf8");

let sum = 0;
const regex = /mul\((-?\d+),(-?\d+)\)/g;
const matches = str.matchAll(regex);
for (let match of matches) {
  const [, a, b] = match
  sum += a *b;
} 

console.log(sum);
