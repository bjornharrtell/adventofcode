import { readFileSync } from "fs";

const lines = readFileSync("2.data", "utf8")
  .split("\n")
  .map((nrs) => nrs.split(" ").map((nr) => parseInt(nr)));

function check(nrs) {
  let pd = null;
  for (let i = 0; i < nrs.length; i++) {
    const a = nrs[i];
    const b = nrs[i + 1];
    const d = a - b;
    const ad = Math.abs(d);
    if (ad === 0) return false;
    if (pd != null && ((pd < 0 && d > 0) || (pd > 0 && d < 0))) return false;
    if (ad > 3) return false;
    if (pd === null) pd = d;
  }
  return true;
}

let sum = 0;
for (let l of lines) sum += check(l) ? 1 : 0;

console.log(sum);

