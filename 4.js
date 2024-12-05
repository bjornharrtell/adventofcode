import { readFileSync } from "fs";

// Load the word search grid
const grid = readFileSync("4.data", "utf8")
  .split("\n")
  .map((line) => line.split(""));

// Target word
const target = "XMAS";
const directions = [
  [0, 1], // Right
  [1, 0], // Down
  [1, 1], // Down-right
  [1, -1], // Down-left
  [0, -1], // Left
  [-1, 0], // Up
  [-1, -1], // Up-left
  [-1, 1], // Up-right
];

function countOccurrences(grid, target) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const isValid = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols;

  function matches(x, y, dx, dy) {
    for (let i = 0; i < target.length; i++) {
      const nx = x + i * dx;
      const ny = y + i * dy;
      if (!isValid(nx, ny) || grid[nx][ny] !== target[i]) return false;
    }
    return true;
  }

  for (let x = 0; x < rows; x++)
    for (let y = 0; y < cols; y++)
      for (let [dx, dy] of directions) if (matches(x, y, dx, dy)) count++;
  return count;
}

const result = countOccurrences(grid, target);
console.log(result);
