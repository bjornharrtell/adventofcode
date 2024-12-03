import { readFileSync } from "fs";

const pairs = readFileSync("1.data", "utf8")
  .split("\n")
  .map((pair) => pair.split("   "));
const list1 = [];
const list2 = [];
for (let line of pairs) {
  list1.push(parseInt(line[0]));
  list2.push(parseInt(line[1]));
}
list1.sort();
list2.sort();
const diff = [];
for (let i = 0; i < list1.length; i++) diff.push(Math.abs(list1[i] - list2[i]));

let sum = 0;
for (let d of diff) sum += d;

console.log(sum);

// 21271939
