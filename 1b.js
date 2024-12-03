import { readFileSync } from "fs";

const data = readFileSync("1.data", "utf8");

const lines = data.split("\n").map((pair) => pair.split("   "));
const list1 = [];
const list2 = [];
for (let line of lines) {
  list1.push(parseInt(line[0]));
  list2.push(parseInt(line[1]));
}
list1.sort();
list2.sort();
let sum = 0;
for (let val of list1) sum += val * list2.filter((val2) => val === val2).length;

console.log(sum);
