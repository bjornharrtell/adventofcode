import { readFileSync } from "fs";

const lines = readFileSync("2.data", "utf8")
  .split("\n")
  .map((nrs) => nrs.split(" ").map((nr) => parseInt(nr)));

function retryCheck(nrs, i, depth) {
  if (depth > 0) return false;
  return (
    check(nrs.slice(0, i).concat(nrs.slice(i + 1, nrs.length)), ++depth) ||
    check(nrs.slice(0, i + 1).concat(nrs.slice(i + 2, nrs.length)), ++depth) ||
    check(nrs.slice(0, i - 1).concat(nrs.slice(i, nrs.length)), ++depth)
  );
}

function check(nrs, depth = 0) {
  let pd = null;
  for (let i = 0; i < nrs.length; i++) {
    const d = nrs[i] - nrs[i + 1];
    const ad = Math.abs(d);
    if (
      ad === 0 ||
      ad > 3 ||
      (pd != null && ((pd < 0 && d > 0) || (pd > 0 && d < 0)))
    )
      return retryCheck(nrs, i, depth);
    if (pd === null) pd = d;
  }
  return true;
}

let sum = 0;
for (let l of lines) sum += check(l) ? 1 : 0;

console.log(sum);
